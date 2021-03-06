import json

from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.shortcuts import render
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required

from .functions import likes

from .models import User, Posts, Followers, Likes

#def index(request):
#    if request.user.is_authenticated:
#        print("Logged in")
#    else:
#        print("Not logged in")

def index(request):
    return render(request, "network/index.html")

def user(request):
    return JsonResponse({"user": f"{request.user}", "is_admin": (request.user.is_superuser)}, status=201)
    #return render(request, "network/index.html")

@csrf_exempt
def login_view(request):
    if request.method == "POST":

        # Attempt to sign user in
        data = json.loads(request.body)
        username = data.get("username")
        password = data.get("password")
        #username = request.POST["username"]
        #password = request.POST["password"]
        user = authenticate(request, username=username, password=password)

        # Check if authentication successful
        if user is not None:
            login(request, user)
            #return 'Valid'
            return JsonResponse({"message": "Login Successfully", "user": f"{request.user}", "is_admin": (request.user.is_superuser)}, status=201)
        else:
            return JsonResponse({"message": "Invalid username and/or password."}, status=201)
            #return render(request, "network/login.html", {
            #    "message": ""
            #})
            #return ({
            #    "message": "Invalid username and/or password."
            #})
    else:
        return JsonResponse({"message": "The method must be POST"}, status=400)
        #return render(request, "network/login.html")


def logout_view(request):
    if request.user.username: #LC
        logout(request)
        return JsonResponse({"message": "Logged Out"}, status=201)
        #return HttpResponseRedirect(reverse("index"))
    return JsonResponse({ "message": "You Are Not Log In" })

@csrf_exempt
def register(request):
    if request.method == "POST":
        data = json.loads(request.body)
        
        username = data.get("username")
        email = data.get("email")
        #username = request.POST["username"]
        #email = request.POST["email"]

        # Ensure password matches confirmation
        password = data.get("password")
        confirmation = data.get("confirmation")
        #password = request.POST["password"]
        #confirmation = request.POST["confirmation"]
        if password != confirmation:
            return JsonResponse({"message": "Passwords must match"}, status=201)
            #return render(request, "network/register.html", {
            #    "message": "."
            #})

        # Attempt to create new user
        try:
            user = User.objects.create_user(username, email, password)
            user.save()
        except IntegrityError:
            return JsonResponse({"message": "Username already taken"}, status=201)
            #return render(request, "network/register.html", {
            #    "message": "."
            #})
        login(request, user)
        return JsonResponse({"message": "Register", "user": f"{request.user}", "is_admin": (request.user.is_superuser)}, status=201)
        #return HttpResponseRedirect(reverse("index"))
    else:
        return JsonResponse({"message": "The method must be POST"}, status=400)
        #return render(request, "network/register.html")


@csrf_exempt
def new_post(request):
    if request.method != "POST" or not request.user.username: #LC
        return JsonResponse({ "message": "The method must be POST And/Or You need the be logged in." }, status=400)

    #Get data from request
    data = json.loads(request.body)

    #Get content, user from data
    content = data.get("content", "")
    user = request.user

    #Save data into database
    post = Posts.objects.create(user=user, content=content)
    post.save()
    #print(f'post, {post.serialize()}')

    return JsonResponse({ "message": "Post saved successfully.", "post": post.serialize(), "likes": likes(request) }, status=201)


def posts(request):
    #To reverse the order
    #posts = list(Posts.objects.order_by("-time").values())
    #return JsonResponse({ "posts": posts }, status=201)
    posts = Posts.objects.order_by("-time").all()
    return JsonResponse({ "posts": [post.serialize() for post in posts], "likes": likes(request) }, status=201)

def profile(request, user_id):
    user = User.objects.get(pk=user_id)
    posts = Posts.objects.order_by("-time").filter(user=user_id)
    following = Followers.objects.filter(user_id=user_id).count()
    followers = Followers.objects.filter(following=user_id).count()

    # If the user singing in
    if request.user.username:
        follow_up = Followers.objects.filter(user_id=request.user, following=user_id).first()
    else:
        follow_up = None

    return JsonResponse({
        "posts": [post.serialize() for post in posts],
        "user": f"{user}",
        "follow": {
            "following": f"{following}",
            "followers": f"{followers}",
            "follow_up": f"{follow_up}"
        },
        "likes": likes(request)
    }, status=201)

