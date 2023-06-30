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
