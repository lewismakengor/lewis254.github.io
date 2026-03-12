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
document.querySelector(".glow-btn").addEventListener("click", () => {
  document.querySelector("#projects").scrollIntoView({
    behavior: "smooth"
  });
});
const skillSection = document.querySelector("#skills");
const progressBars = document.querySelectorAll(".progress");

const skillObserver = new IntersectionObserver(entries => {

  if(entries[0].isIntersecting){

    progressBars.forEach(bar => {
      const width = bar.classList.contains("html") ? "90%" :
                    bar.classList.contains("css") ? "85%" :
                    bar.classList.contains("js") ? "70%" :
                    "75%";

      bar.style.width = width;
    });

  }

}, {threshold:0.4});

skillObserver.observe(skillSection);
const filterButtons = document.querySelectorAll(".filter-buttons button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    const filter = button.getAttribute("data-filter");

    projectCards.forEach(card => {

      if(filter === "all" || card.getAttribute("data-category") === filter){
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }

    });

  });

});
function openModal() {
  document.getElementById("project-modal").style.display = "block";
}

function closeModal() {
  document.getElementById("project-modal").style.display = "none";
}function openModal() {
  document.getElementById("project-modal").style.display = "block";
}

function closeModal() {
  document.getElementById("project-modal").style.display = "none";
}
