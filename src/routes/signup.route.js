const { Router } = require("express");
const bcrypt = require("bcryptjs"); // Import bcryptjs
const jwt = require("jsonwebtoken");
const Signup = require("../models/signup.model");

// Create the signup router
const authRouter = Router();

// register
authRouter.post("/signup", async (req, res) => {
  try {
    const { password, ...rest } = req.body; // Extract password and other user details

    if (!password) {
      return res.status(400).json({ error: "Password is required" });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Save the user data with the hashed password
    await Signup.create({ ...rest, password: hashedPassword });

    res.status(200).json({ message: "Signup successfully" });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

//login
authRouter.post("/login", async(req,res)=>{
    let {email}=req.body
    let user = await Signup.findOne({email})
    // console.log(process.env.JWT_SECRET)
    try {
      if(!user){
        return res.status(404).send("please register")
      }else{
        bcrypt.compare(req.body.password, user.password, function(err, result) {
          if(err){
            return res.send("wrong password")
          }
          let payload = {
            name:user._id,
            email:user.email
          }
          let token = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"1h"})
          return res.send({token,messege:"Sign in successfully",name:user.username})
      })
      }
    } catch (error) {
      return res.status(500).send("server error in signIn time")
    }
  })
module.exports = authRouter;
