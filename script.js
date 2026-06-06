// =========================
// MOBILE MENU
// =========================

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    navLinks.classList.remove("active");
    hamburger.classList.remove("active");

    const section = document.querySelector(link.getAttribute("href"));

    if (section) {
      section.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// =========================
// TYPING EFFECT
// =========================

const typingElement = document.getElementById("typing-text");

const texts = [
  "Aspiring Software Engineer",
  "Web Developer",
  "Future Tech Entrepreneur"
];

let textIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (!typingElement) return;

  if (charIndex < texts[textIndex].length) {
    typingElement.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;

    setTimeout(typeEffect, 100);
  } else {
    setTimeout(() => {
      typingElement.textContent = "";
      charIndex = 0;
      textIndex = (textIndex + 1) % texts.length;

      typeEffect();
    }, 2000);
  }
}

typeEffect();

// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (!navbar) return;

  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// =========================
// VIEW WORK BUTTON
// =========================

const glowBtn = document.querySelector(".glow-btn");

if (glowBtn) {
  glowBtn.addEventListener("click", () => {
    document.querySelector("#projects").scrollIntoView({
      behavior: "smooth"
    });
  });
}

// =========================
// SKILLS ANIMATION
// =========================

const skillSection = document.querySelector("#skills");
const progressBars = document.querySelectorAll(".progress");

if (skillSection) {
  const skillObserver = new IntersectionObserver(entries => {

    if (entries[0].isIntersecting) {

      progressBars.forEach(bar => {

        const width =
          bar.classList.contains("html") ? "90%" :
          bar.classList.contains("css") ? "85%" :
          bar.classList.contains("js") ? "75%" :
          "80%";

        bar.style.width = width;
      });

    }

  }, {
    threshold: 0.4
  });

  skillObserver.observe(skillSection);
}

// =========================
// PROJECT FILTER
// =========================

const filterButtons = document.querySelectorAll(".filter-buttons button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    const filter = button.dataset.filter;

    projectCards.forEach(card => {

      const category = card.dataset.category;

      if (filter === "all" || category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }

    });

  });

});

// =========================
// MODAL
// =========================

function openModal() {
  document.getElementById("project-modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("project-modal").style.display = "none";
}

window.addEventListener("click", e => {

  const modal = document.getElementById("project-modal");

  if (e.target === modal) {
    closeModal();
  }

});

// =========================
// AI PARTICLE BACKGROUND
// =========================

const canvas = document.getElementById("ai-background");

if (canvas) {

  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particlesArray = [];

  class Particle {

    constructor() {

      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;

      this.size = Math.random() * 3 + 1;

      this.speedX = Math.random() * 2 - 1;
      this.speedY = Math.random() * 2 - 1;
    }

    update() {

      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x < 0 || this.x > canvas.width) {
        this.speedX *= -1;
      }

      if (this.y < 0 || this.y > canvas.height) {
        this.speedY *= -1;
      }

    }

    draw() {

      ctx.fillStyle = "cyan";

      ctx.beginPath();

      ctx.arc(
        this.x,
        this.y,
        this.size,
        0,
        Math.PI * 2
      );

      ctx.fill();
    }

  }

  function initParticles() {

    particlesArray = [];

    for (let i = 0; i < 120; i++) {
      particlesArray.push(new Particle());
    }

  }

  function connectParticles() {

    for (let a = 0; a < particlesArray.length; a++) {

      for (let b = a; b < particlesArray.length; b++) {

        const dx = particlesArray[a].x - particlesArray[b].x;
        const dy = particlesArray[a].y - particlesArray[b].y;

        const distance = dx * dx + dy * dy;

        if (distance < 12000) {

          ctx.strokeStyle = "rgba(0,255,255,0.15)";
          ctx.lineWidth = 1;

          ctx.beginPath();

          ctx.moveTo(
            particlesArray[a].x,
            particlesArray[a].y
          );

          ctx.lineTo(
            particlesArray[b].x,
            particlesArray[b].y
          );

          ctx.stroke();

        }

      }

    }

  }

  function animate() {

    ctx.clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    );

    particlesArray.forEach(particle => {
      particle.update();
      particle.draw();
    });

    connectParticles();

    requestAnimationFrame(animate);
  }

  initParticles();
  animate();

  window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    initParticles();

  });

  }
