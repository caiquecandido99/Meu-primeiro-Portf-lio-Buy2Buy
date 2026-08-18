// carrinho.js
// Renderiza os itens do carrinho na carrinho.html.
// Precisa ser incluído DEPOIS de cart.js.

document.addEventListener("DOMContentLoaded", () => {
  renderizarCarrinho();
});

function renderizarCarrinho() {
  const carrinho = getCarrinho();
  const container = document.getElementById("carrinho-container");
  const vazio = document.getElementById("carrinho-vazio");

  container.innerHTML = "";

  if (carrinho.length === 0) {
    vazio.style.display = "block";
    return;
  }

  vazio.style.display = "none";

  carrinho.forEach((item) => {
    container.appendChild(criarCardCarrinho(item));
  });
}

function criarCardCarrinho(item) {
  const card = document.createElement("div");
  card.classList.add("carrinho-card");
  card.dataset.cartId = item.cartId;

  // Imagem do produto
  const img = document.createElement("img");
  img.src = item.imagem;
  img.alt = item.nome;
  img.classList.add("carrinho-card-img");
  card.appendChild(img);

  // Informações do produto
  const info = document.createElement("div");
  info.classList.add("carrinho-card-info");

  const nome = document.createElement("h3");
  nome.classList.add("carrinho-card-nome");
  nome.textContent = item.nome;
  info.appendChild(nome);

  // Configuração escolhida: armazenamento + RAM + pulseira (o que existir)
  const partesConfig = [];
  if (item.armazenamento) partesConfig.push(item.armazenamento);
  if (item.ram) partesConfig.push(item.ram);
  if (item.pulseira) partesConfig.push(`Pulseira ${item.pulseira}`);

  if (partesConfig.length > 0) {
    const config = document.createElement("p");
    config.classList.add("carrinho-card-config");
    config.textContent = partesConfig.join(" · ");
    info.appendChild(config);
  }

  // Preço da configuração escolhida (por armazenamento)
  const preco = document.createElement("p");
  preco.classList.add("carrinho-card-preco");
  preco.textContent = `R$ ${Number(item.preco).toFixed(2).replace(".", ",")}`;
  info.appendChild(preco);

  // Cor escolhida (bolinha colorida com o hex salvo)
  if (item.corHex) {
    const corWrapper = document.createElement("div");
    corWrapper.classList.add("carrinho-card-cor-wrapper");

    const corLabel = document.createElement("span");
    corLabel.classList.add("carrinho-card-cor-label");
    corLabel.textContent = "Cor:";

    const corBolinha = document.createElement("span");
    corBolinha.classList.add("carrinho-card-cor");
    corBolinha.style.backgroundColor = item.corHex;

    corWrapper.appendChild(corLabel);
    corWrapper.appendChild(corBolinha);
    info.appendChild(corWrapper);
  }

  card.appendChild(info);

  // Botão de remover (lixeira)
  const btnRemover = document.createElement("button");
  btnRemover.classList.add("btn-remover-carrinho");
  btnRemover.type = "button";
  btnRemover.setAttribute("aria-label", `Remover ${item.nome} do carrinho`);
  btnRemover.innerHTML = `<ion-icon name="trash-outline"></ion-icon>`;

  btnRemover.addEventListener("click", () => {
    removerDoCarrinho(item.cartId);
    renderizarCarrinho();
  });

  card.appendChild(btnRemover);

  return card;
}