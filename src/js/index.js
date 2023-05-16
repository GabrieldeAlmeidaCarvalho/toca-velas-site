const alterarTema = document.getElementById("logoid");

const body = document.querySelector("body");

const botaoTrocaDeImagem = document.querySelector(".logo")

alterarTema.addEventListener("click", () => {

  const modoEscuroAtivo = body.classList.contains("modo-escuro");

  if (modoEscuroAtivo) {
    body.classList.remove("modo-escuro");
    botaoTrocaDeImagem.setAttribute("src", "/assets/logo.svg");
  } else {
    body.classList.add("modo-escuro");
    
    botaoTrocaDeImagem.setAttribute("src", "/assets/velas.svg")  
  }
});

