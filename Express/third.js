var express =require('express');
var app = express();
app.get("/admin",function(req,res){
    res.write('Welcome to Express js');
    res.end();
});
app.listen(5050);
console.log("Server responded");