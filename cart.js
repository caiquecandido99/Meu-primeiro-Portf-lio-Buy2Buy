// cart.js
// Lógica do carrinho, compartilhada por todas as páginas (produto.html, buy.html,
// carrinho.html, etc). Precisa ser incluído em TODAS as páginas que têm o ícone
// de carrinho na navbar ou que adicionam/removem itens do carrinho.
//
// Guarda os itens no localStorage do navegador, então o carrinho persiste
// entre páginas e recarregamentos (mas é local de cada navegador/dispositivo).

const CARRINHO_STORAGE_KEY = "ctech_carrinho";

// Lê o carrinho salvo. Sempre retorna um array (vazio se não houver nada).
function getCarrinho() {
  try {
    const raw = localStorage.getItem(CARRINHO_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Erro ao ler o carrinho:", e);
    return [];
  }
}

// Salva o array do carrinho e atualiza o contador na navbar.
function salvarCarrinho(carrinho) {
  try {
    localStorage.setItem(CARRINHO_STORAGE_KEY, JSON.stringify(carrinho));
  } catch (e) {
    console.error("Erro ao salvar o carrinho:", e);
  }
  atualizarContadorCarrinho();
}

// Adiciona um item ao carrinho. "item" deve conter pelo menos:
// { produtoId, nome, imagem, armazenamento, preco, corHex, ram, pulseira }
// Cada chamada cria uma entrada nova no carrinho (mesmo que seja o mesmo
// produto), com um cartId único — assim dá pra ter, por exemplo, 2 iPhones
// com cores diferentes como 2 cards separados no carrinho.
function adicionarAoCarrinho(item) {
  const carrinho = getCarrinho();
  const novoItem = {
    ...item,
    cartId: `${item.produtoId}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
  };
  carrinho.push(novoItem);
  salvarCarrinho(carrinho);
  return novoItem;
}

// Remove um item do carrinho pelo cartId (o ícone de lixeira usa isso).
function removerDoCarrinho(cartId) {
  const carrinho = getCarrinho().filter((p) => p.cartId !== cartId);
  salvarCarrinho(carrinho);
}

// Atualiza todos os elementos com a classe "cart-count" (o número no ícone
// de carrinho da navbar) com a quantidade de itens no carrinho. Some com o
// número (display: none) quando o carrinho está vazio.
function atualizarContadorCarrinho() {
  const carrinho = getCarrinho();
  const total = carrinho.length;
  document.querySelectorAll(".cart-count").forEach((el) => {
    el.textContent = total;
    el.style.display = total > 0 ? "flex" : "none";
  });
}

document.addEventListener("DOMContentLoaded", atualizarContadorCarrinho);