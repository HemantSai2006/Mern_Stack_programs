const express = require('express');
const app = express();
app.set('view engine','ejs');
app.get('/',(req,res) => {   
    res.render("home1",{
        name:"Hemanth",
        subject:"Node js"
    });
}); 
app.listen(3005,() => {
    console.log("Server is running");
});