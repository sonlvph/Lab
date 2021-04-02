var http = require('http');
// var cal = require('./Cal.js')
var fs = require('fs');
http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    // var  tong = cal.tinhTong(5,7);
    var url = req.url;
    if (url == '/'){

        fs.readFile('Home.html',function (error,data){
            if (!error){
                res.write(data);
                res.end();
            }else {
                res.end('404 not found');
            }
        });
    }


}).listen(8090);