const express = require("express");
const User = require("../models/User");
const router = express.Router();
const {v4 : uuidv4} = require('uuid');
const {setUser} = require('../service/auth')
const bcrypt = require('bcrypt')

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

    const user = await User.findOne({email});

    try {
      if(!(user === null)){
        const message = "User already exist please login"
        console.log(message);
        return res.json({message,email});
      }
      else{ 
          const message = "signup successfully"
          console.log(message)
          const newUser = new User({ email, password });

          const storeUser = await newUser.save();
          console.log(storeUser)
          return res.json({message,email}).status(200)
      }
    } catch (error) {
      console.log(error)
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
      const user = await User.findOne({email});
  
      if(!(user === null)){

        const isMatch = await bcrypt.compare(password,user.password)
          if(user.email === email && isMatch)
          {
              const sessionId = uuidv4();
              setUser(sessionId,user)
              console.log(email);
              const message = "Login success"
              return res.json({message,email}).status(200)
          }
          else{
              const message = "Incorrect username or password"
              return res.json({message}).status(200)
          }
      }
      else{
          const message = "User not Found"
          console.log(message)
          return res.json({message,email})
      }
  });

router.get("/getusers", async (req, res) => {

     try {
      const users = await User.find();
      res.json(users)
      return res.json(users)
     } catch (error) {
      console.log(error)
     }
  });
router.post("/deleteusers", async (req, res) => {

    const email = req.body.email;
     try {
      const user = await User.deleteOne({email});
      const message = "deleted successfully";
      res.json({message,email})
     } catch (error) {
      console.log(error)
     }
  });

module.exports = router;