import { createBrowserRouter } from "react-router-dom";
import Homepage from "./app/homepage/homepage";
import MovieDetailPage from "./app/movieDetailpage/movieDetail";


const routeHandler = createBrowserRouter ( [
    {
        path : "/",
        element : <Homepage />,
    },
    {
        path :  "/movieDetail",
        element : <MovieDetailPage />
    }

] );

export default routeHandler;