const express = require('express')
const fs = require('fs')
const util = require('util')
const app = express()
const cors = require('cors')
app.use(express.static('public'))
app.use(express.json())


app.use('/name',cors(), function(req, res){
    const readFile = util.promisify(fs.readFile);
    readFile("./data/aboutme.json")
    .then((text)=>{
        const data = JSON.parse(text.toString('utf8'));
        res.json({"name":data.name});
    })
    .catch((err)=>{
        console.log("error", err)
    })
})
app.use('/age',cors(), function(req, res){
    const readFile = util.promisify(fs.readFile);
    readFile("./data/aboutme.json")
    .then((text)=>{
        const data = JSON.parse(text.toString('utf8'));
        res.json({"age":data.age});
    })
    .catch((err)=>{
        console.log("error", err)
    })
})
app.use('/major',cors(), function(req, res){
    const readFile = util.promisify(fs.readFile);
    readFile("./data/aboutme.json")
    .then((text)=>{
   
        const data = JSON.parse(text.toString('utf8'));
        console.log(data)
        res.json({"major":data.major});
    })
    .catch((err)=>{
        console.log("error", err)
    })
})
app.use('/discription', cors(), function(req, res){
    const readFile = util.promisify(fs.readFile);
    readFile("./data/aboutme.json")
    .then((text)=>{
        const data = JSON.parse(text.toString('utf8'));
        res.json({"discription":data.discription});
    })
    .catch((err)=>{
        console.log("error", err)
    })
})
app.use('/based', cors(), function(req, res){
    const readFile = util.promisify(fs.readFile);
    readFile("./data/aboutme.json")
    .then((text)=>{
        const data = JSON.parse(text.toString('utf8'));
        res.json({"city":data.city});
        console.log(data.city)
    })
    .catch((err)=>{
        console.log("error", err)
    })
})
app.use('/email', cors(), function(req, res){
    const readFile = util.promisify(fs.readFile);
    readFile("./data/aboutme.json")
    .then((text)=>{
        const data = JSON.parse(text.toString('utf8'));
        res.json({"email":data.email});
        console.log(data.email)
    })
    .catch((err)=>{
        console.log("error", err)
    })
})


app.listen(3001)