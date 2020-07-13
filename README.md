# CodeProConnection (CPC)
Brought to you by the Silver Foxes Group.

This is an app that will allow anyone with a need for a website, app or electronic media, to be connected with a freelancer.

# Links:
Heroku Deployment: https://cpc-project3.herokuapp.com/

GitHub repo: https://github.com/shamlin143/Codepro2 

previous repo (with commit history.  we needed to rewrite the app so the histoy is continued on the above repo.  https://github.com/shamlin143/CodeProConnection

# Freelancer’s Story:
I am a freelancer that is looking for paying jobs.  I want an app that can help me find work.  CPC (CodeProConect) is a website that will allow me to connect with people that are offering me the work I am looking for.

# Requester’s Story:
I need a website, app or some electronic media created.  I want to hire someone to create these things? CPC (CodeProConnect) is just such a place.  I can submit my project, and freelancers from all over the world will be able to apply to work for me.

# Motivation
Motivation for development: We are finishing are “Coding Bootcamp” and many of us will be looking for a job.  What better way to find work. 

# Process
Technologies used: Mongo, Express, ReactJS, NodeJS, Passport, Mongoose, HTML, JavaScript, jQuery, CSS, Script.CSS, Bootstrap. Breakdown of tasks and roles: Travis - Back end code. Add Project form. code to find Id of logged user. Scott - Styling of front end and writing of back end code. Created GitHub repository Doug - Write Models and set up routes. Deploy to Heroku. Set up .env file. . General clean up and troubleshooting.

# Challenges:
Deploying to Heroku.
Adding Passport authentication.
Creating a change of “state” of a parent with a child. 
Changing file structure to traditional client/server style.  We started with an untraditional file structure.

# Successes
We became more comfortable with React, and how easy it is to add pages and components.
Much more familiar with “package.json”, “nodeModules” and deploying to “Heroku.
We learned how to organize and reorganize file structures to meet the “Create-React-App” format.

# Components
Add where needed info of the site and what it does and how to navigate to the components as necessary.

sign-up page: freelancer sign-up and employer-sign-up (this will got to freelance or business forms.)

freelancer page (listing of all jobs)  (apply button TBD)

business page (show freelancers that apply) TBD

login page: login (this will go to either freelance or business page)

# Future Development
Add Code to allow user to change their password or create a new one if they lose it.
Add a database to track projects and who has applied to them.
Add a square module to allow for a sign up fee.
Improve design of colors and tables.
Functionality to sort through projects.

# Databases
users: unique _ID, name, email, password, identifier for freelancer or employer

Projects: unique _ID, Project Features, Project Name, project Type, project description, project notes, fee, email, date.

Sessions: ID, expires, session("cookie")