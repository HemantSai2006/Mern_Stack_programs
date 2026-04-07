var express =require('express');
var app = express();
app.get("/admin/:id",function(req,res){
    let id=req.params.id;
    res.send("welcome to express js"+id);
});
app.listen(5055);
console.log("Server responded");