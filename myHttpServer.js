const http = require('http');
const fs=require('fs');
const querystring=require('querystring');
const url=require('url');
const express = require('express')
const app =express()

//app.use(express.static(__dirname+"/private"))
app.use(express.static(__dirname+"/public"))
var a= ''
var name= ''
var password= ''
var submit= ''
app.get('/input', (req, res,next) => {
    name=req.query.name;
    password=req.query.password;
    submit=req.query.submit1;

    if(name.length!=0&&password.length!=0) next()
    else {
        res.send("用户名和密码都不能为空，请输入。")
    }

    //res.send('Hello World!')
    // a= "this is a next() test"
    // res.send("first")
    // next()

  })
app.get('/input', (req, res,next) => {
    if(submit=='注册'){
        
    }
    res.send(a)
  })

app.listen(3000)

/*
var i = 0;

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

    //加载图标
    // else if(req.url=="/favicon.ico"){
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type','text/img');
    //     //var fsData=fs.readSync();
    //     fs.readFile("favicon.ico",(err,fsData)=>{
    //         if(err){
    //             console.log("Read file error-icon");
    //             throw err;
    //         }
    //         res.write(fsData);
    //         res.end();
    //     })      
    // }



    else if(req.url.slice(0,6)=="/input"){
        res.statusCode = 200;
        let url123=req.url.split("?");
        // let urlquery=url1[1].split("&");
        // let firstQuery=urlquery[0].split("=");
        // let secondQuery=urlquery[1].split("=");
        let obQuery=querystring.parse(url123[1]);
        if(obQuery.submit1=="save"){
            fs.writeFile('./savefile',obQuery.name1,(err)=>{
                if(err) console.log("Write file error.");
                else console.log("Write file success.")
            })
        }

        else if(obQuery.submit1=="appendSave"){
            fs.appendFile('./savefile',obQuery.name1,(err)=>{
                if(err) console.log("Append file error.");
                else console.log("Append file success.")
            })
        }

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

        //console.log(obQuery);

        res.setHeader('Content-Type','text/html');
        res.write(obQuery.name1+"<br>");
        res.write(obQuery.submit1+"<br>");

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
*/
