
import Navigation from "../../ui/navigation/navigation";
import MovieThumbnail from "./module/movieThumbnail/movieThumbnail";
import MovieInfo from "./module/movieInfo/movieInfo";
import TopCast from "./module/topCast/topCastSection";
import Footer from "../../ui/footer/footer";
import {useState, useEffect} from 'react'
import axios from "axios";
import { useSearchParams } from 'react-router-dom';



const MovieDetailPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [movieCoverImg, setMovieCoverImg] = useState('./loading.jpg');
    const [ trailerThumbnail, setTrailerThumbnail ] = useState('./loading.jpg')
    const [data, setData] = useState('');

    // Get a specific query parameter
    const movieId = searchParams.get('id');
  
    useEffect(()=> {
        axios.get(`http://localhost:8000/movieDetail?id=${movieId}`)
        .then((result)=>{
            const fetchedData = result.data;
            console.log(fetchedData)
            setData(fetchedData);
            setMovieCoverImg(fetchedData.movieCover.url);
            setTrailerThumbnail(fetchedData.trailerThumbnail.url);
            
        })
    }, []);
    // console.log(movieThumbnail)
    return(
        <>
            <Navigation />

            <MovieThumbnail 
                movieCover={movieCoverImg} 
                trailerThumbnail = {trailerThumbnail}
            />
            <MovieInfo data={data}/>
            <TopCast />
            <Footer />
        </>
    )
}

export default MovieDetailPage; 