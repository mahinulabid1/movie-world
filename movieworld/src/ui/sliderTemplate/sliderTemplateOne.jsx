import styles from "./sliderTemplateOne.module.css";

const SliderTempalate = ({data}) => {
    // console.log(data);
    return (
        <>
            <div className={"flex " + styles.templateContainer}>
                {
                    data.map((el, index)=> {
                        // console.log(el.movieCover);
                        // console.log(el._id);
                        return(
                            <div className = { styles.sliderItem } key = { index }>
                                <div className = { styles.imageContainer } >
                                    {/* movie cover image */}
                                    <img src={ el.movieCover.url } alt="" />
                                </div>

                                <div className={styles.descriptionContainer}>
                                    <a href={`/movieDetail?id=${el._id}`}>{el.movieName}</a>

                                    <div className={styles.buttonSection}>
                                        <div className={styles.ratingContainer + " flex"}>
                                            <p><img src="./ratingIcon.svg" alt="" /></p>
                                            <p>8.5</p>
                                        </div>

                                        {/* watch list button */}
                                        <button className={styles.watchListButton+ " " + styles.button}>
                                            <span className={styles.plusIcon}> + </span>
                                            <span> WATCH LIST</span>
                                        </button>

                                        {/* trailer button */}
                                        <button className={ styles.watchTrailerButton+ " " + styles.button }>
                                            <span><img src="./icons/playIcon.svg" alt="" /></span>
                                            <span>TRAILER</span>
                                        </button>
                                    </div>

                                    
                                </div>
                            </div>    
                        )
                    })
                }
            </div>
        </>
    )
}

export default SliderTempalate;