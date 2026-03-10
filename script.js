const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active"); // Animate hamburger to X
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active"); // Reset X
  });
});

// Close menu after clicking link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});


// Typing Effect
const text = "Aspiring Software Engineer";
const typingElement = document.getElementById("typing-text");

let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  }
}

typeEffect();

document.querySelectorAll(".nav-links a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const section = document.querySelector(this.getAttribute("href"));
    section.scrollIntoView({
      behavior: "smooth"
    });
  });
});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
