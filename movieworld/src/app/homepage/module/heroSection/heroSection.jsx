import {useState, useEffect} from 'react'
import styles from "./heroSection.module.css";
import axios from "axios";


const HeroSection = ( ) => {
    const [movieThumbnail, setMovieThumbnail] = useState(undefined);
    const [movieCover, setMovieCover] = useState(undefined);

    //fetch data from database
    useEffect(()=> {
        axios.get('http://localhost:8000/featuredMovie?projection=movieCover-movieThumbnail&limit=1')
        .then((result)=>{
            const data = result.data[0];
            setMovieThumbnail(data.movieThumbnail.url);
            setMovieCover(data.movieCover.url)
        })
    }, []);

    return (
        <>
            <div 
                className={"bound " + styles.container} 
                style={{
                    background: `linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url('${movieThumbnail}')`,
                    backgroundSize: "cover"
                }}
            >
                <div className="bound-margin flex flex-align-center " >
                    {/* HERO TEXT CONTENT */}
                    <div className = { styles.textContainer }>
                        <h1>BEST WAY OF ENTERTAINMENT</h1>
                        <h3> MOVIES AS YOU DEMAND AT USD</h3>
                        <h3 className={styles.priceInfo}> $10/MONTH </h3>
                    </div>
                    
                    <div>
                        <div className = { styles.sliderContainer }>

                            {   // CONDITION BASED RENDERING
                                movieCover !== "" ? 
                                <img className="border-radius"  src = { movieCover } alt = { movieCover } loading='lazy'/>
                                :
                                console.log("fetching data")
                            }
                            
                            
                            <button className = { styles.leftButton } >
                                <img src="./leftIcon.svg" alt="" />
                            </button>

                            <button className = { styles.rightButton } >
                                <img src="./rightIcon.svg" alt="" />
                            </button>
                            
                            <a className = { styles.watchLink } href="/watchnow">WATCH NOW</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default HeroSection;