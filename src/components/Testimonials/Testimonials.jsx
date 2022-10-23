import React, { useState } from 'react'
import './Testimonials.css'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import { testimonialsData } from '../../data/testimonialsData'
const Testimonials = () => {
    const [selected, setSelected] = useState(0);
    const length = testimonialsData.length;


    return (
        <div className='testimonials'>
            <div className="left-t">
                <span>Testimonials</span>
                <span className='stroke-text'>What they</span>
                <span>say about us</span>
                <span>
                    {testimonialsData[0].review}
                </span>
                <span>
                    <span style={{ color: "var(--orange)" }}>
                        {testimonialsData[selected].name}
                    </span>{" "}
                    - {testimonialsData[selected].status}
                </span>
            </div>
            <div className="right-t">
                <div></div>
                <div></div>
                <img src={testimonialsData[selected].image} alt="" />
                <div className="arrows">
                    <img
                        onClick={() => {
                            setSelected(selected === 0 ? length - 1 : selected - 1)
                            }}
                        src={leftArrow} alt="" />
                    <img
                        onClick={() => {
                            setSelected(selected === length - 1 ? 0 : selected + 1)

                        }}

                        src={rightArrow} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Testimonials