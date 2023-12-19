import styles from "./movieDetail.module.css"
import Navigation from "../../ui/navigation";
import MovieThumbnail from "./module/movieThumbnail";
import MovieInfo from "./module/movieInfo";
import TopCast from "./module/topCastSection";
import Footer from "../../ui/footer";

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