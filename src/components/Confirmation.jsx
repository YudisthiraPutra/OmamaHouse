import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

function Confirmation(){
    const location = useLocation();
    const navigate = useNavigate();
    const state = location.state.orderData;

    // data to state
    console.log("Payment.jsx");
      const [email, setEmail] = useState(state.Email);
      const [name, setName] = useState(state.Name);
      const [idNum, setIdNum] = useState(state.IdNumber);
      const [addr, setAddr] = useState(state.Address);
      const [pn, setPn] = useState(state.PhoneNumber);
      const [uni, setUni] = useState(state.University);
      const [fac, setFac] = useState(state.Faculty);
      const [maj, setMaj] = useState(state.Major);
    
      console.log(email)
    const HandleSubmit =async (e)=>{
        console.log(email)
        e.preventDefault();
        let result = await fetch(
            'http://localhost:4000/confirmation',{
                method:"post",
                body: JSON.stringify({email,name,idNum,addr,pn,uni,fac,maj}),
                headers: {
                    'Content-Type': 'application/json'
                }
        })
        result = await result.json;
        console.warn(result);
        if (result) {
            alert("Data saved succesfully");
            setEmail("");
            setName("");
            setIdNum("")
            setAddr("")
            setPn("");
            setUni("");
            setFac("");
            setMaj("");
            navigate("/payment");
        }
    }
    return(
        <div className="confirmation">
            <h1 className="confirmation-title">Confirmation Data</h1>
                <tr>
                    <td className="title">Email</td>
                    <td>:</td>
                    <td className="data">{state.Email}</td>
                </tr>
                <tr>
                    <td className="title">Name</td>
                    <td>:</td>
                    <td className="data">{state.Name}</td>
                </tr>
                <tr>
                    <td className="title">ID Number</td>
                    <td>:</td>
                    <td className="data">{state.IDNumber}</td>
                </tr>
                <tr>
                    <td className="title">Address</td>
                    <td>:</td>
                    <td className="data">{state.Address}</td>
                </tr>
                <tr>
                    <td className="title">Phone Number</td>
                    <td>:</td>
                    <td className="data">{state.PhoneNumber}</td>
                </tr>
                <tr>
                    <td className="title">University</td>
                    <td>:</td>
                    <td className="data">{state.University}</td>
                </tr>
                <tr>
                    <td className="title">Faculty</td>
                    <td>:</td>
                    <td className="data">{state.Faculty}</td>
                </tr>
                <tr>
                    <td className="title">Major</td>
                    <td>:</td>
                    <td className="data">{state.Major}</td>
                </tr>

                <button onClick={HandleSubmit} className="button">Confirm</button>
        </div>
    )
}

export default Confirmation;