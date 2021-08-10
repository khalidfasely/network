import json

from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.shortcuts import render
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt

from .models import User, Posts

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
    logout(request)
    return JsonResponse({"message": "Logged Out"}, status=201)
    #return HttpResponseRedirect(reverse("index"))

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
    if request.method != "POST":
        return JsonResponse({ "message": "The method must be POSt" }, status=400)
    
    #Get data from request
    data = json.loads(request.body)

    #Get content, user from data
    content = data.get("content", "")
    user = request.user

    #Save data into database
    post = Posts.objects.create(user=user, content=content)
    post.save()
    #print(f'post, {post.serialize()}')

    return JsonResponse({ "message": "Post saved successfully.", "post": post.serialize() }, status=201)


def posts(request):
    #To reverse the order
    #posts = list(Posts.objects.order_by("-time").values())
    #return JsonResponse({ "posts": posts }, status=201)
    posts = Posts.objects.order_by("-time").all()
    return JsonResponse({ "posts": [post.serialize() for post in posts] }, status=201)