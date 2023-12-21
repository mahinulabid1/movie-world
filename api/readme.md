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

## API Route Define
Here I'm pointing out some API route 

<br>

#### Get all movie Item
```console
Request Type: GET
------------------------
route LINK: http://localhost:8000/allMovies
```
RESPONSE: it fetches all movies list from the databas, if the database is big  this will take a lot of time

<br>

#### Get all movie with limit
```console
Request Type: GET
------------------------
route LINK: http://localhost:8000/allMovies?limit=2

query: limit=2
```
RESPONSE: it fetches all movies list with `LIMIT`. It only fetches 2 movies.

<br>

#### Fetch movies by ID
```console
route LINK: http://localhost:8000/movieDetail?id=6583085cc91fe0f31a601040

query: id=6583085cc91fe0f31a601040
_____________________
id= is the MONGODB's default objectId which is unique.
```
RESPONSE: API route for fetching specific Movie's detail  ID.

<br>

#### Fetch Released Movie
You can choose which field you want to fetch using `projection query`. <br> And you can limit result by using `limit query`.
```console
route LINK: http://localhost:8000/featuredMovie?projection=movieCover-movieThumbnail&limit=2
route LINK: http://localhost:8000/featuredMovie?projection=movieCover-movieThumbnail
route LINK: http://localhost:8000/featuredMovie?limit=2

query detail : limit=2
query detail : projection=movieCover-movieThumbnail
```
Explain: set multiple field using `-` seperator. <br> The route fetches `movieCover & movieThumbnail` Since I wrote `projection=movieCover-movieThumbnail`. <br> 
RESPONSE: API route for fetching specific Movie's detail  ID.

<br>

#### Create new movie Data
```console
Request Type: GET
------------------------
route LINK: http://localhost:8000/newMovie

```