import styles from "./css/navigation.module.css";

const Navigation = ( ) => {

    return (
        <>
            <nav className={"flex bound flex-s-b flex-align-center " + styles.navContainer}>

                <a className={ styles.logo } href = "/" > <img src="./LOGO.png" alt=""  /> </a>
                <input type="text" placeholder="Search Movies"/>
                <a className={styles.getProButton} href="/getpro">Get Pro</a>
                <a className={styles.links} href="/movies">Movies</a> 
                <a className={styles.links} href="/watchlist">WatchList</a>
                {/* <button>En DropIcon</button> */}
                <button className={styles.userIcon}>
                    <img  src="./userIcon.svg" alt="" />
                </button>




            </nav>
        </>
    )
}

export default Navigation;