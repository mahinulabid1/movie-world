import styles from "./movieInfo.module.css"

const MovieInfo = ({data}) => {

    return(
        <>
            <div className={styles.container + ' flex flex-s-b bound'}>
                <div className={ styles.flexItem }>
                    <p className={styles.movieContentInfo}>EPISODES <span>({data.episodeCount})</span></p>
                    <p className={styles.movieContentInfo}>PHOTOES <span>({data.photoes})</span></p>
                </div>
                <div className={ styles.flexItem }>
                    <p className={styles.movieDescription}>
                        {data.description}
                    </p>

                    <div className={styles.creatorsTeamInfo}>
                        <span>Director: </span> {data.director}
                    </div>

                    <div className={styles.creatorsTeamInfo}>
                        <span>Starrer: </span>  
                        Nina DorevPaul,
                        Jakie Chan
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieInfo;