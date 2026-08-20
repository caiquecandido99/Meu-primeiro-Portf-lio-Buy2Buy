// carrinho.js
// Renderiza os itens do carrinho na carrinho.html.
// Precisa ser incluído DEPOIS de cart.js.

document.addEventListener("DOMContentLoaded", () => {
  renderizarCarrinho();

  const btnFinalizar = document.getElementById("btn-finalizar-compra");
  if (btnFinalizar) {
    btnFinalizar.addEventListener("click", finalizarCompraCarrinho);
  }
});

function renderizarCarrinho() {
  const carrinho = getCarrinho();
  const container = document.getElementById("carrinho-container");
  const vazio = document.getElementById("carrinho-vazio");

  container.innerHTML = "";

  if (carrinho.length === 0) {
    vazio.style.display = "block";
    atualizarResumo(carrinho);
    return;
  }

  vazio.style.display = "none";

  carrinho.forEach((item) => {
    container.appendChild(criarCardCarrinho(item));
  });

  atualizarResumo(carrinho);
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

// =====================================================
// RESUMO: total da compra + botão "Finalizar compra"
// -----------------------------------------------------
// Funciona com 1, 2 ou mais itens no carrinho, sejam
// celulares, smartwatches, fones — ou qualquer mistura
// entre eles, já que soma o campo "preco" de cada item
// independente da categoria do produto.
// =====================================================

function calcularTotalCarrinho(carrinho) {
  return carrinho.reduce((soma, item) => soma + Number(item.preco || 0), 0);
}

function atualizarResumo(carrinho) {
  const resumo = document.getElementById("carrinho-resumo");
  const totalItensEl = document.getElementById("carrinho-total-itens");
  const totalValorEl = document.getElementById("carrinho-total-valor");

  if (!resumo) return;

  if (carrinho.length === 0) {
    resumo.style.display = "none";
    return;
  }

  const total = calcularTotalCarrinho(carrinho);

  totalItensEl.textContent = carrinho.length;
  totalValorEl.textContent = `R$ ${total.toFixed(2).replace(".", ",")}`;

  resumo.style.display = "flex";
}

function finalizarCompraCarrinho() {
  const carrinho = getCarrinho();

  if (carrinho.length === 0) return;

  const total = calcularTotalCarrinho(carrinho);

  // Salva o resumo do carrinho pra buy.html ler e mostrar o total
  // (em vez do preço de um único produto). A imagem exibida na página
  // de pagamento usa o primeiro item do carrinho como capa; os demais
  // itens ficam disponíveis em "itens" caso queira listar todos.
  const checkout = {
    origem: "carrinho",
    total: total,
    quantidadeItens: carrinho.length,
    itens: carrinho.map((item) => ({
      nome: item.nome,
      imagem: item.imagem,
      preco: item.preco,
      armazenamento: item.armazenamento || null,
      ram: item.ram || null,
      pulseira: item.pulseira || null,
      corHex: item.corHex || null,
    })),
  };

  localStorage.setItem("ctech-checkout-carrinho", JSON.stringify(checkout));

  window.location.href = "./buy.html?origem=carrinho";
}