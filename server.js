const express = require("express");
const nodemailer = require("nodemailer");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const port = 3000; // Set the port number you want to use

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post("/submit-form", (req, res) => {
  // Extract form data from the request body
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "ricardorgvillanueva@gmail.com",
      pass: "fuegonegro1228",
    },
  });

  // Compose the email message
  const mailOptions = {
    from: email,
    to: "ricardorgvillanueva@gmail.com",
    subject: "New Form Submission",
    text: message,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.send("Email sent successfully");
    }
  });
});
