const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const validUser = "user";
const validpassword = "1234";


app.post("/login",(req,res) => {
    const {username,password} = req.body;
    if(username === validUser  && password === validpassword){
        res.send("Valid Credentials");
    }
    else{
        res.send("INvalid credentials");
    }
});
app.listen(3000,()=>{
    console.log("Server is running");
});