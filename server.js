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
