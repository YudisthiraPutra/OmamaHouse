import React from "react";
import instagramimage from "../assets/instagram-logo.png"

function Footer(){
    return (
        <div className="footer">
            <h1 className="title-header item-header title-footer">OMAMA</h1>
            <h1 className="subtitle-header item-header subtitle-footer">House</h1>
            <p className="tagline-footer">Living space near Universities in Malang</p>
            <a href="https://www.instagram.com/omama.house/">
                <button className="button-instagram">
                    <img src={instagramimage} alt="Instagram" />
                </button>
            </a>
            <p className="copyright-footer">copyright @2023</p>
        </div>
    )
}

export default Footer;