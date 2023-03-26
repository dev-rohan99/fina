const hamburger = document.querySelector(".bar_icon_link");
const navLinks = document.querySelector(".ulBlockMain");
const allNavLinks = document.querySelectorAll(".ulBlockMain .ulListFixed li");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

