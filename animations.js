// animations.js
// Requiere Anime.js cargado antes (por CDN en el HTML)

// --- Utility: wrap texto en spans para animación letra por letra ---
function wrapLetters(el) {
  if (!el) return;
  const text = el.textContent.trim();
  // evita volver a envolver si ya está envuelto
  if (el.querySelectorAll("span.letter").length) return;
  el.innerHTML = text.replace(/\S/g, "<span class='letter'>$&</span>");
}

// --- 1) Typing / fade-in letras del hero ---
function heroTyping() {
  let hero = document.getElementById("hero-title");
  if (!hero) {
    const heroSection = document.querySelector(
      "section.min-h-screen, section.h-screen, section"
    );
    if (heroSection) hero = heroSection.querySelector("h1");
  }
  if (!hero) return;

  wrapLetters(hero);

  anime.timeline({ loop: false })
    .add({
      targets: ".letter",
      opacity: [0, 1],
      translateY: [10, 0],
      easing: "easeOutQuad",
      duration: 40,
      delay: (el, i) => 100 * i,
    });
}

// --- 2) Reveal de bloques de código con fade + blur + slide ---
function initCodeReveal() {
  const codeEls = document.querySelectorAll("pre, .code-block");
  if (!codeEls.length) return;

  const ioOptions = { root: null, rootMargin: "0px", threshold: 0.18 };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;

        anime({
          targets: el,
          opacity: [0, 1],
          translateY: [20, 0],
          filter: ["blur(6px)", "blur(0px)"],
          easing: "easeOutExpo",
          duration: 800,
        });

        obs.unobserve(el); // animar solo la primera vez
      }
    });
  }, ioOptions);

  // inicializa estado invisible
  codeEls.forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    el.style.filter = "blur(6px)";
    observer.observe(el);
  });
}

// --- 3) Resaltar link del sidebar según la sección visible ---
function highlightSidebarOnScroll() {
  const sections = document.querySelectorAll("main section[id]");
  const links = document.querySelectorAll("aside a[href^='#']");

  if (!sections.length || !links.length) return;

  const map = {};
  links.forEach((a) => {
    const id = a.getAttribute("href").replace("#", "");
    if (id) map[id] = a;
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        const link = map[id];
        if (!link) return;
        if (entry.isIntersecting) {
          link.classList.add("text-white", "font-semibold");
        } else {
          link.classList.remove("text-white", "font-semibold");
        }
      });
    },
    { threshold: 0.45 }
  );

  sections.forEach((s) => io.observe(s));
}

// --- 4) Inicialización principal ---
function initAnimations() {
  try {
    heroTyping();
    initCodeReveal();
    highlightSidebarOnScroll();
  } catch (err) {
    console.error("Error inicializando animaciones:", err);
  }
}

// Ejecutar en load
if (document.readyState === "complete" || document.readyState === "interactive") {
  setTimeout(initAnimations, 50);
} else {
  window.addEventListener("DOMContentLoaded", initAnimations);
}
const canvas = document.getElementById("particles");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * 3 + 1;
      this.speedX = (Math.random() - 0.5) * 2;
      this.speedY = (Math.random() - 0.5) * 2;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = "white";
      ctx.fill();
    }
  }

  function init() {
    particles = [];
    for (let i = 0; i < 100; i++) {
      let x = Math.random() * canvas.width;
      let y = Math.random() * canvas.height;
      particles.push(new Particle(x, y));
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }

  init();
  animate();

  // Ajustar tamaño al cambiar ventana
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
  });