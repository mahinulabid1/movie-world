import styles from "./featuredSection.module.css"
import {useState, useEffect} from 'react'
import axios from "axios";

const FeaturedSection = () =>{
    const [movieThumbnail, setMovieThumbnail] = useState(undefined);
    const [movieCover, setMovieCover] = useState(undefined);
    const [data, setData] = useState([]);

    //fetch data from database
    useEffect(()=> {
        axios.get('http://localhost:8000/featuredMovie?limit=1')
        .then((result)=>{
            const res = result.data[0];
            setMovieThumbnail(res.movieThumbnail.url);
            setMovieCover(res.movieCover.url)
            setData(res);
            console.log(res);
        })
    }, []);

    return(
        

        <>
            <section className={styles.container}>
                <img className={styles.backgroundImage} src="./thumbnailBackground.jpg" alt="" />
                <div className="bound-margin flex flex-s-a flex-align-center">
                    <div className={styles.flexItem}>
                        <p className={styles.subHeading}>Featured Movie</p>
                        <h3 className={styles.heading}>{data.movieName}</h3>
                        <p>{data.movieDescriptionSummary}</p>
                        <a className={styles.watchNowButton} href={`/movieDetail?id=${data._id}`}>Watch Now</a>
                    </div>
                    <div className={styles.flexItem}>
                        <img src="./thumbnailTrailer.jpg" alt="" />
                        <a className={styles.trailerButton + " flex flex-align-center flex-s-b"} href="/"><img src="./icons/playIcon.svg" alt="" /> <span>Trailer</span></a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FeaturedSection;