const htp=require("node:http")
htp.createServer(function(req,res){
    if(req.url=== "/getData"){
        res.end("there is no data")
    }
res.end("Server is been created")
}).listen(1234)

