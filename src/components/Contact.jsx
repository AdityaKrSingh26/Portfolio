import React from 'react'
import discuss from "./assets/Group discussion-bro.png"


const Contact = () => {
    return (
        <div className="contact">
            <div className="img">
                <img src={discuss} alt="" />
            </div>

            <div className="inputs">
                <div className="text">
                    <h1>Got a project in <br /> mind ?</h1>
                </div>
                <div className="details">
                    <input type="text" id="name" placeholder="Name" />
                    <br />
                    <input type="email" name="" id="email" placeholder="E-mail" />
                    <br />
                    <input type="text" id="description" placeholder="Description" />
                    <br />
                    <button type="submit" id="submit">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
