import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom";


function Order(){
    const navigate = useNavigate();
    const [orderData, setOrderData] = useState({
        Email: "",
        Name: "",
        IDNumber: "",
        Address:"",
        PhoneNumber:"",
        University:"",
        Faculty:"",
        Major:"",
      });

    function handleChange(event) {
    const { name, value } = event.target;

    setOrderData(prevNote => {
        return {
        ...prevNote,
        [name]: value
        };
    });
    }


    return (<div className="order">
        <div className="order-msg-box">
            <h1 className="order-msg">
                Please  <br />fill in  <br />your data
            </h1>
        </div>

        <div className="order-form">
            <h1 className="order-form-title"> Personal Data</h1>
            <form action="">
            <label>EMAIL:
                <input 
                name="Email"
                type="text" 
                onChange={handleChange}
                value={orderData.Email}
                placeholder="enter your email address"
                />
            </label><br />
            <label>Name:
                <input 
                name="Name"
                type="text" 
                value={orderData.Name}
                placeholder="enter your name"
                onChange={handleChange}
                />
            </label> <br />
            <label>ID Number:
                <input 
                name="IDNumber"
                type="text" 
                value={orderData.IDNumber}
                placeholder="enter your ID Number"
                onChange={handleChange}
                />
            </label> <br />
            <label>Address:
                <input 
                name="Address"
                type="text" 
                value={orderData.Address}
                placeholder="enter your address"
                onChange={handleChange}
                />
            </label> <br />
            <label>Phone Number:
                <input 
                name="PhoneNumber"
                type="text" 
                value={orderData.PhoneNumber}
                placeholder="enter your phone number"
                onChange={handleChange}
                />
            </label> <br />
            <label>University:
                <input 
                name="University"
                type="text" 
                value={orderData.University}
                placeholder="enter your university"
                onChange={handleChange}
                />
            </label> <br />
            <label>Faculty:
                <input 
                name="Faculty"
                type="text" 
                value={orderData.Faculty}
                placeholder="enter your faculty"
                onChange={handleChange}
                />
            </label> <br />
            <label>Major:
                <input 
                name="Major"
                type="text" 
                value={orderData.Major}
                placeholder="enter your major"
                onChange={handleChange}
                />
            </label> <br />

            <button className="button" onClick={()=>{navigate("/confirmation", {state:{orderData}})}}>Continue</button>

            </form>
        </div>
    </div>)
}

export default Order;