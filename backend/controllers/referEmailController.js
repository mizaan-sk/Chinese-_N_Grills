import nodemailer from 'nodemailer';

// Email sending logic
export const sendReferEmail = async (req, res) => {
    const { friendEmail, referrerName, referrerEmail } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: true,
            auth: {
                user: "shaikhmizaan786@gmail.com",
                pass: "qjsu yjki bfio vmnz"
              },
           });
    
        const mailOptions = {
            from: "shaikhmizaan786@gmail.com",
            to: friendEmail,
            subject: 'Referral from a Friend!',
            text: `${referrerName} has referred you! Contact them at ${referrerEmail}.`
        };
    
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Referral email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Error sending referral email' });
    }
    
};
export default sendReferEmail;
