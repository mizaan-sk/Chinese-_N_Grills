import nodemailer from 'nodemailer';

export const SendingBillEmail = async (req, res) => {
  const { billDetails, userEmail } = req.body;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "shaikhmizaan786@gmail.com",
      pass: "qjsu yjki bfio vmnz" // Your email password or app-specific password
    },
  });        // Generate a formatted HTML email
  const emailHTML = `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h2 style="text-align: center; color: #4CAF50;">Your Bill Summary</h2>
            <p>Hi, thank you for your order! Here are the details of your purchase:</p>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <th style="border: 1px solid #ddd; padding: 8px;">Description</th>
                <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Amount</th>
              </tr>
              <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">Total Amount</td>
                <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">${billDetails.totalAmount}₹</td>
              </tr>
              <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">GST (3%)</td>
                <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">${billDetails.gst}₹</td>
              </tr>
              <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">Restaurant Charges</td>
                <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">10₹</td>
              </tr>
              <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">Delivery Charges</td>
                <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">50₹</td>
              </tr>
              <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">Platform Fee</td>
                <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">10₹</td>
              </tr>
               <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">Payment Mode</td>
                <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">COD</td>
              </tr>
               <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">Discount</td>
                <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">${billDetails.discount}%</td>
              </tr>
                <tr style="font-weight: bold;">
        <td style="border: 1px solid #ddd; padding: 8px;">Total to Pay</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right; text-decoration: ${billDetails.discount === 0 ? 'none' : 'line-through'}; text-decoration-color: red;">
          ${billDetails.totalPay}₹
        </td>
      </tr>
                  <tr style="font-weight: bold;">
                <td style="border: 1px solid #ddd; padding: 8px;">Discounted Price</td>
                <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">${billDetails.discountedprice}</td>
              </tr>
            </table>
            <p style="text-align: center;">We appreciate your time and look forward to serving you again!</p>
          </div>
        `;
  try {
    await transporter.sendMail({
      from: 'shaikhmizaan786@gmail.com',
      to: userEmail,
      subject: 'Your Order Bill',
      html: emailHTML,
    });

    res.status(200).json({ success: true, message: 'Bill sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Error sending email.' });
  }
};
