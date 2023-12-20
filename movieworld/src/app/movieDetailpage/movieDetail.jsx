
import Navigation from "../../ui/navigation/navigation";
import MovieThumbnail from "./module/movieThumbnail/movieThumbnail";
import MovieInfo from "./module/movieInfo/movieInfo";
import TopCast from "./module/topCast/topCastSection";
import Footer from "../../ui/footer/footer";

const MovieDetailPage = () => {

    return(
        <>
            <Navigation />
            <MovieThumbnail />
            <MovieInfo />
            <TopCast />
            <Footer />
        </>
    )
}

export default MovieDetailPage; 