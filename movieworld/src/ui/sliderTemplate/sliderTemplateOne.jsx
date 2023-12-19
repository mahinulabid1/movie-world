import styles from "./sliderTemplateOne.module.css";

const SliderTempalate = ({data}) => {
    return (
        <>
            <div className="flex">
                {
                    data.map((el, index)=> {

                        return(
                            <div className={styles.sliderItem} key={index}>
                                <div className={styles.imageContainer}>
                                    <img src={el.image} alt="" />
                                </div>

                                <div className={styles.descriptionContainer}>
                                    <h3>{el.title}</h3>

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
                        )
                    })
                }
            </div>
        </>
    )
}

export default SliderTempalate;