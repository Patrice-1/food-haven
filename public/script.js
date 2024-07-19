const homeBtn = document.getElementById("home-btn");
const navLinks = document.getElementById("nav-links");
const aboutBtn = document.getElementById("about-btn");
const serviceBtn = document.getElementById("service-btn");
const contactBtn = document.getElementById("contact-btn");

homeBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  homeBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-home-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  homeBtnIcon.setAttribute("class", "ri-home-line");
});


