
from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register", views.register, name="register"),
    path("user", views.user, name="user"),
    path("new_post", views.new_post, name="new_post"),
    path("posts", views.posts, name="posts"),
    path("profile/<int:user_id>", views.profile, name="profile"),
]
