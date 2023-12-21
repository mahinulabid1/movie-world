import styles from './navigation.module.css';

const Navigation = ( ) => {

    return (
        <>
            <nav className={styles.navContainer}>
                <div className = 'bound-margin flex  flex-s-b flex-align-center' style = { { height: '100%' } } >
                <a className = { styles.logo } href = '/' > <img src = './LOGO.png' alt=''  /> </a>
                <input type = 'text' placeholder = 'Search Movies'/>
                <a className = { styles.getProButton } href = '/getpro'> Get Pro </a>
                <a className = { styles.links } href = '/movies'> Movies </a> 
                <a className = { styles.links } href = '/watchlist'> WatchList </a>

                <button className = { styles.userIcon } >
                    <img  src = './userIcon.svg' alt='' />
                </button>
                </div>
                
            </nav>
        </>
    )
}

export default Navigation;