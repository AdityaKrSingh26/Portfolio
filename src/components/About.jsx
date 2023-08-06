import React, { useEffect } from 'react'
import aboutImage from "./assets/about-me.png"

import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <div className="about">

            <div className="about-img" data-aos="fade-right">
                <img src={aboutImage} alt="" />
            </div>

            <div className="about-text">
                <h2>About me</h2>
                <p>
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 10,
                            strings: ["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius magni corporis recusandae maiores possimus illo corrupti veritatis perspiciatis optio provident dignissimos inventore numquam nobis animi soluta est consectetur rem odio commodi, nostrum exercitationem.Perferendis ipsam eius explicabo.Possimus quia, dignissimos ipsa iure,quisquam qui architecto libero, at eos facilis dolor! Natus omnis architecto vel nulla recusandae error ullam"]
                        }
                        }
                    />
                </p>
            </div>
        </div>
    )
}

export default About
