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
                                        <p>star</p>
                                        <p>8.5</p>
                                    </div>

                                    {/* watch list button */}
                                    <button>
                                        <span>+</span>
                                        <span>WATCH LIST</span>
                                    </button>

                                    {/* trailer button */}
                                    <button>
                                        <span>icon</span>
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