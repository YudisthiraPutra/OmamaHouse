import React from "react";
import Footer from "./Footer";
import Home from "./Home";
import Header from "./Header";
import Contact from "./Contact";
import Location from "./Location";
import Facility from "./Facility";
import Order from "./Order";
import Confirmation from "./Confirmation"
import Payment from "./Payment";
import { Routes, Route } from "react-router-dom";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";


function App()
{
    return(<div>
            <Routes>
                <Route exact path="/" element={<><Header/><Home/><Location/><Facility/><Contact/><Footer/></>}></Route>
                <Route path="/order" element={<><Header/><Order/><Footer/></>}></Route>
                <Route path="/confirmation" element={<><Header/><Confirmation/><Footer/></>}></Route>
                <Route path="/payment" element={<><Header/><Payment/><Footer/></>}></Route>
            </Routes>
    </div>)
}

export default App;