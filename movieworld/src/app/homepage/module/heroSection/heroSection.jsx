import styles from "./heroSection.module.css";

const HeroSection = ( ) => {

    return (
        <>
            <div 
            className={"bound flex flex-align-center " + styles.container} 
            style={{
                background: "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url('./thumbnailBackground.jpg')",
                backgroundSize: "cover",
                /* Add other styles here */
            }}
            >

                <div className = { styles.textContainer }>
                    <h1>BEST WAY OF ENTERTAINMENT</h1>
                    <h3> MOVIES AS YOU DEMAND AT USD</h3>
                    <h3 className={styles.priceInfo}> $10/MONTH </h3>
                </div>
                <div>
                    <div className = { styles.sliderContainer }>
                        <img className="border-radius"  src = "/thumbnailDemo.jpg" alt="" />
                        
                        <button className = { styles.leftButton } >
                            <img src="./leftIcon.svg" alt="" />
                        </button>

                        <button className = { styles.rightButton } >
                            <img src="./rightIcon.svg" alt="" />
                        </button>
                        
                        <a className = { styles.watchLink } href="/watchnow">WATCH NOW</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection;