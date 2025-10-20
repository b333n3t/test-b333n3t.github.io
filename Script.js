// script.js — active nav highlighting
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".panel");
  const links = document.querySelectorAll(".nav-links a");

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + id));
      }
    });
  }, { threshold: 0.6 });

  sections.forEach(s => io.observe(s));
});
