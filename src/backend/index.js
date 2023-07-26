const express = require('express');
const mongoose = require('mongoose');
const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/omamaDB")

const omamaSchema = {
    email:String,
    name:String,
    addr:String,
    Address:String,
    pn:String,
    uni:String,
    fac:String,
    maj:String,
}

const Omama = mongoose.model("Omama", omamaSchema);
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {
 
    resp.send("App is Working");
    // You can check backend is working or not by
    // entering http://loacalhost:5000
     
    // If you see App is working means
    // backend working properly
});

app.post("/confirmation", async (req,res)=>{
    try {
        const user = new Omama(req.body);
        let result = await user.save();
        result = result.toObject();
        if (result) {
            res.send(req.body);
            console.log(result);
        } else {
            console.log("User already registered");
        }}
        catch (e) {
            res.send("Something Went Wrong");
        }
    })

app.listen(4000, function(){
    console.log("Running on 3000")
});