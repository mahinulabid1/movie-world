### Table of Content
1. [Folder Structure Introduction](#Folder-Structure-Introduction)
    - [Root folder Structure](#Root-Folder-Structure)
    - [api folder Structure](#api-Folder-Structure)
2. [Start Development Server](#Start-Development-Server)
    - [Start Node.js Server](#Node-Server)
    - [Start React.js Server](#React-Server)


<br>

## Folder Structure Introduction
#### Root Folder Structure
```
root_Folder

    |- api        : REST API application for movieworld
    |- movieworld : [React Website], uses API to perform database operation
    |- .gitignore
    |- readme.md
```

<br>

#### api Folder Structure
```
   api
    |- src : contains all application related file
    |      |- AWS_S3 : contains code to perform operations in AMAZON S3 bucket
    |      |- additionalFunction : database related additional function
    |      |- controller : contains function that performs database operation
    |      |- model : contains mongoose model
    |      |- route : contains api route collection
    |
    |- index.js : main file of the API
    |- package.json
    |- packagelock.json
```


<br>
<br>

## Start Development Server:

> <b>Note:</b> There is a high probability that I won't be able to finish this project with full functionalities in time.
In that case, if the `CODE REVIEWER` want to <ins>check</ins> the output of this project, follow these steps
* Download the project from gitHub.
* Navigate to `main directory` of the project using `terminal`.
* `main directory` means the directory where these files contain `api/`, `movieworld/`, `.gitignore`, `readme.md`
* Then, [Start Node.js Server](#Node-Server)
* And [Start React.js Server](#React-Server)



### React Server
> Assuming you're on the `main directory` of the project. Run this code in terminal
```terminal
cd movieworld
npm run dev
``` 
This will start compiling the react component and host the application on localhost.

<br>

## Node Server
> Assuming you're on the main directory of the project. Run this code in terminal
```terminal
cd api
npm run start
``` 
This will start server on localhost within specific PORT.



<br>
<br>

## Technologies Used: 
* React.js(using vite)
* Express.js
* MongoDB
* Mongoose