import React from 'react';
import styles from './styles.scss'
import {randomNumber} from './../../utils';

import {HeroContext} from './../../context/HeroContext'


const Hero = (props) => {


    const {hero, heroes, setHero} = React.useContext(HeroContext)
    const [heroTab, setHeroTab] = React.useState('overview')
    const [video, setVideo] = React.useState([])
    const [
        audio,
        setAudio
            ] = React.useState(new Audio(hero.audio[randomNumber(0, hero.audio.length)].file))


    function changeTab(tab) {
        setHeroTab(tab)
    }

    function changeHero(id) {
        let updateHero = heroes.filter(hero => hero._id == id)[0]
        setHero(updateHero)

        setAudio( audio => {
            audio.pause()
            let audioObj = new Audio(updateHero.audio[randomNumber(0, updateHero.audio.length)].file);
            return audioObj
        })
    }

    function handleVideo(name) {
        if(video.includes(name)) {
            setVideo(video.filter(item => item !== name))
        }
        else {
            setVideo([...video, name])
        }
    }

    

    React.useEffect(() => {
        audio.play()
    }, [audio])


    console.log(hero)


    return (
        <>
        <div className="hero--thumbs">
            <ul>
            {
                heroes.map(item => (
                    <li key={item._id}>
                        <button 
                            className={item._id == hero._id ? 'is--active' : null}
                            onClick={() => changeHero(item._id)}>
                            <img src={item.thumb} />
                        </button>
                    </li>
                ))
            }
            </ul>

        </div>
        <div className="hero">

            <div className="hero--video">
                <div className="hero--name">
                    <h1>{hero.name}</h1> 
                </div>
                { /webm/.test(hero.bg) ? (
                <video key={hero._id} autoPlay={true} loop={true} muted={true}>
                    <source src={hero.bg} type="video/mp4"/>
                </video>
                ): (
                    <img src={hero.bg} />
                )}

            </div>


            <div className="hero--wrapper">
                <span>

                    <button 
                        className={heroTab !== "overview" ? "no--active" : null} 
                        onClick={() => {changeTab('overview')}}>
                        Overview</button>

                    <button 
                        className={heroTab !== "story" ? "no--active" : null} 
                        onClick={() => {changeTab('story')}}>
                        Story</button>

                </span>

                <div className={heroTab === 'story' ? "hero--story is--active": "hero--story"}>
                    <h4>Biography</h4>
                    <ul>
                        <li>{hero.real_name}</li>
                        <li>{hero.occupation}</li>
                        <li>{hero.base_of_operations}</li>
                        <li>{hero.affiliation}</li>
                    </ul>

                    <h5>{hero.phrase}</h5>

                    <p>{hero.story}</p>
                </div>

                <div className={heroTab === 'overview' ? "hero--overview is--active" : "hero--overview"}>
                    <div className="hero--overview--head">
                        <span>
                            <h4>ROLE</h4>
                            <h3>{hero.role}</h3>
                        </span>
                        <span>
                            <h4>DIFFICULTY</h4>
                            <span className={`hero--star--${hero.difficulty}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </span>
                    </div>
                        
                    <p className="hero--overview--info">
                        {hero.description}
                    </p>
            
                    <div className="hero--abilities">

                        <h4>abilities</h4>

                        <ul>
                            {
                                hero.abilities.map( item => item.name.length && (
                                    <li key={item.name}>
                                        <div>
                                            <div className="hero--abilities--img"><img src={item.img}/></div>
                                            <span>
                                                <h5>{item.name}</h5>
                                                <p>{item.description}</p>

                                                <button 
                                                    onClick={() => handleVideo(item.name)}>
                                                    {video.includes(item.name) ? 'hide video' : 'show video'}
                                                </button>
                                            </span>
                                        </div>
                                        <video 
                                            autoPlay={true} 
                                            muted={true} 
                                            loop={true} 
                                            className={video.includes(item.name) ? 'is--active' : null}>

                                            <source src={item.video} type="video/mp4"/>
                                        </video>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                </div>
            </div>



        </div>
        </>
    )
}

export default Hero;