@csrf_exempt
def follow(request):
    if request.method == "POST" and request.user.username: #LC
        data = json.loads(request.body)
        following = data.get("following", "")
        following_user = User.objects.get(pk=following)

        already_follow = Followers.objects.filter(user_id=request.user, following=following_user).first()
        
        if already_follow or request.user == following_user: #LC2
            return ({ "message": "You have not the right to follow yourself Or You are already following this user." })
        
        else:
            follow = Followers.objects.create(user_id=request.user, following=following_user)
            follow.save()

            return JsonResponse({ "message": "Follow Successfully." })

    return JsonResponse({ "message": "The method must be POST And/Or You need the be logged in." })

@csrf_exempt
def unfollow(request):
    if request.method == "POST" and request.user.username: #LC
        data = json.loads(request.body)
        following = data.get("following", "")
        following_user = User.objects.get(pk=following)

        not_already_unfollow = Followers.objects.filter(user_id=request.user, following=following_user).first()

        if not_already_unfollow and request.user != following_user: #LC2
            Followers.objects.filter(user_id=request.user, following=following_user).delete()

            return JsonResponse({ "message": "Unfollow Successfully." })
        
        else:
            return ({ "message": "You have not the right to follow yourself Or You are already following this user." })

    return JsonResponse({ "message": "The method must be POST And/Or You need the be logged in." })


def following(request):
    if request.user.username: #LC
        users_f = []
        followings = Followers.objects.filter(user_id=request.user)
        for following_user in followings:
            users_f.append(following_user.following.id)
        posts = Posts.objects.filter(user__in=users_f)

        posts = posts.order_by("-time").all()

        return JsonResponse({ "posts": [post.serialize() for post in posts], "likes": likes(request) }, status=201)

    return JsonResponse({ "message": "You Are Not Log In" })

@csrf_exempt
@login_required(login_url="/login")
def savep(request, id):

    try:
        post = Posts.objects.get(pk=id)
    except:
        return JsonResponse({"error": "Post not found."}, status=404)

    #Security
    if not request.user.username or request.user != post.user: #LC
        return JsonResponse({"message": "You are not able to Edit this post Or you are not logged in."}, status=201)

    if request.method == "GET":
        return JsonResponse({"message": "get method"})

    if request.method == "PUT":
        data = json.loads(request.body)

        post.content = data.get("content")
        post.save()
        #return HttpResponse(status=204)
        return JsonResponse({"message": "Edit successfully."}, status=201)

def like(request, id):
    if request.user.username: #LC
        # Increse Post's Likes
        likes_num = Posts.objects.get(pk=id).likes
        Posts.objects.filter(pk=id).update(likes = likes_num + 1)

        # Create New Like-User
        post = Posts.objects.get(pk=id)

        already_like = Likes.objects.filter(post_id=post, likes_user_id=request.user).first()

        if already_like: #LC3
            return JsonResponse({ "message": "You are already like this post." })

        else:
            likes_post = Likes.objects.create(post_id=post, likes_user_id=request.user)
            likes_post.save()

            return JsonResponse({"message": "Like successfully."}, status=201)
    
    return JsonResponse({ "message": "You Are Not Log In" })

def unlike(request, id):
    if request.user.username: #LC
        # Increse Post's Likes
        likes_num = Posts.objects.get(pk=id).likes
        Posts.objects.filter(pk=id).update(likes = likes_num - 1)

        # Create New Like-User
        post = Posts.objects.get(pk=id)

        not_already_unlike = Likes.objects.filter(post_id=post, likes_user_id=request.user).first()

        if not_already_unlike: #LC3
            Likes.objects.get(post_id=post, likes_user_id=request.user).delete()
            return JsonResponse({"message": "Unlike successfully."}, status=201)
        
        else:
            return JsonResponse({ "message": "You have not the right to unlike this post." })

    return JsonResponse({ "message": "You Are Not Log In" })

"""
LC
In the future I must be taking care of security from the backend also
(Check in all route with POST method if request.user ...) done
(Check in that the following user does not already ...)done
(Check if the post you like you are not already likes it ...)done"""