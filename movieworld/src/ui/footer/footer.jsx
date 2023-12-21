import styles from './footer.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios';

const Footer = ( ) => {
    const [ data, setData ] = useState( [ ] );
    
    useEffect( ( ) => {
        axios.get( 'http://localhost:8000/upcomingMovies?projection=movieName&limit=5' )
        .then( ( result ) => {
            const fetchedData = result.data;
            setData( fetchedData );
        })
    }, [ ]);

    
    return(
        <footer className = { styles.container }>
            <div className = { styles.flexContainer + ' flex flex-s-b bound-margin'}>

                <div className = 'flex flex-s-b '> 
                    <div className = { styles.flexItem } >
                        <h6 className = { styles.footerHeading }> UPCOMING MOVIES </h6>
                        {   
                            data.map( ( el, index ) => {

                                return (
                                    <a href = { `/movieDetail?id=${ el._id }` } key = { index } > { el.movieName } </a>
                                )
                                
                            })
                        }
                    </div>

                    <div className = { styles.flexItem } >
                        <h6 className = { styles.footerHeading } > ADDITIONAL PAGES </h6>
                        <a href = '/' > Terms & Condition </a>
                        <a href = '/' > Privacy Policy </a>
                        <a href = '/' > Cookie Policy </a>
                    </div>
                </div>

                <div className = { styles.infoAndLinks } >
                    <a href = '/' className = { styles.footerLogo } >
                        <img src = './LOGO.png' alt = '' />
                    </a>
                    <p>
                        © 2023 movieworld.com. All rights reserved. This site is not affiliated
                        or owned by the listed movie streaming platform owners.
                    </p>

                    <div className = { 'flex ' + styles.socialLinkContainer }>
                        <a href ='#'> <img src = './icons/facebook.svg' alt = '' /> </a>
                        <a href ='#'> <img src = './icons/twitter.svg' alt = '' /> </a>
                        <a href ='#'> <img src = './icons/linkedIn.svg' alt = '' /> </a>
                    </div>
                </div>
            </div>
            
            <hr className = { styles.hr } />
            <div className = { styles.copyrightInfo } >
                Copyright ©2023 movieworld. ALL Rights Reserved.
            </div>
        </footer>
    )
}

export default Footer;