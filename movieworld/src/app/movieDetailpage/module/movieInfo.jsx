import styles from "./movieInfo.module.css"

const MovieInfo = () => {

    return(
        <>
            <div className={styles.container + ' flex flex-s-b bound'}>
                <div className={ styles.flexItem }>
                    <p className={styles.movieContentInfo}>EPISODES <span>121</span></p>
                    <p className={styles.movieContentInfo}>PHOTOES <span>3</span></p>
                </div>
                <div className={ styles.flexItem }>
                    <p className={styles.movieDescription}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu augue rhoncus, finibus ligula et, lacinia dui. 
                        Donec vitae vehicula neque. Duis a ante non felis pretium tincidunt nec in erat. Donec pulvinar mi a mauris 
                        tristique pretium. Duis sit amet eros et risus efficitur blandit sit amet a diam. Proin sed justo nec risus 
                        cursus maximus quis id massa. Nulla bibendum aliquam felis et auctor. In elementum faucibus neque eu tincidunt. 
                        Suspendisse posuere diam ut dolor congue molestie 
                    </p>

                    <div className={styles.creatorsTeamInfo}>
                        <span>Producer :</span> Julie Pleckevin
                    </div>

                    <div className={styles.creatorsTeamInfo}>
                        <span>Starrer :</span> 
                        Nina DorevPaul,
                        Jakie Chan
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieInfo;