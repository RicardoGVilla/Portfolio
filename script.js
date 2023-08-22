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

window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
});

const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => console.log("Form successfully submitted"))
    .catch((error) => alert(error));
};

document.querySelector("form").addEventListener("submit", handleSubmit);
