AOS.init({
  duration: 700,
  once: true
});

// theme toggle
const themeToggle = document.getElementById("themeToggle");

function setThemeLabel() {
  const isDark = document.documentElement.classList.contains("dark-theme");
  themeToggle.textContent = isDark ? "Light" : "Dark";
}
setThemeLabel();

themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  setThemeLabel();
});

// mobile nav toggle (simple show/hide, since nav is hidden on small screens)
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// footer year
document.getElementById("year").textContent = new Date().getFullYear();