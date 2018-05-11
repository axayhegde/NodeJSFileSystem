var fs = require('fs');
var http = require('http');

//Read File
http.createServer(function(req,res){
    fs.readFile('test.html',function(err,data){
       res.writeHead(200,{'Content-Type': 'text/html'});
       res.write(data);
       res.end();
    });
}).listen(3001);


fs.appendFile('newFile.txt','This is new file content',function(err){
    if(err){
        throw err;
    }else{
        console.log('Saved');
    }
});

fs.open('newFile.txt','w',function(err,file){
   if(err) throw err;
   console.log('Fs OPEN');
});