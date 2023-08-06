import React, { useEffect } from 'react'
import Card from './Card'
import AOS from 'aos';
import 'aos/dist/aos.css';

import webDev from "./assets/web-devloper.png"
import design from "./assets/designer.png"
import speaking from "./assets/speaker.png"

const Skills = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <div className="skills" data-aos="fade-up">
            <div className="heading">
                <h3>Skills I Posses</h3>
            </div>
            <div className="cards">
                <Card
                    image={webDev}
                    title="Web Devloper"
                />
                <Card
                    image={design}
                    title="Graphic Designer"
                />
                <Card
                    image={speaking}
                    title="Oratory Skills"
                />

            </div>
        </div>
    )
}

export default Skills
