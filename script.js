// Arrow scroll down functionality
const arrow = document.querySelector(".arrow-down");
arrow.addEventListener("click", function (event) {
  event.preventDefault();

  const targetSection = document.querySelector(this.getAttribute("href"));
  targetSection.scrollIntoView({
    behavior: "smooth",
  });
});
