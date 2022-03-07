const http = require('http');

const server = http.createServer(function test(req,res){
    res.setHeader('content-type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin','*');
    res.writeHead(200);

    let dataObj = {}
});

server.listen(3000,function(){
    console.log('Listening on Port 3000')
})