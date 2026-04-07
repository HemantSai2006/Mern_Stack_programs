var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("<h1>Welcome to javascript with node.js</h1>");
    res.end();
}).listen(4200);
console.log("Server Responded");