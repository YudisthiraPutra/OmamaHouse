import React, { useState } from "react";
import Rectangle from "../assets/location-rectangle1.png";
import MapA from "../assets/locationa-map.jpg";
import MapB from "../assets/locationb-map.jpg"
import MapC from "../assets/locationc-map.jpg"
import MapD from "../assets/locationd-map.jpg";
import Map from "../assets/location-map.png"
import listOfLocation from "../staticData/listOfLocation";

function Location(){

    const [isChecked, setIsChecked] = useState(true);
    const [minutes, setMinutes] = useState("0");
    const [styleMinute, setStyleMinute] = useState("minutes-location")
    const [map, setMap] = useState(Map);
    const [animation, setAnimation] =useState(true);
    const [classAnimation, setClassAnimation] = useState("mapping-location-static")
    const mapping = [MapA, MapB, MapC, MapD];

    function setChecked(event){
        setIsChecked(true);
        setAnimation(true);
        if(!isChecked){
            console.log("its false");
        }
        else{
            console.log("its true");
            listOfLocation.filter(item => {
                if(item.key === Number(event.target.value)){
                    setMinutes(item.minutes);
                    setStyleMinute("minutes-location");
                    setMap(mapping[item.key]);
                    return true;
                }
                else{
                    return false;
                }
            })

            if(animation){
                setClassAnimation("mapping-location-animation")
                setStyleMinute("minutes-location-animation")
                setAnimation(false)
            }
            else{
                setClassAnimation("mapping-location-static")
            }

        }
    }
    
    return (
        <div id="location" className="location">
            <h1 className="title-location">LOCATION</h1>
            <p className="address-location">Ruko Ditas xxxxxxxxxxxx</p>
 
                    <img className="detailing-location" src={Rectangle} alt="" />
                    <img className={classAnimation} src={map} alt="" />

                <div className="list-container list-location ">
                    <div className="distance-location">
                        <p className={styleMinute}>{minutes}</p>
                        <p className="detail-minutes">Minutes From:</p>
                    </div>
                    {listOfLocation.map((item, index) => (
                    <div key={index} className="item-location">
                        <input className="checkboxes-location" value={item.key} type="checkbox" onChange={setChecked} />
                        <span id="text">{item.university}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Location;
