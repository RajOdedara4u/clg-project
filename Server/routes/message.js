const express = require("express");
const Message = require("../models/Message");
const message = express.Router();

message.post("/contact",async(req,res)=>{
    const { email, subject , message } = req.body;

    try {
        const newMessage = new Message({ email, subject ,message });
        await newMessage.save();
        return res.json({message,subject,email}).status(200)
    } catch (error) {
      console.log(error)
    }
})

message.get('/contact',async(req,res)=>{

    const messages = await Message.find();
    console.log(messages)
    res.json(messages).status(200)
})

module.exports = message