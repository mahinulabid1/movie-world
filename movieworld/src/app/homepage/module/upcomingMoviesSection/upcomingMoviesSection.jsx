import styles from "./upcomingMoviesSection.module.css"
import { useState, useEffect } from 'react'
import axios from 'axios';

const ActiveItem = ( { element , index } ) => {
    return(

        <div className = { styles.sliderItemActive + ' ' } key={ index }>
            <img src = { element.movieCover.url } alt ='image'  />
            <p className= { styles.movieTitle }> { element.movieName } </p>
        </div>

    )
}

const NonActiveItem =  ( { element, index } ) => {
    return(

        <div className = { styles.sliderItem + ' ' } key={index}>
            <img src = { element.movieCover.url } alt ='image'  />
            <p className= { styles.movieTitle }> { element.movieName } </p>
        </div>

    )
}

const UpcomingMoviesSection = ( ) => {
    const [ data, setData ] = useState( [ ] );
    
    
    useEffect( ( ) => {
        axios.get( 'http://localhost:8000/upcomingMovies?projection=movieCover-movieName&limit=5' )
        .then( ( result ) => {
            const fetchedData = result.data;
            setData( fetchedData );
        } )
    }, [ ]);


    return ( 
        <>
            <section className = { styles.section }>
                <h1 className = { styles.heading }> UPCOMING <span className = { styles.headingSpan }> MOVIES </span> </h1>
                <p className = { styles.headingDescription } > We constantly offer new movies </p>
                

                {/* LIST OF UPCOMING MOVIES */}
                <div className = { 'flex flex-align-center ' + styles.container } >
                    {
                        data.map ( ( element , index ) => {

                            return (
                                <>
                                    { index === 2 ? 
                                        <ActiveItem element = { element } index = { index }/> 
                                        : 
                                        <NonActiveItem element = { element } index = { index }/>
                                    }
                                </>        
                            )
                        })
                    }
                </div>
            </section>
            
        </>
    )
}

export default UpcomingMoviesSection;