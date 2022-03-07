# Overview
  
In The CS50W course project4, it require us to build a network app that containes the ability to add a post, see the post, like/unlike the posts ...

To build this App I used Django, React and Sass.

# Routes
## Login: /login
User can log into the website using a valid username and password for an existing account.

## Register: /register
User must enter their username, email address, password and confirmation password.  
The validation of the page are:
1. The password must match the confirmation password.
2. The username should be unique, meaning no other existing account has the same username.

## Index: /
This page makes a GET request to the posts API route to get all the posts, this page is access by every user no matter if he's logged in or not. Then display all the posts on the database. The user who created a post can delete it or edit it from this page.  
This page also containes a form to add a post for the users who are logged in, they can also like/unlike a post.

## User page: /user/\<userID>
This page display All the posts created by a User and some other informations about the user like the number of followers/following.  
The User who visit his page cannot follow himself.

# Models
There is 4 models in this app(NetworkApp)

1. User: An extension of Django's AbstractUser model. Stores the informations about users.
2. Posts: Store post informations (**user**, **content**, **time**, **likes** is IntegerField track the number of likes on a post).
3. Likes: Store post likes information, track every post and the users that likes it.
4. Followers: Store user follows information.


# What’s contained in each file I created.

## project4/ folder:
This folder comes with django as the project folder and it containes the settings.py file...

## network/ folder:
The backend folder project is network/ :
In this folder as you can see there are the default files that comes with Django and the files I created:

1- First I create the models.

2- Second I edit admin.py file to access the data from the admin page that comes with Django.

3- Third I create the Views:

- In the views.py file I import all the things that I will need as JsonResponse, The models...

    - user view: This view return the user's logged in informations to the front-end like username, and a boolean if the user is_admin or not(I add the is_admin for a comming feature to the app, so it doesn't make anything yet).
    - login_view: This view try to login, and then return the informations about the user logged in.
    - logout_view: This view logout the user that logged in.
    - register_view: This view try to create a new user, then login and returns the user informations to the front-end.
    - new_post view: This view try to create a new post, then return the post's information.
    - posts view: Return all posts from the database to the front-end.
    - profile view: Returns profile informations, the number of followers/following, posts that the user created.
    - follow/unfollow views: To Follow or Unfollow a user.
    - following view: Returns the following information to the front-end about the current user logged in as the number of following and followers ...
    - savep view: This view try to edit a post, then returns the result.
    - like/unlike views: To Like or Unlike a post.

4- Forth I create a url on the urls.py file for every view.

5- Last I create the tests for the views on the tests.py file.


## front-end/ folder:
The folder for the front-end is front-end/:  
When we go to this folder and to the src/ folder, we first see:
- The actions/ folder that containes files like auth.js posts.js, with actions for the Redux Store.
- The components/ folder that containes all components that renders the app, every component is response for a part of the app(Header component response for the header in the app...).
- The fetching/ folder that containes files, each of them contain function that response for fetch specific data from the backend views.
- The images/ folder containes all images and icons I used on the app.
- The reducers/ folder containes files, every file contain a Redux reducer.
- The router/ folder containes 3 files:
    - AppRouter.js: as the root of the app and specified every component with his URL.
    - PriveteRoute.js and SignRoute.js: check if some user have the access to some page, if yes render the page, if no redirect the User to an available page.
- The store/ folder containes a configureStore.js file that combine all the Redux reducers.
- The styles/ containes:
    - base/: That contains some base styling.
    - components/: That containes styles files, every file contains styles for a specific component.
    - styles.scss: That imports all the styles files, and this file is the one imported on the root of the app(index.js file).
- The tests/ folder that containes actions/ folder test.

# How to run the application
<!--#First you must have Python and Django and NodeJs installed in your machine
#- Then you need to go to the front-end folder(blog-f-e/) and run npm install to create node_modules/ folder.
#- Then back on the root of the app run python manage.py runserver.-->

- Copy the repository to your system.
- Make sure you have Python and Django and NodeJs installed on your system. If not you will need to install them.
- Install yarn on your machine.
- Go to the front-end folder
```shell
cd front-end
```
- and run these commands:
```shell
yarn install
```
```shell
yarn run build
```
- Go back to the project folder
- install virtualenv, then create a folder (ENV_FOLDER) and run

```shell
virtualenv ENV_FOLDER
```
```shell
cd ENV_FOLDER/scripts
```
```shell
activate
```

<!--
- Then go back to the root of the project
and install the packages from the requirements.txt file.
-->

Then run 

```shell
python manage.py runserver
```

Then create an account and to create new post, like/unlike a post ...

> You can also visit the app on the internet https://lek-network.herokuapp.com/