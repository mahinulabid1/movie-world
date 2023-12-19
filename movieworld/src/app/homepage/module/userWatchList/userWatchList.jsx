import styles from "./userWatchList.module.css"
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

const UserWatchList = () => {

    return( 
        <>
            <section className={"bound " + styles.container}>
                <h1 className={styles.heading}>YOUR <span>WATCH-LIST</span></h1>
                <SliderTempalate data={data} />
            </section>
        </>
    )
}

export default UserWatchList;