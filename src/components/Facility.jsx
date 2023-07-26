import React from "react";
import TypeA from "../assets/facility-roomimg.png"
import TypeB from "../assets/facility-room2.png"
import TypeC from "../assets/facility-room3.png"
import PublicA from "../assets/facility-publicspace1.png"
import PublicB from "../assets/facility-publicspace2.png"
import listOfRoom from "../staticData/listOfRoom";
import Room from "./Room"

function Facility(){
    const imageRoom =[TypeA,TypeB,TypeC];
    return (
        <div id="facility" className="facility">
            <h1 className="title-facility">FACILITY</h1>
            <h2 className="subtitle-facility">Room</h2>
            {listOfRoom.map(items=>{
                return (<Room
                images={imageRoom[items.key]}
                typeroom={items.type}
                nonacPrice={items.nonacPrice}
                acPrice={items.acPrice}
                roomAvail={items.available} 
                facilityList={items.facility}
                />)
            })}
            <h2 className="subtitle-facility">Public Spaces</h2>
            <div className="div-facility">
                <img src={PublicA} alt="" className="facility-public" />
                <h2 className="public-name">DAPUR BERSAMA</h2>
            </div>
            <div className="div-facility">
                <img src={PublicB} alt="" className="facility-public" />
                <h2 className="public-name">Ruang Tamu</h2>
            </div>

        </div>
    )
}

export default Facility;