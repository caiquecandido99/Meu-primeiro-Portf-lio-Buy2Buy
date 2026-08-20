// buy.js
// Preenche a página de pagamento com base no ?id=, ?preco= e ?armazenamento= da URL.
// Precisa ser incluído DEPOIS de produtos-data.js no HTML.

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  // Checkout vindo do carrinho (2+ itens, ou só 1 — qualquer quantidade):
  // não tem "id" de produto único, então pula direto pra essa lógica em
  // vez de cair em "Produto não encontrado".
  if (params.get("origem") === "carrinho") {
    preencherComCarrinho();
    return;
  }

  const id = params.get("id");
  const precoParam = params.get("preco");
  const armazenamento = params.get("armazenamento");
  const corIndex = parseInt(params.get("cor"), 10) || 0;

  const produto = produtos[id];
  const infoContainer = document.querySelector(".produto-info");

  if (!produto) {
    infoContainer.innerHTML = "<h1>Produto não encontrado</h1>";
    return;
  }

  // Imagem (usa a cor escolhida na página do produto) e nome
  const imagemEscolhida = produto.imagens[corIndex] || produto.imagens[0];
  document.getElementById("produto-imagem").src = imagemEscolhida;
  document.getElementById("produto-imagem").alt = produto.nome;
  document.getElementById("produto-nome").textContent = produto.nome;

  // Armazenamento escolhido (se veio da página do produto)
  if (armazenamento) {
    document.getElementById("produto-armazenamento").textContent = armazenamento;
  }

  // Preço: usa o que veio na URL; se não vier, cai no preço base do produto
  const preco = precoParam ? parseFloat(precoParam) : produto.armazenamento[0].preco;
  document.getElementById("preco").textContent = preco.toFixed(2).replace(".", ",");

  // Título da aba
  document.title = `Buy2Buy | Pagamento - ${produto.nome}`;

  // Link do botão Finalizar leva os mesmos dados (incluindo a cor) para finaliza.html
  const armazenamentoTexto = armazenamento || produto.armazenamento[0].label;
  document.getElementById("link-finalizar").href =
    `./finaliza.html?id=${id}&preco=${preco}&armazenamento=${encodeURIComponent(armazenamentoTexto)}&cor=${corIndex}`;
});

// =====================================================
// CHECKOUT DO CARRINHO
// -----------------------------------------------------
// Preenche a mesma página de pagamento, mas com os dados
// salvos pelo carrinho.js em vez de buscar um produto
// único por "id". Funciona com 1, 2 ou mais itens,
// celular/watch/fone misturados — o valor mostrado é o
// TOTAL da compra, não o preço de um item isolado.
// =====================================================

function preencherComCarrinho() {
  const infoContainer = document.querySelector(".produto-info");
  const dadosSalvos = localStorage.getItem("ctech-checkout-carrinho");

  if (!dadosSalvos) {
    infoContainer.innerHTML = "<h1>Carrinho não encontrado</h1><p>Volte ao carrinho e clique em \"Finalizar compra\" novamente.</p>";
    return;
  }

  const checkout = JSON.parse(dadosSalvos);

  if (!checkout.itens || checkout.itens.length === 0) {
    infoContainer.innerHTML = "<h1>Seu carrinho está vazio</h1>";
    return;
  }

  const primeiroItem = checkout.itens[0];
  const outrosItens = checkout.itens.length - 1;

  // Imagem: usa o primeiro item do carrinho como capa da compra
  document.getElementById("produto-imagem").src = primeiroItem.imagem;
  document.getElementById("produto-imagem").alt = primeiroItem.nome;

  // Nome: primeiro item + quantos outros itens tem junto, se houver
  document.getElementById("produto-nome").textContent =
    outrosItens > 0
      ? `${primeiroItem.nome} + ${outrosItens} ${outrosItens === 1 ? "outro item" : "outros itens"}`
      : primeiroItem.nome;

  // Onde antes ia o "armazenamento", agora mostra quantos itens estão
  // sendo comprados juntos
  document.getElementById("produto-armazenamento").textContent =
    `${checkout.quantidadeItens} ${checkout.quantidadeItens === 1 ? "item" : "itens"} no carrinho`;

  // Preço: TOTAL da compra, soma de todos os itens
  document.getElementById("preco").textContent =
    Number(checkout.total).toFixed(2).replace(".", ",");

  document.title = "Buy2Buy | Pagamento - Carrinho";

  // Botão Finalizar leva pra finaliza.html avisando que é um checkout
  // de carrinho (finaliza.js precisa do mesmo tratamento de origem=carrinho
  // pra não tentar buscar um produto único por "id")
  const linkFinalizar = document.getElementById("link-finalizar");
  if (linkFinalizar) {
    linkFinalizar.href = "./finaliza.html?origem=carrinho";
  }
}