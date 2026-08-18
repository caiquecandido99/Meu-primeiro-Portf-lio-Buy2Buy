// produto.js
// Carrega o produto certo com base no ?id= da URL.
// Precisa ser incluído DEPOIS de produtos-data.js no HTML.
// Não precisa mais de cor-celular.js — a troca de imagem por cor já é feita aqui.

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const produto = produtos[id];

  const infoContainer = document.querySelector(".produto-info");

  if (!produto) {
    infoContainer.innerHTML = "<h1>Produto não encontrado</h1>";
    return;
  }

  // Nome e specs
  document.getElementById("produto-nome").textContent = produto.nome;
  document.getElementById("produto-specs").textContent = produto.specs;

  // Título da aba
  document.title = `Buy2Buy | ${produto.nome}`;

  // Imagens (a primeira aparece, as outras ficam com a classe celular-hidden)
  const containerImagens = document.getElementById("imagens-container");
  containerImagens.innerHTML = "";
  produto.imagens.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = produto.nome;
    img.classList.add("celular");
    if (index !== 0) img.classList.add("celular-hidden");
    containerImagens.appendChild(img);
  });

  // Preço + botão de comprar — guardamos o estado atual (armazenamento, RAM,
  // cor e pulseira) para montar o link de compra sempre que qualquer um deles mudar.
  const precoEl = document.getElementById("preco");
  const btnComprar = document.querySelector(".btn-comprar");

  let precoAtual = produto.armazenamento[0].preco;
  let labelAtual = produto.armazenamento[0].label;
  let corIndexAtual = 0;
  let ramAtual = produto.ram ? produto.ram[0] : null;
  let pulseiraAtual = produto.pulseiras ? produto.pulseiras[0] : null;
  let imagemAtual = produto.imagens[0];

  function atualizarLinkComprar() {
    let url =
      `./buy.html?id=${id}&preco=${precoAtual}&armazenamento=${encodeURIComponent(labelAtual)}&cor=${corIndexAtual}`;
    if (ramAtual) {
      url += `&ram=${encodeURIComponent(ramAtual)}`;
    }
    if (pulseiraAtual) {
      url += `&pulseira=${encodeURIComponent(pulseiraAtual)}`;
    }
    btnComprar.href = url;
  }

  precoEl.textContent = precoAtual.toFixed(2).replace(".", ",");
  atualizarLinkComprar();

  // Botões de cor (um por imagem — funciona para qualquer marca e qualquer
  // quantidade de cores). Se o produto só tiver 1 imagem, esconde o seletor.
  const corContainer = document.querySelector(".cor-container");
  const corBloco = document.getElementById("cor-bloco");
  corContainer.innerHTML = "";
  const imagensDoProduto = containerImagens.querySelectorAll("img");

  if (produto.imagens.length > 1) {
    corContainer.style.display = "";
    if (corBloco) corBloco.style.display = "";
    produto.imagens.forEach((_, index) => {
      const corBtn = document.createElement("button");
      corBtn.classList.add("cor-celular-btn");
      if (index === 0) corBtn.classList.add("cor-ativa");
      if (produto.cores && produto.cores[index]) {
        corBtn.style.backgroundColor = produto.cores[index];
      }

      corBtn.addEventListener("click", () => {
        // Troca a imagem exibida
        imagensDoProduto.forEach((img) => img.classList.add("celular-hidden"));
        imagensDoProduto[index].classList.remove("celular-hidden");

        // Marca o botão ativo
        corContainer.querySelectorAll(".cor-celular-btn").forEach((b) => b.classList.remove("cor-ativa"));
        corBtn.classList.add("cor-ativa");

        // Atualiza o link de compra com a cor escolhida
        corIndexAtual = index;
        imagemAtual = produto.imagens[index];
        atualizarLinkComprar();
      });

      corContainer.appendChild(corBtn);
    });
  } else {
    corContainer.style.display = "none";
    if (corBloco) corBloco.style.display = "none";
  }

  // Botões de armazenamento (gerados dinamicamente)
  const storageContainer = document.getElementById("storage-options");
  storageContainer.innerHTML = "";
  produto.armazenamento.forEach((opcao, index) => {
    const btn = document.createElement("button");
    btn.classList.add("storage-btn");
    if (index === 0) btn.classList.add("active");
    btn.dataset.price = opcao.preco;
    btn.textContent = opcao.label;

    btn.addEventListener("click", () => {
      document.querySelectorAll(".storage-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      precoEl.textContent = opcao.preco.toFixed(2).replace(".", ",");

      precoAtual = opcao.preco;
      labelAtual = opcao.label;
      atualizarLinkComprar();
    });

    storageContainer.appendChild(btn);
  });

  // Botões de memória RAM (gerados dinamicamente)
  // Espera produto.ram como array de strings, ex: ["4GB", "6GB", "8GB"]
  // Se o produto não tiver essa propriedade, o seletor fica escondido.
  const ramContainer = document.getElementById("ram-options");
  if (ramContainer) {
    ramContainer.innerHTML = "";

    if (produto.ram && produto.ram.length > 0) {
      ramContainer.style.display = "";
      produto.ram.forEach((opcaoRam, index) => {
        const btn = document.createElement("button");
        btn.classList.add("ram-btn");
        if (index === 0) btn.classList.add("active");
        btn.textContent = opcaoRam;

        btn.addEventListener("click", () => {
          ramContainer.querySelectorAll(".ram-btn").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");

          ramAtual = opcaoRam;
          atualizarLinkComprar();
        });

        ramContainer.appendChild(btn);
      });
    } else {
      ramContainer.style.display = "none";
    }
  }

  // Botões de tamanho de pulseira (gerados dinamicamente)
  // Espera produto.pulseiras como array de strings, ex: ["S/M", "M/L"]
  // Usado em produtos como o Apple Watch. Se o produto não tiver essa
  // propriedade, o seletor fica escondido — igual ao de RAM.
  const pulseiraContainer = document.getElementById("pulseira-options");
  const pulseiraBloco = document.getElementById("pulseira-bloco");
  if (pulseiraContainer) {
    pulseiraContainer.innerHTML = "";

    if (produto.pulseiras && produto.pulseiras.length > 0) {
      pulseiraContainer.style.display = "";
      if (pulseiraBloco) pulseiraBloco.style.display = "";
      produto.pulseiras.forEach((opcaoPulseira, index) => {
        const btn = document.createElement("button");
        btn.classList.add("pulseira-btn");
        if (index === 0) btn.classList.add("active");
        btn.textContent = opcaoPulseira;

        btn.addEventListener("click", () => {
          pulseiraContainer.querySelectorAll(".pulseira-btn").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");

          pulseiraAtual = opcaoPulseira;
          atualizarLinkComprar();
        });

        pulseiraContainer.appendChild(btn);
      });
    } else {
      pulseiraContainer.style.display = "none";
      if (pulseiraBloco) pulseiraBloco.style.display = "none";
    }
  }

  // Descrição do produto
  document.querySelector(".texto-explicativo").innerHTML = produto.descricao;

  // Botão "Adicionar ao carrinho" — usa o estado atual (armazenamento, RAM,
  // cor e pulseira selecionados) para montar o item e salvá-lo no carrinho.
  // Depende do cart.js (precisa estar incluído antes deste arquivo no HTML).
  const btnAdicionarCarrinho = document.getElementById("btn-adicionar-carrinho");
  if (btnAdicionarCarrinho && typeof adicionarAoCarrinho === "function") {
    btnAdicionarCarrinho.addEventListener("click", () => {
      adicionarAoCarrinho({
        produtoId: id,
        nome: produto.nome,
        imagem: imagemAtual,
        armazenamento: labelAtual,
        preco: precoAtual,
        corHex: produto.cores ? produto.cores[corIndexAtual] : null,
        ram: ramAtual,
        pulseira: pulseiraAtual
      });

      // Feedback visual rápido no próprio botão
      const textoOriginal = btnAdicionarCarrinho.innerHTML;
      btnAdicionarCarrinho.disabled = true;
      btnAdicionarCarrinho.classList.add("adicionado");
      btnAdicionarCarrinho.innerHTML = `<ion-icon class="icon" name="checkmark-outline"></ion-icon> Adicionado!`;

      setTimeout(() => {
        btnAdicionarCarrinho.innerHTML = textoOriginal;
        btnAdicionarCarrinho.disabled = false;
        btnAdicionarCarrinho.classList.remove("adicionado");
      }, 1200);
    });
  }
});