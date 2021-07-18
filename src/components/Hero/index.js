import React from 'react';
import styles from './styles.scss'

const Hero = (props) => {

    const [heroTab, setHeroTab] = React.useState('overview')

    function changeTab(tab) {
        setHeroTab(tab)
    }

    return (
        <div className="hero">

            <div className="hero--video">
                <video autoPlay={true} loop={true} muted={true}>
                    <source src="video/rein-video.mp4" type="video/mp4"/>
                </video>
            </div>


            <div className="hero--wrapper">
                <span>

                    <button 
                        className={heroTab !== "overview" && "no--active"} 
                        onClick={() => {changeTab('overview')}}>
                        Overview</button>

                    <button 
                        className={heroTab !== "story" && "no--active"} 
                        onClick={() => {changeTab('story')}}>
                        Story</button>

                </span>

                <div className={heroTab === 'story' ? "hero--story is--active": "hero--story"}>
                    <h4>Biography</h4>
                    <ul>
                        <li>Real Name: Reinhardt Wilhelm, Age: 61</li>
                        <li>Occupation: Adventurer</li>
                        <li>Base of Operations: Stuttgart, Germany</li>
                        <li>Affiliation: Overwatch (formerly)</li>
                    </ul>

                    <h5>“JUSTICE WILL BE DONE.”</h5>

                    <p>
                        Reinhardt Wilhelm styles himself as a champion of a bygone age, who lives by the knightly codes of valor, justice, and courage.

                        Over thirty years ago, Overwatch was founded to counter the threat of the robot uprisings around the world. Reinhardt, a highly decorated German soldier, was inducted as part of the original Overwatch strike team that put an end to the Omnic Crisis. After the conflict's resolution, Overwatch grew into a global institution, keeping the peace in a war-torn world. Reinhardt proved himself to be one of its most stalwart champions.
                        
                        Reinhardt's unique ethics and larger-than-life persona earned the admiration of his peers and superiors alike. Never afraid to speak his mind, he was Overwatch's most vocal supporter and, when necessary, its harshest critic, providing a constant reminder that Overwatch was meant to be a force for good.
                        
                        Having served into his late fifties, Reinhardt was faced with mandatory retirement from combat operations. Despondent about being removed from active duty, Reinhardt feared that his days of purpose and glory had ended. As times grew darker and Overwatch came under suspicion of corruption and sedition, Reinhardt could only watch as the cause he had dedicated his life to defending surrendered in disgrace.
                        
                        Though Overwatch was eventually disbanded, Reinhardt was not content to sit idly by while the world fell to disorder. Once again donning his Crusader armor, he has vowed to fight for justice across Europe like a knight of old, defending the innocent and winning hearts and minds with the promise of better days to come.
                    </p>
                </div>

                <div className={heroTab === 'overview' ? "hero--overview is--active" : "hero--overview"}>
                    <div className="hero--overview--head">
                        <span>
                            <h4>ROLE</h4>
                            <h3>TANK</h3>
                        </span>
                        <span>
                            <h4>DIFFICULTY</h4>
                        </span>
                    </div>
                        
                    
                    <p className="hero--overview--info">
                        Clad in powered armor and swinging his hammer, Reinhardt leads a rocket-propelled charge across the battleground and defends his squadmates with a massive energy barrier.
                    </p>
            
                    <div className="hero--abilities">

                        <h4>abilities</h4>

                        <ul>
                            <li>
                                <div>
                                <img src="http://via.placeholder.com/120x120"/>
                                <span>
                                    <h5>Rocket Hammer</h5>
                                    <p>Reinhardt’s Rocket Hammer is an exemplary melee weapon, able to deal punishing damage in a wide arc with every swing.</p>
                                </span>
                                </div>
                                <video autoPlay={true} muted={true} loop={true}>
                                    <source src="video/rein-ability-1.mp4" type="video/mp4"/>
                                </video>
                            
                            </li>
                            <li>
                                <div>
                                <img src="http://via.placeholder.com/120x120"/>
                                <span>
                                    <h5>Rocket Hammer</h5>
                                    <p>Reinhardt’s Rocket Hammer is an exemplary melee weapon, able to deal punishing damage in a wide arc with every swing.</p>
                                </span>
                                </div>
                                <video autoPlay={true} muted={true} loop={true}>
                                    <source src="video/rein-ability-1.mp4" type="video/mp4"/>
                                </video>
                            
                            </li>
                        </ul>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Hero;
