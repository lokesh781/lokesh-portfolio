// Developer Easter Egg
console.log(
  "%c✨ Portfolio designed & developed by Kashish %c(https://www.linkedin.com/in/kashish54)",
  "color: #6366f1; font-weight: bold; font-size: 13px;",
  "color: #94a3b8; font-size: 11px;"
);

AOS.init({
  duration: 800,
  once: true
});

// mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// close menu when a link is clicked
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// footer year
document.getElementById("year").textContent = new Date().getFullYear();

// theme toggle
const themeToggle = document.getElementById("themeToggle");

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

themeToggle.addEventListener("click", (e) => {
  if (!document.startViewTransition) {
    toggleTheme();
    return;
  }

  const x = e.clientX || window.innerWidth / 2;
  const y = e.clientY || window.innerHeight / 2;
  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  );

  const transition = document.startViewTransition(() => {
    toggleTheme();
  });

  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`
    ];
    
    document.documentElement.animate(
      {
        clipPath: clipPath
      },
      {
        duration: 450,
        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
        pseudoElement: "::view-transition-new(root)"
      }
    );
  });
});

// navbar scroll effect
const navbar = document.querySelector(".navbar");

function handleScroll() {
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}
window.addEventListener("scroll", handleScroll);
handleScroll();

// Preloader Counter
const preloader = document.getElementById("preloader");
const preloaderPercent = document.getElementById("preloaderPercent");
const preloaderLine = document.getElementById("preloaderLine");

if (preloader) {
  let count = 0;
  const target = 100;
  const duration = 1400; 
  const stepTime = duration / target;

  const timer = setInterval(() => {
    count++;
    if (count <= target) {
      preloaderPercent.textContent = count.toString().padStart(2, "0");
      preloaderLine.style.width = `${count}%`;
    } else {
      clearInterval(timer);
      preloader.classList.add("fade-out");
      document.body.classList.remove("preloading");
      setTimeout(() => {
        preloader.style.display = "none";
      }, 800);
    }
  }, stepTime);
}


// Spotlight Hover Glow Card Effect
const spotlightCards = document.querySelectorAll(".project-card, .skill-card, .about-info-card, .timeline-content, .contact-inner");
spotlightCards.forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  });
});