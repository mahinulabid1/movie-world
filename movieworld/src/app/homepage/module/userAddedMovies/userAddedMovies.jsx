import styles from "./userAddedMovies.module.css"

const UserAddedMovies = () => {

    return(
        <section className={styles.container + " bound"}>
            <h1>MY ADDED <span>MOVIES</span></h1>

            <div className="flex">
                <div className={styles.addedMovies}>
                    <img src="./thumbnailDemo.jpg" alt="" />
                    <button>EDIT MOVIES</button>
                </div>

                <div className={styles.addedMovies}>
                    <img src="./thumbnailDemo.jpg" alt="" />
                    <button>EDIT MOVIES</button>
                </div>

                <div className={styles.addMoviesButton}>
                    <button>+ ADD MOVIE </button>
                </div>
            </div>
        </section>
    )
}

export default UserAddedMovies;