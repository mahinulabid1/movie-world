import styles from "./heroSection.module.css";

const HeroSection = ( ) => {

    return (
        <>
            <div className ={ "bound flex flex-align-center " + styles.container }>
                <div className = { styles.textContainer }>
                    <h1>BEST WAY OF ENTERTAINMENT</h1>
                    <h3> MOVIES AS YOU DEMAND AT USD</h3>
                    <h3> $10/MONTH </h3>
                </div>
                <div>
                    <div className = { styles.sliderContainer }>
                        <img  src = "/thumbnailDemo.jpg" alt="" />
                        <button className = { styles.leftButton } >Left</button>
                        <button className = { styles.rightButton } >right</button>
                        <a className = { styles.watchLink } href="/watchnow">WATCH NOW</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection;