import styles from './topCastSection.module.css';

const cast = [
    {
        image: "./userProfilePicture/0.jpg",
        name: "Taylor Kitsch ",
        characterName: "Lieutenant Alex Hopper"
    },
    {
        image: "./userProfilePicture/0.jpg",
        name: "Alexander Skarsgård",
        characterName: "Commander Stone Hopper"
    },
    {
        image: "./userProfilePicture/0.jpg",
        name: "Rihanna",
        characterName: "Officer Cora 'Weps' Raikes"
    },
    {
        image: "./userProfilePicture/0.jpg",
        name: "Brooklyn Decker",
        characterName: "Sam"
    },
    {
        image: "./userProfilePicture/0.jpg",
        name: "Tadanobu Asano",
        characterName: "Captain Yugi Nagata"
    },
    {
        image: "./userProfilePicture/0.jpg",
        name: "Oak Ridge",
        characterName: "Hopper"
    },
    {
        image: "./userProfilePicture/0.jpg",
        name: "Oak Ridge",
        characterName: "Hopper"
    },
]

const TopCast = ( ) => {

    return (
        <section className = { styles.container + ' bound'}>
            <h2> TOP <span> CAST </span> </h2>

            <div className ='flex flex-wrap'>
                {
                    cast.map ( ( el, index ) => {
                        return(
                            <>
                                <div className = { styles.flexItem + ' border-radius flex' } key = { index } >
                                    <img src = { el.image } alt = { el.name } />
                                    <div>
                                        <p className = { styles.castRealName }> { el.name } </p>
                                        <p className = { styles.characterName }> as { el.characterName } </p>
                                    </div>
                                </div>
                            </>
                        )
                        
                    } )
                }

            </div>
        </section>
    )
}

export default TopCast;