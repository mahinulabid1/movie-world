import styles from "./footer.module.css"

const Footer = () => {
    return(
        <footer className = { styles.container }>
            <div className={styles.flexContainer + " flex flex-s-b bound"}>

                <div className="flex flex-s-b "> 
                    <div className={styles.flexItem}>
                        <h6 className={styles.footerHeading}>UPCOMING MOVIES</h6>
                        <a href="/">JAWAN</a>
                        <a href="/">The Vampire Diaries</a>
                        <a href="/">Barbie</a>
                        <a href="/">Teen All</a>
                        <a href="/">NCIS</a>
                    </div>

                    <div className={styles.flexItem}>
                        <h6 className={styles.footerHeading}>ADDITIONAL PAGES</h6>
                        <a href="/">Terms & Condition</a>
                        <a href="/">Privacy Policy</a>
                        <a href="/">Cookie Policy</a>
                    </div>
                </div>

                <div className={styles.infoAndLinks}>
                    <a href="/" className={styles.footerLogo}>
                        <img src="./LOGO.png" alt="" />
                    </a>
                    <p>
                        © 2023 movieworld.com. All rights reserved. This site is not affiliated
                        or owned by the listed movie streaming platform owners.
                    </p>

                    <div className={ "flex " + styles.socialLinkContainer }>
                        <a href="#"> <img src="./icons/facebook.svg" alt="" /> </a>
                        <a href="#"> <img src="./icons/twitter.svg" alt="" /> </a>
                        <a href="#"> <img src="./icons/linkedIn.svg" alt="" /> </a>
                    </div>
                </div>
            </div>
            
            <hr className={styles.hr} />
            <div className={styles.copyrightInfo}>
                Copyright ©2023 movieworld. ALL Rights Reserved.
            </div>
        </footer>
    )
}

export default Footer;