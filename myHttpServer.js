const http = require('http');
const fs=require('fs');
const querystring=require('querystring');
//var i = 0;

const server = http.createServer((req,res) => {
    //i++;
    if(req.url=="/"){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/html');
        fs.readFile("form1.html",(err,fsData)=>{
            if(err){
                console.log("Read file error-form");
                throw err;
            }
            res.write(fsData);
            res.end();
        })
        //res.write(fsData);
        
    }
    else if(req.url=="/favicon.ico"){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/img');
        //var fsData=fs.readSync();
        fs.readFile("favicon.ico",(err,fsData)=>{
            if(err){
                console.log("Read file error-icon");
                throw err;
            }
            res.write(fsData);
            res.end();
        })
        
        
    }
    else if(req.url.slice(0,6)=="/input"){
        res.statusCode = 200;
        let url1=req.url.split("?");

        // let urlquery=url1[1].split("&");
        
        // let firstQuery=urlquery[0].split("=");
        // let secondQuery=urlquery[1].split("=");
        let obQuery=querystring.parse(url[1]);

        res.setHeader('Content-Type','text/html');
        res.write(obQuery.name+"<br>");
        res.write(obQuery.submit+"<br>");

        res.end("submit success.")
    }

    else{
        res.statusCode = 200;
        res.setHeader('Content-Type','text/html');
        //res.write(req.url)
        res.write('<h1>HOW DARE YOU ! U R the '+i+'th brave guy.</h1>');
        res.end();
    }

    console.log("This is my consolelog");
});

server.listen(3000);

