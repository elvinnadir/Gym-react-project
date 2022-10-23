import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './Join.css'
const Join = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_muuu6pw', 'template_vjzh4ai', 
        form.current, 'Xs5H5RGDH1aOCVif')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="join" id="join_us">
            <div className="left-j">
                <hr />
                <div>
                    <span className='stroke-text'>READY TO</span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span>IDEAL BODY</span>
                    <span className='stroke-text'>WITH US</span>
                </div>
            </div>
            <div className="right-j">
                <form ref={form} className='email_container' onScroll={sendEmail}>
                    <input type="email"
                        name='user_email'
                        placeholder='Enter your email adress' />
                    <button className='btn btn-join'>Join now</button>
                </form>
            </div>
        </div>
    )
}

export default Join