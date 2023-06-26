// // Arrow scroll down functionality
// const arrow = document.querySelector(".arrow-down");
// arrow.addEventListener("click", function (event) {
//   event.preventDefault();

//   const targetSection = document.querySelector(this.getAttribute("href"));
//   console.log("hi");
//   targetSection.scrollIntoView({
//     behavior: "smooth",
//   });
// });

///Creating a server side script to receive the form data and send email

console.log("hello world100");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "ricardorgvillanueva@gmail.com",
    pass: "fuegonegro1229",
  },
});

// Check if the transporter was created successfully
transporter.verify(function (error, success) {
  if (error) {
    console.log("Transporter creation failed:", error);
  } else {
    console.log("Transporter created successfully");
  }
});
