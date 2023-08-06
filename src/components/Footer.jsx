import React from 'react'
import youtube from "./assets/youtube.png"
import twitter from "./assets/twitter.png"
import facebook from "./assets/facebook.png"
import instagram from "./assets/instagram.png"

const Footer = () => {
    return (
        <div className="footer">
            <div className="icons">
                <a href="https://youtube.com/">
                    <img src={youtube} alt="" />
                </a>
                <a href="https://twitter.com/">
                    <img src={twitter} alt="" />
                </a>
                <a href="https://facebook.com">
                    <img src={facebook} alt="" />
                </a>
                <a href="https://www.instagram.com/">
                    <img src={instagram} alt="" />
                </a>
            </div>

            <div className="privacy">
                <p>Terms of Service - Privacy Policy</p>
                <p>© Aditya Kumar Singh</p>
            </div>
        </div>
    )
}

export default Footer
