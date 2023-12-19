import styles from "./css/navigation.module.css";

const Navigation = ( ) => {

    return (
        <>
            <nav className={"flex bound flex-s-b flex-align-center " + styles.navContainer}>

                <a href = "/"> Logo </a>
                <input type="text" placeholder="Search Movies"/>
                <a href="/getpro">Get Pro</a>
                <a href="/movies">Movies</a> 
                <a href="/watchlist">WatchList</a>
                <button>En DropIcon</button>
                <button>UserIcon</button>




            </nav>
        </>
    )
}

export default Navigation;