import React, { useEffect } from 'react'
import Card from './Card'
import AOS from 'aos';
import 'aos/dist/aos.css';


import forecast from "./assets/forecast-finder.png"
import insightInk from "./assets/insightink.png"


const Projects = () => {
    useEffect(() => {
        AOS.init({ duration: 500 })
    }, [])

    return (
        <div className="projects">
            <div className="heading">
                <h3>Recent Projects</h3>
            </div>

            <div className="cards-projects" data-aos="zoom-in">
                <Card
                    image={forecast}
                    title="ForecastFinder - A location based weather app"
                />
                <Card
                    image={insightInk}
                    title="InsightInk - A news website based on topics of your intrests"
                />

            </div>
        </div>
    )
}

export default Projects
