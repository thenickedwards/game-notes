# game-notes (FKA tech-blog)
Homework 14 Model-View-Controller (MVC): Tech Blog

All code for GAme Notes written per acceptance criteria in [provided_assets/W14-hw_readme.md](/provided_assets/W14-hw_readme.md).

## Preface
This submission is incomplete.  Currently the database is created and seeded correctly.  All of the userRoutes, postRoutes, commentRoutes, and all written homeRoutes function correctly.  The homepage will render all posts.  If a user clicks a post, they will be navigated to a page with those posts and I am attempting to render the comments related to the post.  At the moment there is no readme.  I will continue to work on this assignment and plan to resubmit for a better grade.
UPDATE: A post will now render with its assocaited comments.

## Acceptance Criteria
Below is the acceptance criteria from this assignement.

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
NOTE: THIS LAST PIECE OF ACCEPTANCE CRITERIA WAS UPDATED BY OUR INSTRUCTOR DURING CLASS SESSION 14.2 ~6min
WHEN I am idle on the site for more than a set time
THEN I am able to view posts but I am prompted to log in again before I can add, update, or delete posts
```

## Work Done
* Please Note: this site must be run on local server at this time.
* When a user visits the site for the first time, they are presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
* When a user clicks on the homepage option, they are taken to the homepage
* When a user clicks on any other links in the navigation, they are prompted to either sign up or sign in
* When a user chooses to sign up, they are prompted to create a username and password
* When a user clicks on the sign-up button and submits their data, the user's credentials are saved and they are logged into the site
* When a user revisits the site at a later time and choose to sign in, they are prompted to enter their username and password
* When a user is signed in to the site, they see navigation links for the homepage, the dashboard, and the option to log out -->
* When a user clicks on the homepage option in the navigation, they are taken to the homepage and presented with existing blog posts that include the post title and the date created
* When a user clicks on an existing blog post, they are presented with the post title, contents, post creator’s username, and date created for that post
 <!-- ADD BUTTON and have the option to leave a comment -->
<!-- WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created -->
* When a user clicks on the dashboard option in the navigation, they are taken to the dashboard and presented with any blog posts that user has already created and the option to add a new blog post
* When a user clicks on the button to add a new blog post, they are prompted to enter both a title and contents for a blog post.
* When a user clicks on the button to create a new blog post, the title and contents of my post are saved and they are taken back to an updated dashboard with my new blog post.
<!-- WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard -->
* When a user clicks on the logout option in the navigation, they are signed out of the site.
NOTE: THIS LAST PIECE OF ACCEPTANCE CRITERIA WAS UPDATED BY OUR INSTRUCTOR DURING CLASS SESSION 14.2 ~6min
* When a user is idle on the site for more than a set time, they are able to view posts but prompted to log in again before they can add, update, or delete posts


## Links
URL for GitHub repo: https://github.com/thenickedwards/tech-blog

URL for Heroku app: https://gamenotes-thenickedwards.herokuapp.com/
(Not currently functional.)

Thank you for reading the readme!

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://gamenotes-thenickedwards.herokuapp.com/)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
