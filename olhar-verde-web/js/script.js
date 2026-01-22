const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".header nav");
const header = document.querySelector(".header");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");

  nav.classList.contains("active")
    ? header.classList.add("teste")
    : header.classList.remove("teste");
});

window.outerWidth > 900
  ? nav.classList.remove("active")
  : nav.classList.remove("active");
