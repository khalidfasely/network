from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    pass


class Posts(models.Model):
    user = models.ForeignKey("User", on_delete=models.PROTECT, related_name="poster")
    content = models.TextField(blank=False, null=False)
    likes = models.IntegerField(default=0)
    time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user} Post {self.content} In {self.time}"

    def serialize(self):
        return {
            "id": self.id,
            "user": self.user.username,
            "user_id": self.user.id,
            "content": self.content,
            "likes": self.likes,
            "time": self.time.strftime("%b %d %Y, %I:%M %p")
        }


class Likes(models.Model):
    post_id = models.ForeignKey(Posts, on_delete=models.CASCADE, related_name="post_likes")
    #likes_num = models.IntegerField(default=0)
    likes_user_id = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.likes_user_id} Like {self.post_id}"


#class Comments(models.Model):
#    post_id = models.ForeignKey(Posts, on_delete=models.CASCADE)
#    comment = models.TextField(null=False, blank=False)
#    comment_user_id = models.ForeignKey(User, on_delete=models.CASCADE)
#    
#    def __str__(self):
#        return f"{self.comment_user_id} Comment {self.content} On {self.post_id}"


class Followers(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user")
    following = models.ForeignKey(User, on_delete=models.CASCADE, related_name="following")

    def __str__(self):
        return f"{self.user_id} Follow {self.following}"