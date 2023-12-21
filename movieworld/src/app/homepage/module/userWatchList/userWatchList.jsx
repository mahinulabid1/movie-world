import styles from "./userWatchList.module.css"
import SliderTempalate from "../../../../ui/sliderTemplate/sliderTemplateOne"
import {useState, useEffect} from 'react'
import axios from "axios";

const UserWatchList = () => {
    const [data, setData] = useState('');
    useEffect(()=> {
        axios.get('http://localhost:8000/releasedMovie?projection=movieCover-movieName&limit=5')
        .then((result)=>{
            const fetchedData = result.data;
            // console.log(fetchedData)
            setData(fetchedData);
        })
    }, []);
 

    return( 
        <>
            <section className={"bound " + styles.container}>
                <h1 className={styles.heading}>YOUR <span>WATCH-LIST</span></h1>
                {   //conditional rendering
                    data !== '' ?
                    <SliderTempalate data = {data} />
                    :
                    console.log("fetching data") 
                    
                }
            </section>
        </>
    )
}

export default UserWatchList;