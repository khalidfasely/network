from django.contrib import admin

from .models import User, Posts, Likes, Followers

# Register your models here.
admin.site.register(User)

# Register your models here.
admin.site.register(Posts)
admin.site.register(Likes)
admin.site.register(Followers)