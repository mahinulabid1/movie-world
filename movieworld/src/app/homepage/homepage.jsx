import Navigation from "../../ui/navigation";
import HeroSection from "./module/heroSection/heroSection";
import UpcomingMoviesSection from "./module/upcomingMoviesSection/upcomingMoviesSection";
import MoviesYouRated from "./module/userRatedMovies/moviesYouRatedPage";
import UserWatchList from "./module/userWatchList/userWatchList"
import UserAddedMovies from "./module/userAddedMovies/myAddedMovies";
import Footer from "../../ui/footer";

const Homepage = () => {

    return (
        <>
            <Navigation />
            {/* <div style={{marginTop:"116px"}}></div> */}
            {/* basic whitespace to match with navigation since its position fixed */}
            <HeroSection />
            <UpcomingMoviesSection />
            <MoviesYouRated /> 
            <UserWatchList />
            <UserAddedMovies />
            <Footer />
        </> 
    ) 
}

export default Homepage;