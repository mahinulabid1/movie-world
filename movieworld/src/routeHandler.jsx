import { createBrowserRouter } from "react-router-dom";
import Homepage from "./app/homepage/homepage";

const routeHandler = createBrowserRouter ( [
    {
        path : "/",
        element : <Homepage />,
    },
    
] );

export default routeHandler;