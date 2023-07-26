import React from "react";
import detailingImage1 from "../assets/home-detailing1.png"
import detailingImage2 from "../assets/home-detailing2.png"
import rectangleImage1 from "../assets/home-rectangle1.png"
import rectangleImage2 from "../assets/home-rectangle2.png"


function Home(){
    return(
        <div className="home">
            <h1 className="title-home">OMAMA</h1>
            <h1 className="subtitle-home">House</h1>
            <p className="tagline-home">Living space near <br /> Univerisities in <br /> Malang</p>
            <p className="catchphrase-home">Minimalistic</p>
            <img src={detailingImage1} alt="" className="detailimg1-home" />
            <img src={detailingImage2} alt="" className="detailimg2-home" />
            <img src={rectangleImage1} alt="" className="rectangle1-home" />
            <img src={rectangleImage2} alt="" className="rectangle2-home" />
        </div>
    )
}

export default Home;