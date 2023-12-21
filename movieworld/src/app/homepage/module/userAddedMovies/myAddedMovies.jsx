import styles from "./myAddedMovies.module.css"
import {useState, useEffect} from 'react'
import axios from "axios";

const UserAddedMovies = () => {
    const [data, setData] = useState([]);
    useEffect(()=> {
        axios.get('http://localhost:8000/releasedMovie?projection=movieCover&limit=2')
        .then((result)=>{
            const fetchedData = result.data;
            setData(fetchedData);  
        })
    }, []);

    return(
        <section className={styles.container}>
            <div className="bound-margin">

                <h1>MY ADDED <span>MOVIES</span></h1>
                
                <div className="flex flex-align-center">
                    {
                        data.map((el, index) => {
                            // console.log(el.movieCover.url);
                            return(
                                <>
                                    <div className={styles.addedMovies} key={index}>
                                        <img src={el.movieCover.url} alt="" />
                                        <button>EDIT MOVIES</button>
                                    </div>
                                </>
                            )
                        })
                    }

                    <div className={styles.addMoviesButton} key={12}>
                        <button><span>+</span> ADD MOVIE </button>
                    </div>
                </div>

            </div>
            
        </section>
    )
}

export default UserAddedMovies;