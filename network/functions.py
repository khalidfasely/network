from .models import Likes

def likes(request):
    if request.user.username:
        likes = Likes.objects.filter(likes_user_id=request.user)
        return ([like.serialize() for like in likes])
    else:
        return []