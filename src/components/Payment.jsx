import React from "react";

function Payment(){
    return(
        <div className="payment">
            <div className="order-msg-box">
                <h1 className="order-msg">Thank You</h1>
            </div>

            <div className="order-form">
                <h1>Payment</h1>
                <p className="subtitle">Please Make your payment toward this account</p>
                <p className="rekening">9812379218798279182 belongs to Omama House BCA</p>
                <p className="closing-statement">By pressing the confirm button, you will be redirected to whats app. <br />
                    please send your proof of transaction to the chat.</p>
                <button className="button"> Confirm Payment</button>
            </div>
        </div>
    )
}

export default Payment;