import Navigation from "../../ui/navigation/navigation";
import HeroSection from "./module/heroSection/heroSection";
import UpcomingMoviesSection from "./module/upcomingMoviesSection/upcomingMoviesSection";
import MoviesYouRated from "./module/userRatedMovies/moviesYouRatedPage";
import UserWatchList from "./module/userWatchList/userWatchList"
import UserAddedMovies from "./module/userAddedMovies/myAddedMovies";
import Footer from "../../ui/footer/footer";
import {useState, useEffect} from 'react';
import axios from 'axios'

const Homepage = () => {

    return (
        <>
            <Navigation />
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