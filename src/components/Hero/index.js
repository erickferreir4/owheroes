import React from 'react';
import styles from './styles.scss'

const Hero = (props) => {

    return (
        <div className="hero">

            <div className="hero--video">
                <video autoPlay={true} loop={true} muted={true}>
                    <source src="video/rein-video.mp4" type="video/mp4"/>
                </video>
            </div>


            <div className="hero--overview">
                <span>
                    <button>Overview</button>
                    <button className="no--active">Story</button>
                </span>


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
    )
}

export default Hero;
