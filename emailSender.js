const nodemailer = require('nodemailer');

// Create a transporter object with your email provider details
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email-address',
    pass: 'your-email-password'
  }
});

// Define the email options
const mailOptions = {
  from: 'your-email-address',
  to: 'your-email-address',
  subject: 'Test Email',
  text: 'Hello, this is a test email!'
};

// Send the email
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
