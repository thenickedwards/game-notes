# game-notes (FKA tech-blog)
Homework 14 Model-View-Controller (MVC): ~~Tech Blog~~ Game Notes

All code for Game Notes written per acceptance criteria in [provided_assets/W14-hw_readme.md](/provided_assets/W14-hw_readme.md).  Note: I have adjust the style and purpose of the blog to center around the communications of a soccer team.  My vision is to create a place where users can engage in the same asks found in the assignment though the focus is collecting thoughts, observations, questions, etc. on recent soccer games (rather than a tech blog). My initial idea was to create a space where a head coach could coordinate and collaborate with their coaching staff, medical personnel, data analysts, and other team members.  This change was approved by my instructor.

## Preface 2/19/22
This submission is incomplete.  Currently the database is created and seeded correctly.  All of the userRoutes, postRoutes, commentRoutes, and all written homeRoutes function correctly.  The homepage will render all posts.  If a user clicks a post, they will be navigated to a page with those posts and I am attempting to render the comments related to the post.  At the moment there is no readme.  I will continue to work on this assignment and plan to resubmit for a better grade.
UPDATE: A post will now render with its assocaited comments.

## Update 3/4/22
This project is now complete, fully functional, and meets all acceptance criteria.  PLEASE NOTE: Login credentials are EMAIL and password (not username).  Thank you for your patience!
## Work Done
* When a user visits the site for the first time, they are presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
* When a user clicks on the homepage option, they are taken to the homepage
* When a user clicks on any other links in the navigation, they are prompted to either sign up or sign in
* When a user chooses to sign up, they are prompted to create a username and password
* When a user clicks on the sign-up button and submits their data, the user's credentials are saved and they are logged into the site
* When a user revisits the site at a later time and choose to sign in, they are prompted to enter their username and password
* When a user is signed in to the site, they see navigation links for the homepage, the dashboard, and the option to log out
* When a user clicks on the homepage option in the navigation, they are taken to the homepage and presented with existing blog posts that include the post title and the date created
* When a user clicks on an existing blog post, they are presented with the post title, contents, post creator’s username, and date created for that post
* When a user enters a comment and click on the submit button while signed in, the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
* When a user clicks on the dashboard option in the navigation, they are taken to the dashboard and presented with any blog posts that user has already created and the option to add a new blog post
* When a user clicks on the button to add a new blog post, they are prompted to enter both a title and contents for a blog post.
* When a user clicks on the button to create a new blog post, the title and contents of my post are saved and they are taken back to an updated dashboard with my new blog post.
* When a user clicks on one of my existing posts in the dashboard, they are able to delete or update my post and taken back to an updated dashboard
* When a user clicks on the logout option in the navigation, they are signed out of the site.
NOTE: THIS LAST PIECE OF ACCEPTANCE CRITERIA WAS UPDATED BY OUR INSTRUCTOR DURING CLASS SESSION 14.2 ~6min
* When a user is idle on the site for more than a set time (4 hrs), they are able to view posts but prompted to log in again before they can add, update, or delete posts

## Screenshots

#### Home page
![gamenotes-home](https://user-images.githubusercontent.com/92474821/156905270-d324726e-0f43-4ac4-9a6f-727ae360ff02.png)

#### Login & Signup
![gamenotes-login](https://user-images.githubusercontent.com/92474821/156905234-c1909da2-5452-4c85-be69-298100c3455a.png)

#### User Dashboard
![gamenotes-dash](https://user-images.githubusercontent.com/92474821/156905273-cb4424e0-1e69-46e6-80df-86315f11160f.png)

#### Example Post 1
![gamenotes-post1](https://user-images.githubusercontent.com/92474821/156905280-931e3dab-0e84-4156-a69d-2d214260e224.png)

#### Example Post 2
![gamenotes-post2](https://user-images.githubusercontent.com/92474821/156905288-cc8636e4-ed9a-4d16-b8c2-ee509d7e8af6.png)


## Links
URL for GitHub repo: https://github.com/thenickedwards/tech-blog

URL for Heroku app: https://gamenotes-thenickedwards.herokuapp.com/
(Not currently functional.)

Thank you for reading the readme!

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://gamenotes-thenickedwards.herokuapp.com/)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
