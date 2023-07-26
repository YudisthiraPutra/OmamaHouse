import React from "react";
import mainLogo from "../assets/omama-logo.png"
import {Link} from 'react-scroll'
import { useNavigate } from "react-router-dom";



function Header(){
    const navigate = useNavigate();


    return (
        <div className="header">
            <div>
                <button className="button-redirect" onClick={()=>{navigate("/")}}>
                    <img src={mainLogo} className="logo-header item-header" alt="" />
                    <h1 className="title-header item-header">Omama</h1>
                    <h1 className="subtitle-header item-header">House</h1>
                </button>
            </div>

            <div>
                <button className="nav-item item-header"><Link to="location" offset={-64}>Locations</Link></button>
                <button className="nav-item item-header "><Link to="facility" offset={-64}>Facility</Link></button>
                <button className="nav-item item-header" onClick={()=>{navigate("/order")}}>Order</button>
            </div>
        </div>
        );
}

export default Header;