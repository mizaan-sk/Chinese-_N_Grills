import reservationModel from '../models/reservationModel.js'
import nodemailer from 'nodemailer';
const reserveTable = async (req, res) => {
    const { name, email, date, persons, occasion, dining } = req.body;
    try {
       // Save reservation data to MongoDB
       const newReservation = new reservationModel({ name, email, date, persons, occasion, dining });
       await newReservation.save();
 
       // Configure Nodemailer
       const transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: true,
        auth: {
            user: "shaikhmizaan786@gmail.com",
            pass: "qjsu yjki bfio vmnz"
          },
       });
 
       // Define email content
       const mailOptions = {
        from: "shaikhmizaan786@gmail.com",
        to: email,
          subject: 'Reservation Confirmation',
          text: `Hi ${name},\n\nThank you for your reservation!\n\nDetails:\nDate: ${date}\nPersons: ${persons}\nOccasion: ${occasion}\nDining: ${dining}\n\nWe look forward to serving you!\n\nBest regards,\nYour Restaurant Team`,
       };
 
       // Send email
       await transporter.sendMail(mailOptions);
       res.status(200).json({ success: true, message: 'Reservation made and email sent!' });
    } catch (error) {
       console.error('Error during reservation or email sending:', error);
       res.status(500).json({ success: false, message: 'Reservation or email sending failed' });
    }

};

export {reserveTable};