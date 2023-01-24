
const burger = document.querySelector("#burger-menu");
const ol = document.querySelector("nav ol");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ol.classList.toggle("show");
  });

ol.addEventListener("click", () => {
  ol.classList.toggle("show");
})
  // Close hamburger menu when a link is clicked

/* Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ol.classList.remove("show");
  })
); */
