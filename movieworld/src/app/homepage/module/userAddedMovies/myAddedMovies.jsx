import styles from "./myAddedMovies.module.css"

const UserAddedMovies = () => {

    return(
        <section className={styles.container + " bound"}>
            <h1>MY ADDED <span>MOVIES</span></h1>

            <div className="flex flex-align-center">
                <div className={styles.addedMovies}>
                    <img src="./thumbnailDemo.jpg" alt="" />
                    <button>EDIT MOVIES</button>
                </div>

                <div className={styles.addedMovies}>
                    <img src="./thumbnailDemo.jpg" alt="" />
                    <button>EDIT MOVIES</button>
                </div>

                <div className={styles.addMoviesButton}>
                    <button><span>+</span> ADD MOVIE </button>
                </div>
            </div>
        </section>
    )
}

export default UserAddedMovies;