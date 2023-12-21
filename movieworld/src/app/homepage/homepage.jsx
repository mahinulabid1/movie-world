import Navigation from "../../ui/navigation/navigation";
import HeroSection from "./module/heroSection/heroSection";
import UpcomingMoviesSection from "./module/upcomingMoviesSection/upcomingMoviesSection";
import MoviesYouRated from "./module/userRatedMovies/moviesYouRatedPage";
import UserWatchList from "./module/userWatchList/userWatchList"
import UserAddedMovies from "./module/userAddedMovies/myAddedMovies";
import FeaturedSection from "./module/featuredMovieSection/featuredSection";
import Footer from "../../ui/footer/footer";

const Homepage = () => {

    return (
        <>
            <Navigation />
            <HeroSection />
            <UpcomingMoviesSection />
            <FeaturedSection />
            <MoviesYouRated /> 
            <UserWatchList />
            <UserAddedMovies />
            <Footer />
        </> 
    ) 
}

export default Homepage;