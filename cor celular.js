// cor-celular.js
// Alterna a imagem do produto de acordo com a cor selecionada.
// Funciona para qualquer marca/produto: os botões de cor são lidos
// dinamicamente de dentro de ".cor-container" (gerados pelo produto.js),
// então não depende de classes fixas como "cor-celular1/2/3".

document.addEventListener("DOMContentLoaded", () => {

    // Pega todos os cards de produto que tenham imagens do celular
    const cards = document.querySelectorAll(".card-celular");

    cards.forEach((card) => {

        // Dentro de cada card, pega as imagens e os botões de cor
        const imagens = card.querySelectorAll(".celular, .celular-hidden, .celular-hidden2");
        const botoesCor = card.parentElement.querySelectorAll(".cor-container button");

        botoesCor.forEach((botao, index) => {
            botao.addEventListener("click", () => {

                // Esconde todas as imagens do card
                imagens.forEach((img) => img.classList.add("celular-hidden"));

                // Mostra apenas a imagem correspondente ao botão clicado
                if (imagens[index]) {
                    imagens[index].classList.remove("celular-hidden");
                }

                // Marca visualmente qual botão de cor está ativo
                botoesCor.forEach((b) => b.classList.remove("cor-ativa"));
                botao.classList.add("cor-ativa");
            });
        });
    });

});