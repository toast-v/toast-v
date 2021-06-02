const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const url = require('url');
const insertDB = require('./MongodbLib')
const express = require('express')
const app = express()
const ejs = require("ejs")

//mongoose-------------------------------------------
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongooseforuser', { useNewUrlParser: true, useUnifiedTopology: true });
var Schema = mongoose.Schema

var userSchema = new Schema({
    name: String,
    password: String
})
const User = mongoose.model('User', userSchema);

app.set("view engien", "ejs")
app.set("views", "/views")
//app.use(express.static(__dirname+"/private"))
app.use(express.static(__dirname + "/public"))
var a = ''
var name = ''
var password = ''
var submit = ''
//doc={}
app.get('/input', (req, res, next) => {
    name = req.query.name;
    password = req.query.password;
    submit = req.query.submit1;
    //doc[name]=password;
    console.log(name)
    if (name.length != 0 && password.length != 0) next()
    else {
        res.render(__dirname + "/views/resp.ejs", { message: "用户名和密码都不能为空，请输入。" })
        //res.send("用户名和密码都不能为空，请输入。")
    }

})

app.get('/input', (req, res, next) => {
    newUserlog = new User({ name: name, password: password });
    User.find({name:name},(err,docs)=>{if(!err){
        if(docs.length!=0) nameInDB=100;
        else nameInDB=0
        next();
    }})

})

app.get('/input', (req, res, next) => {
    if (submit == '注册') {
        if(nameInDB==0) {
            //写入
            newUserlog.save((err)=>{res.send("注册成功")});
        }
        else{
            res.render(__dirname+"/views/resp.ejs",{message:"用户名已存在，请重新输入"})
        }

        //insertDB.insertData("mydb","mycollection",[{name:name,password:password}])
        /*
        insertDB.myfind("mydb","login",{name:name,password:password},(docs)=>{
            if(docs.length==0){
                insertDB.insertData("mydb","login",[{name:name,password:password}])
                // collection.insertMany([findData],function(err,result){
                //     if(err) console.log("写入失败。");
                //     else console.log("注册成功！");
                // })
                res.send("注册成功") //一般不写在这里，应该写在回调函数内
            }
            else {
                loginFlag=1;
                console.log("注册失败！")
                res.send("注册失败")
            }
        })
        */
    }
    //res.send(a)
})

app.get('/input', (req, res, next) => {
    if (submit == '登录') {
        User.find({name:name,password:password},(err,docs)=>{if(!err){
            if(docs.length!=0)res.send("欢迎"+name+"到来");
            else res.render(__dirname+"/views/resp.ejs",{message:"用户名或密码错误，请重新输入！"})
        }})



        //insertDB.insertData("mydb","mycollection",[{name:name,password:password}])
        // insertDB.myfind("mydb", "login", { name: name, password: password }, (docs) => {
        //     if (docs.length == 0) {
        //         res.send("用户名密码错误，登录失败。") //一般不写在这里，应该写在回调函数内
        //     }
        //     else {
        //         res.send("登录成功。")
        //     }
        // })

    }
    //res.send(a)
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
