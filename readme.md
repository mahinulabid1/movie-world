### Table of Content
1. [Folder Structure Introduction](#Folder-Structure-Introduction)
    - [Root folder Structure](#Root-Folder-Structure)
    - [api folder Structure](#api-Folder-Structure)
2. [Start Development Server](#Start-Development-Server)
    - [Start Node.js Server](#Node-Server)
    - [Start React.js Server](#React-Server)
3. [API route Explaination]()


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

#### movieworld Folder Structure
```
    movieworld
        |- public           : contains all static image & video file.
        |- src              : source of the whole `react application`.
        |- .eslintrc.cjs
        |- README.md
        |- index.html       : Main html file where react component gets rendered.
        |- package.json
        |- package-lock.json
        |- vite.config.js 
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


## API Route Define
Here I'm pointing out some API route 

<br>

#### Get all movie Item
```console
route LINK: http://localhost:8000/allMovies
response: it fetches all movies list from the databas, if the database is big  this will take a lot of time
```



<br>
<br>

## Technologies Used: 
* React.js(using vite)
* Express.js
* MongoDB
* Mongoose