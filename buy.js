// buy.js
// Preenche a página de pagamento com base no ?id=, ?preco= e ?armazenamento= da URL.
// Precisa ser incluído DEPOIS de produtos-data.js no HTML.

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
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