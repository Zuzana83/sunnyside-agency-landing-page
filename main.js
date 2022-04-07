const navToggle = document.getElementById("nav-toggle");
const menuLinks = document.querySelector(".menu-links");

navToggle.addEventListener("click", () => {
    menuLinks.classList.toggle("show-links");
});

console.log("hello there");