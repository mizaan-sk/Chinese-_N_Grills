// import nodemailer from 'nodemailer';

// export const DeliveryBillEmail = async (req, res) => {
//   const {address,email } = req.body;
//   console.log(address)
//   console.log(email)
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: "shaikhmizaan786@gmail.com",
//       pass: "qjsu yjki bfio vmnz" // Your email password or app-specific password
//     },
//   });        // Generate a formatted HTML email
//   const emailHTML = `
//           <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
//             <h2 style="text-align: center; color: #4CAF50;">Your Bill Summary</h2>
//             <p>Hi, thank you for your order! Here are the details of your purchase:</p>
//             <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
//               <tr>
//                 <th style="border: 1px solid #ddd; padding: 8px;">Description</th>
//                 <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Amount</th>
//               </tr>
//               <tr>
//                 <td style="border: 1px solid #ddd; padding: 8px;">Total Amount</td>
//                 <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">₹</td>
//               </tr>
//               <tr>
//                 <td style="border: 1px solid #ddd; padding: 8px;">GST (3%)</td>
//                 <td style="border: 1px solid #ddd; padding: 8px; text-align: right;"></td>
//               </tr>
//               <tr>
//                 <td style="border: 1px solid #ddd; padding: 8px;">Restaurant Charges</td>
//                 <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">10₹</td>
//               </tr>
//               <tr>
//                 <td style="border: 1px solid #ddd; padding: 8px;">Delivery Charges</td>
//                 <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">50₹</td>
//               </tr>
//               <tr>
//                 <td style="border: 1px solid #ddd; padding: 8px;">Platform Fee</td>
//                 <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">10₹</td>
//               </tr>
//                <tr>
//                 <td style="border: 1px solid #ddd; padding: 8px;">Discount</td>
//                 <td style="border: 1px solid #ddd; padding: 8px; text-align: right;"></td>
//               </tr>
                
//                   <tr style="font-weight: bold;">
//                 <td style="border: 1px solid #ddd; padding: 8px;">Discounted Price</td>
//                 <td style="border: 1px solid #ddd; padding: 8px; text-align: right;"></td>
//               </tr>
//             </table>
//             <p style="text-align: center;">We appreciate your time and look forward to serving you again!</p>
//           </div>
//         `;
//   try {
//     await transporter.sendMail({
//       from: 'shaikhmizaan786@gmail.com',
//       to: email,
//       subject: 'Your Order Bill',
//       html: emailHTML,
//     });

//     res.status(200).json({ success: true, message: 'Bill sent successfully!' });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ success: false, message: 'Error sending email.' });
//   }
// };


import nodemailer from 'nodemailer';

export const DeliveryBillEmail = async (req, res) => {
  const { address, email, bill_amount } = req.body;

  // Validate the required fields
  if (!address || !email || !bill_amount) {
    return res.status(400).send({ success: false, message: 'Missing required fields.' });
  }

  // Create the email content
  const emailContent = `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            margin: 0;
            padding: 20px;
            color: #333;
          }
          .email-container {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            margin: 0 auto;
          }
          h3 {
            color: #2c3e50;
            font-size: 24px;
            margin-bottom: 20px;
          }
          p {
            font-size: 16px;
            line-height: 1.6;
            color: #555;
          }
          p strong {
            color: #2c3e50;
          }
          .footer {
            margin-top: 30px;
            font-size: 14px;
            color: #777;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <h3>Delivery Bill Details</h3>
          <p><strong>Customer Name : </strong> ${address.name}</p>
          <p><strong>Email : </strong> ${address.email}</p>
          <p><strong>Villa No : </strong> ${address.villa_no}</p>
          <p><strong>Building Name : </strong> ${address.building_name}</p>
          <p><strong>Street Name : </strong> ${address.street_name}</p>
          <p><strong>Landmark : </strong> ${address.landmark}</p>
          <p><strong>Payment Mode :</strong>COD</p>
          <p><strong>Bill Amount : </strong> ${bill_amount}₹</p>
          <div class="footer">
            <p>If you have any questions, please feel free to reach out to us.</p>
            <p>Thank you for your service!</p>
          </div>
        </div>
      </body>
    </html>
  `;

  // Create a transport instance using your SMTP server details
  const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use any email service (e.g., Gmail, SendGrid)
    auth: {
      user: "shaikhmizaan786@gmail.com",
      pass: "qjsu yjki bfio vmnz" // Your email password or app-specific password
    },
  });

  // Set up the email options
  const mailOptions = {
    from: 'shaikhmizaan786@gmail.com', // Sender address
    to: email, // Delivery boy's email address
    subject: 'Delivery Bill', // Subject line
    html: emailContent, // Email content (HTML)
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).send({ success: true, message: 'Bill sent successfully to the delivery boy.' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send({ success: false, message: 'Failed to send the bill email.' });
  }
};
