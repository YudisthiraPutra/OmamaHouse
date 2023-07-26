import React from "react";

function Room(props){
    const furniture = props.facilityList
    return(
        <div className="div-facility">
                <img src={props.images} alt="tester" className="facility-room-img" />
                <p className="facility-room-type">{props.typeroom}</p>
                <ul className="facility-room-list">
                    {furniture.map(element=><li>{(element)}</li>)}
                </ul>
                <div className="facility-ac1">
                    <p className="facility-ac-type">NON AC</p>
                    <p className="facility-ac-price">{props.nonacPrice}/month</p>
                </div>
                <div className="facility-ac2">
                    <p className="facility-ac-type">WITH AC</p>
                    <p className="facility-ac-price">{props.acPrice}/month</p>
                </div>
                <p className="facility-availability">Available Room : {props.roomAvail}</p>

            </div>
    )
}

export default Room;