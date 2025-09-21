const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");
const navLinks = [...document.querySelectorAll(".navbar a")];

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});
