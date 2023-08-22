const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  const { name, email, message } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465, // Port for secure SSL connection
    secure: true, // Use SSL
    auth: {
      user: "ricardorgvillanueva@gmail.com", // Your Gmail email address
      pass: "Fuegonegro1228.", // Your Gmail password or an "App Password" if enabled
    },
  );

  const mailOptions = {
    from: email,
    to: "ricardorgvillanueva@gmail.com", // Replace with your email address
    subject: "New Form Submission",
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error sending email" }),
    };
  }
};
