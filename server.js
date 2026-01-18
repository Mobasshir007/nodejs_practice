const htp=require("node:http")
htp.createServer(function(req,res){
    if(req.url=== "/getData"){
        res.end("there is no data")
    }
res.end("Server is been created")
}).listen(1234)


const server=htp.createServer(function(request,response){
    response.end("second server is running")
})
server.listen(543)