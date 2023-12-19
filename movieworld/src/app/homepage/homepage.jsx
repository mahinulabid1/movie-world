import Navigation from "../../ui/navigation";
import HeroSection from "./module/heroSection/heroSection";
import UpcomingMoviesSection from "./module/upcomingMoviesSection/upcomingMoviesSection";
import UserRatedMovies from "./module/userRatedMovies/userRatedMovies";
import UserWatchList from "./module/userWatchList/userWatchList"
import UserAddedMovies from "./module/userAddedMovies/userAddedMovies";
import Footer from "../../ui/footer";

const Homepage = () => {

    return (
        <>
            <Navigation />
            <HeroSection />
            <UpcomingMoviesSection />
            <UserRatedMovies /> 
            <UserWatchList />
            <UserAddedMovies />
            <Footer />
        </> 
    ) 
}

export default Homepage;