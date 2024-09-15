import contact_form_model from "../models/contact_form_model.js";
import nodemailer from 'nodemailer';

const Contact_Form = async (req, res) => {

    
    
    
    const { name, email, phone, message } = req.body;
    try {
        const newContact = new contact_form_model({
            name,
            email,  
            phone,  
            message
        })
        await newContact.save();
     
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: true,
            auth: {
                user: "shaikhmizaan786@gmail.com",
                pass: "qjsu yjki bfio vmnz"
            }
        });

        
        const mailOptions = {
            from: "shaikhmizaan786@gmail.com",
            to: email,
            subject: 'Thanks For Contact',
            text: `${name} our team will contact you shortly`
        };

      
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Referral email sent successfully!' });

    } catch (error) {

        console.log(error)
        res.json({ success: false, message: "ERROR" })
    }
   }
    
export default Contact_Form 

