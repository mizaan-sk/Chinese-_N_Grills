import userModel from "../models/usermodel.js";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken"; 
import bcrypt from 'bcryptjs';
const Forgotpassword = async (req, res) => {
   try {
     const  email  = req.body.email;
    
     
    const user = await userModel.findOne( {email} );
  
    if (user) {
      const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "1d"})
    
    

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
        subject: `Hello ${user.name} please change password!`,
 text:`http://localhost:5173/reset-password/${user._id}/${token}`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });



      return res.json({ success: true, message: "User exists" });
    } else {
      return res.json({ success: false, message: "User Not Found" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "ERROR" });
  }
};

const ResetPassword = async (req, res) => {
  const {id, token} = req.params
  const {password} = req.body

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if(err) {
          return res.json({Status: "Error with token"})
      } else {
          bcrypt.hash(password, 10)
          .then(hash => {
              userModel.findByIdAndUpdate({_id: id}, {password: hash})
              .then(u => res.send({Status: "Success"}))
              .catch(err => res.send({Status: err}))
          })
          .catch(err => res.send({Status: err}))
      }
  })
};



export {Forgotpassword, ResetPassword};









