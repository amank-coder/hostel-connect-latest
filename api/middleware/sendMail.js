const { createTransport } = require('nodemailer');
const crypto = require('crypto');
const Complaint = require('../models/complaintModel');  // Assuming Complaint model

exports.sendMail = async (email, subject, complaintId, userName) => {
    
    // Create a secure token for the verification link
    const token = crypto.randomBytes(32).toString('hex');
    
    // Save the token to the complaint document, or you could also save it to a user document
    const complaint = await Complaint.findById(complaintId);
    if (!complaint) {
        throw new Error('Complaint not found');
    }

    complaint.verificationToken = token;
    await complaint.save();

    const verificationLink = `http://localhost:5173/verify-complaint?token=${token}&complaintId=${complaintId}`;
    
    // Setup the email transport using Gmail's SMTP
    const transport = createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
            user: process.env.GMAIL,
            pass: process.env.PASSWORD
        }
    });

    // HTML template for the email
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Complaint Resolved</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }
            .container {
                background-color: #fff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                text-align: center;
                width: 300px;
            }
            h1 {
                color: green;
            }
            p {
                margin-bottom: 20px;
                color: #666;
            }
            .btn {
                background-color: #4CAF50;
                color: white;
                padding: 12px 24px;
                text-align: center;
                text-decoration: none;
                border-radius: 4px;
                cursor: pointer;
                display: inline-block;
            }
            .btn:hover {
                background-color: #45a049;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Complaint Resolved</h1>
            <p>Hello ${userName},</p>
            <p>Your complaint has been resolved successfully. Please click the link below to verify the resolution:</p>
            <a href="${verificationLink}" class="btn">Verify Resolution</a>
        </div>
    </body>
    </html>
    `;

    // Sending the email to the user
    await transport.sendMail({
        from: process.env.GMAIL,
        to: email,
        subject: subject,
        html: html
    });

    console.log(`Resolution email sent to ${email}`);
};
