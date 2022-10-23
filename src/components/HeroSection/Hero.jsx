import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="left-h">
                <Header />
                {/* the best ads section */}
                <div className="the_best_ads">
                    <div></div>
                    <span>the best fitness on the world</span>
                </div>
                {/* Heading text */}
                <div className="hero_text">
                    <div>
                        <span className='stroke-text'>Shape  </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>You will learn which is your ideal body and how you can get it
                        </span>
                    </div>
                </div>

                {/* Figures in hero section */}
                <div className="figures">
                    <div>
                        <span>+80</span>
                        <span>expers coaches</span>
                    </div>
                    <div>
                        <span>+650</span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>+40</span>
                        <span>fitness program</span>
                    </div>
                </div>

                {/* hero section buttons */}
                <div className="hero_buttons">
                    <button className='btn'>Get Started</button>
                    <button className='btn'>Learn more</button>
                </div>
            </div>
            <div className="right-h">
                <button className='btn'>Join Now</button>
                <div className="heart_rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>100 bpm</span>
                </div>
                {/* hero section images */}
                <img src={hero_image} alt="" className='hero_image' />
                <img src={hero_image_back} alt="" className='hero_image_back' />
                {/* calories */}
                <div className="calories">
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>230 kcal</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero