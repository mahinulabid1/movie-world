import styles from './moviesYouRatedPage.module.css'
import SliderTempalate from '../../../../ui/sliderTemplate/sliderTemplateOne'
import {useState, useEffect} from 'react'
import axios from 'axios';

const MoviesYouRated = ( ) => {

    const [ data, setData ] = useState( '' );
    
    useEffect( ( ) => {
        axios.get( 'http://localhost:8000/releasedMovie?projection=movieCover-movieName&limit=5' )
        .then( ( result ) => {
            const fetchedData = result.data;
            // console.log(fetchedData)
            setData( fetchedData );
        } )
    }, [ ]);

    return (
        <>
            <section className = { styles.container } >
                <div className = 'bound-margin'>
                    <h1> MOVIES YOU <span> RATED </span> </h1>
                    {   //conditional rendering
                        data !== '' ?
                        <SliderTempalate data = { data } />
                        :
                        console.log( 'fetching data' ) 
                        
                    }
                </div>

            </section>
        </>
    )
}

export default MoviesYouRated;