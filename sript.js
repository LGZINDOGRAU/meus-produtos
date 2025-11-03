// Espera o documento carregar
document.addEventListener("DOMContentLoaded", () => {
  // Seleciona o botão "Ver produtos"
  const botao = document.querySelector(".btn");

  // Adiciona um evento de clique
  botao.addEventListener("click", (e) => {
    e.preventDefault(); // impede o comportamento padrão do link
    const section = document.querySelector("#geleias"); // seção alvo
    section.scrollIntoView({ behavior: "smooth" }); // rolagem suave
  });
});

