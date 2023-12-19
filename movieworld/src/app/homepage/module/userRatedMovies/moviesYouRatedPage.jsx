import styles from "./moviesYouRatedPage.module.css"
import SliderTempalate from "../../../../ui/sliderTemplate/sliderTemplateOne"
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

const MoviesYouRated = () => {

    return (
        <>
            <section className={styles.container + " bound"} >
                <h1>MOVIES YOU <span>RATED</span></h1>
                <SliderTempalate data = {data} />
                
            </section>
        </>
    )
}

export default MoviesYouRated;