document.addEventListener("DOMContentLoaded", () => {
  // Rolagem suave para botão do hero
  const botao = document.querySelector(".hero .btn");
  botao.addEventListener("click", e => {
    e.preventDefault();
    const section = document.querySelector("#geleias");
    section.scrollIntoView({ behavior: "smooth" });
  });

  // Rolagem suave para menu
  document.querySelectorAll('header nav a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const destino = document.querySelector(link.getAttribute("href"));
      if(destino) destino.scrollIntoView({ behavior: "smooth" });
    });
  });
});
