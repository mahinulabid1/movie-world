import styles from "./movieThumbnail.module.css"

const MovieThumbnail = () => {

    return (
        <>
            <section className={styles.section}>
                <div className="flex flex-s-b bound">
                    <div className={styles.flexItem}>
                        <img className="border-radius" src="./thumbnailDemo.jpg" alt="" />
                    </div>

                    <div className={styles.flexItem}>
                        <img className="border-radius" src="./thumbnailTrailer.jpg" alt="" />
                        <button className={styles.playVideoButton + " flex flex-align-center"}>
                            <img src="./icons/playIcon.svg" alt="" />
                            <span>TRAILER</span>
                        </button>
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default MovieThumbnail;