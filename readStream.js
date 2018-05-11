var http = require('http');
var fs = require('fs');

/*http.createServer(function(req,res){
    console.log('Request was made to URL --> ' + req.url);
    res.writeHead(200,{'content-type':'text/html');
    res.write('Sending Out Data');
    res.end();
}).listen(3002)*/;

//Read Stream
var myReadStream = fs.createReadStream(__dirname + '/largeTestFile.txt','utf8');
myReadStream.on('data',function(chunk){
    console.log('new chunk received');
    console.log(chunk);
})