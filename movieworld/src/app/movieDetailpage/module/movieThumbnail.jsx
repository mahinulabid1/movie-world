import styles from "./movieThumbnail.module.css"

const MovieThumbnail = () => {

    return (
        <>
            <div className="flex flex-s-b bound">
                <div className={styles.flexItem}>
                    <img className="border-radius" src="./thumbnailDemo.jpg" alt="" />
                </div>

                <div className={styles.flexItem}>
                    <img className="border-radius" src="./thumbnailTrailer.jpg" alt="" />
                </div>
            </div>
        </>
    )
}

export default MovieThumbnail;