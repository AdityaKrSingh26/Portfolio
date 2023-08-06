import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';

import image from "./assets/dev-1.png"
const Intro = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <div className="hero-section">
            <div className="info" >

                <h1>
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 100,
                            strings: ["Hi, my name is Aditya"]
                        }
                        }
                    />
                </h1>
                <h2>
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 100,
                            strings: ["I Design and Devlop"]
                        }
                        }
                    />
                </h2>
            </div>
            <div className="image-cantainer" data-aos="fade-up">
                <img src={image} alt="" />
            </div>
        </div>
    )
}

export default Intro
