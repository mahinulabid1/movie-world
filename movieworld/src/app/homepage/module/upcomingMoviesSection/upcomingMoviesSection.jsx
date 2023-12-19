import styles from "./upcomingMoviesSection.module.css"

const data = [
    {
        title : "rocket league",
        image : "./thumbnailDemo.jpg"
    },
    {
        title : "rocket league",
        image : "./thumbnailDemo.jpg"
    },
    {
        title : "rocket league",
        image : "./thumbnailDemo.jpg"
    },
    {
        title : "rocket league",
        image : "./thumbnailDemo.jpg"
    },
    {
        title : "rocket league",
        image : "./thumbnailDemo.jpg"
    },
]

const ActiveItem = ({ element, index }) => {
    return(
        <div className = { styles.sliderItemActive + " " } key={index}>
            <img src = { element.image } alt = { element.title }  />
            <p className= { styles.movieTitle }> { element.title } </p>
        </div>
    )
}

const NonActiveItem =  ({ element, index }) => {
    return(
        <div className = { styles.sliderItem + " " } key={index}>
            <img src = { element.image } alt = { element.title }  />
            <p className= { styles.movieTitle }> { element.title } </p>
        </div>
    )
}

const UpcomingMoviesSection = () => {

    return ( 
        <>
            <section className={styles.section}>
                <h1 className={styles.heading}> UPCOMING <span className={styles.headingSpan}>MOVIES</span></h1>
                <p className={styles.headingDescription}>We constantly offer new movies</p>

                <div className={"flex flex-align-center " + styles.container}>
                    {
                        data.map((element, index) => {
                            
                            return (
                                <>
                                    {index === 2 ? 
                                        <ActiveItem element={ element } index={ index }/> 
                                        : 
                                        <NonActiveItem element= { element } index={ index }/>
                                    }
                                </>        
                            )
                        })
                    }
                </div>
            </section>
            
        </>
    )
}

export default UpcomingMoviesSection;