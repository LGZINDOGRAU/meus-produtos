document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('header nav a, .hero .btn').forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const destino = document.querySelector(link.getAttribute("href"));
      if(destino) destino.scrollIntoView({ behavior: "smooth" });
    });
  });
});
