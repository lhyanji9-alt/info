// 부드러운 등장 효과
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".world-card, .castle-banner, .location-grid, .character").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(18px)";
  el.style.transition = "opacity .8s ease, transform .8s ease";
  observer.observe(el);
});
