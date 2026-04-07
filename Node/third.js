var fs=require('fs');
var content="html\ncss\n welcome to creating file using node";
fs.writeFile("src.txt",content,function(err){
    if(err){
        console.log("error");
    }
    else{
        console.log("file created");
    }
});