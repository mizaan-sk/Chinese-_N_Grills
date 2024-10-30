import userModel from "../models/usermodel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import nodemailer from "nodemailer"
const createToken = (id) =>{
   return jwt.sign({id},process.env.JWT_SECRET)
}
//Login User
const loginUser = async (req, res) => {
 const {email , password} = req.body;
 const user = await userModel.findOne({email})
 try {
    if(!user){
       return res.json({success:false , message:"User doesn't exist"})
    }
    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
       return res.json({success:false , message:"Invalid Credentials"})
    }
    const token = createToken(user._id);
    res.json({success:true,token})
 } catch (error) {
    console.log(error)
    res.json({success:false,message:"ERROR"})
 }
}


//register User
const registerUser =async (req, res) => {
    const { name, email, password } = req.body;
    try {
        //Checking is user exist
        const user = await userModel.findOne({ email })
        if (user) {
            return res.json({ success: false, message: "User already exist" })
        }
        //validating email format & Strong Password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter valid email" })
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" })
        }

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'aalainsmst@gmail.com',
              pass: 'ipml xovg hfpv aauo'
            }
          });
          
          var mailOptions = {
            from: 'aalainsmst@gmail.com',
            to:email ,
            subject: `  ${name} Thanks For Registering With Tomato`,
     text:`Here is Your  Password: ${password}`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });

        //hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

        const createdUser =await newUser.save();
        const token = createToken(createdUser._id);
        res.json({success:true ,token})
 } catch (error) {
    console.log(error)
    res.json({success:false,message:"Error"})
    }
}

export { loginUser, registerUser }