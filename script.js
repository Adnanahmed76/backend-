// const fs = require('fs');
// const http =require('http');
//NPM UNDERSTANDING

//npm - node package manager



//INSTALLING AND UNINSTALLING ANYTHINNG BASIC AND ADVANCED
//UNDERSTANDING NODE_MODULE
//DEVDEPENDENCIES
//DEPENDENCIIES
//SCRIPT -  UNDERSTANDIN DEFAULT SCRIPTS PATH AND CUSTOM SCRIPTS











// writefile
// appendfile
// copyfile
// rename
// unlink
// fs.appendFile('hey.txt',"mai to achha ho",function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })
// fs.rename('hey.txt',"hello.text", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// } )
// fs.copyFile("hello.text","./copy2/copy.text",function(err){
//     if(err) console.error(err.message);
//     else console.log("done");
// })
// fs.unlink('hello.text', function(err){
//     if(err) console.log(err);
//     else console.log("removed");
// })

// fs.rmdir("./copy",{recursive:true},function(err){
//     if(err) console.error(err);
//     else console.log("removed");
// })

//for creating folder
// fs.mkdir("new-folder",{recursive:true}, function(err){
//     if(err) console.error(err);
//     else console.log("created");
// })

//how i can learn file 
// const server=http.createServer(function(req,res){
// res.end("hello adnan");

// })
// server.listen(3000);
//introduction to express.js
//express js ek npm package hai
//framwork -> 
// manages everything from receiving the request and giving the response 


//setting up a basic express application
const express =require('express')
const app =express();

//route create karna 
//facebook.com/ this is / is a route we called these type of / route
// routess

app.get('/',function(req,res){
    res.send("champion my adnan")
})
//Routes name /name
app.get('/name',function(req,res){
    res.send("adnan ahmed");
})
app.listen(3000);
//MIDDLE WARE 
