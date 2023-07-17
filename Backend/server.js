const express = require('express');
const dotenv= require('dotenv');
const {chats}=require('./Data/data')
dotenv.config();

const app=express();


app.get('/',(req,res)=>{
    res.send("Api called : ");
    console.log("api called :")
})

app.get('/api/chat',(req,res)=>{
    res.send(chats);
})

app.get('/api/chat/:id',(req,res)=>{
    console.log(req.params.id)
    const singleChat =chats.find((c)=>c._id===req.params.id);
    res.send(singleChat)
})

const port=process.env.PORT || 8000;
 
app.listen(port,console.log(`server running on Port : ${port}`) );