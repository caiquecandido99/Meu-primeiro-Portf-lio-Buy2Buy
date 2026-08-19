// ============================================================
// C-TECH
// CATÁLOGO DE PRODUTOS
// ============================================================
//
// Este arquivo controla os produtos que aparecem em:
//
// pagina-de-produtos.html
//
// Categorias disponíveis:
//
// smartphones
// smartwatches
// fone
//
// Regra da Home:
//
// Quando a URL NÃO tem "?categoria=...",
// a página mostra automaticamente os SMARTPHONES.
//
// Para adicionar produtos futuramente,
// basta adicionar outro objeto ao array.
//
// NOVO: campo "linha" — usado para agrupar os produtos
// por linha dentro de cada marca (ex: "Pro e Pro Max",
// "17 e 16", "Linha S", "Linha Z"...). Se um produto não
// tiver "linha", ele cai no grupo "Outros".
// ============================================================


const catalogoProdutos = [

        // =========================================================
    // SAMSUNG - SMARTPHONES
    // =========================================================

    {
        id: "s26ultra",
        nome: "Galaxy S26 Ultra",
        preco: 7149.08,
        imagem: "./Assets/Galaxy S26 Ultra.jpg",
        categoria: "smartphones",
        marca: "Samsung",
        linha:  "Galaxy S"
    },

    {
        id: "s26plus",
        nome: "Galaxy S26 Plus",
        preco: 5999.00,
        imagem: "./Assets/Galaxy S26 Plus.jpg",
        categoria: "smartphones",
        marca: "Samsung",
        linha:  "Galaxy S"
    },

    {
        id: "s26",
        nome: "Galaxy S26",
        preco: 4298.00,
        imagem: "./Assets/Galaxy S26.jpg",
        categoria: "smartphones",
        marca: "Samsung",
        linha: "Galaxy S"
    },

    {
        id: "s25ultra",
        nome: "Galaxy S25 Ultra",
        preco: 5798.70,
        imagem: "./Assets/Galaxy S25 Ultra.jpg",
        categoria: "smartphones",
        marca: "Samsung",
        linha: "Galaxy S"
    },

    {
        id: "s25plus",
        nome: "Galaxy S25 Plus",
        preco: 4999.00,
        imagem: "./Assets/Galaxy S25 Plus.jpg",
        categoria: "smartphones",
        marca: "Samsung",
        linha: "Galaxy S"
    },

    {
        id: "s25",
        nome: "Galaxy S25",
        preco: 3500.00,
        imagem: "./Assets/Galaxy S25.jpg",
        categoria: "smartphones",
        marca: "Samsung",
        linha: "Galaxy S"
    },

    {
        id: "s25edge",
        nome: "Galaxy S25 Edge",
        preco: 4499.00,
        imagem: "./Assets/Galaxy S25 Edge.jpg",
        categoria: "smartphones",
        marca: "Samsung",
        linha:  "Galaxy S"
    },

    {
        id: "s25fe",
        nome: "Galaxy S25 FE",
        preco: 2998.99,
        imagem: "./Assets/Galaxy S25 FE.jpg",
        categoria: "smartphones",
        marca: "Samsung",
        linha:  "Galaxy S"
    },

     {
        id: "s24ultra",
        nome: "Galaxy S24 Ultra",
        preco: 5399.10,
        imagem: "./Assets/Galaxy S24 ultra.jpg",
        categoria: "smartphones",
        marca: "Samsung",
        linha: "Galaxy S"
    },


     {
        id: "s24fe",
        nome: "Galaxy S24 FE",
        preco: 2659.00,
        imagem: "./Assets/Galaxy S24 FE.jpg",
        categoria: "smartphones",
        marca: "Samsung",
        linha: "Galaxy S"
    },

           {
        id: "zfold8ultra",
        nome: "Galaxy Z Fold 8 ultra",
        preco: 10859.99,
        imagem: "./Assets/Galaxy z fold 8 ultra.jpg",
        categoria: "smartphones",
        marca: "Samsung",
        linha:  "Galaxy Z"
    },

    {
        id: "zfold8",
        nome: "Galaxy Z Fold 8",
        preco: 10859.99,
        imagem: "./Assets/Galaxy z fold 8.jpg",
        categoria: "smartphones",
        marca: "Samsung",
        linha:  "Galaxy Z"
    },

    {
        id: "zflip8",
        nome: "Galaxy Z Flip 8",
        preco: 10859.99,
        imagem: "./Assets/Galaxy z flip 8.jpg",
        categoria: "smartphones",
        marca: "Samsung",
        linha:  "Galaxy Z"
    },
    

      {
        id: "zfold 7",
        nome: "Galaxy Z Fold 7",
        preco: 10859.99,
        imagem: "./Assets/Galaxy z fold 7.jpg",
        categoria: "smartphones",
        marca: "Samsung",
        linha:  "Galaxy Z"
    },

      {
        id: "zflip7",
        nome: "Galaxy Z Flip 7",
        preco: 10859.99,
        imagem: "./Assets/Galaxy z flip 7.jpg",
        categoria: "smartphones",
        marca: "Samsung",
        linha:  "Galaxy Z"
    },

          {
        id: "zflipfe",
        nome: "Galaxy Z Flip 7 FE",
        preco: 10859.99,
        imagem: "./Assets/Galaxy z flip 7 FE.jpg",
        categoria: "smartphones",
        marca: "Samsung",
        linha:  "Galaxy Z"
    },

      {
        id: "zfold 6",
        nome: "Galaxy Z Fold 6",
        preco: 10859.99,
        imagem: "./Assets/Galaxy z fold 6.jpg",
        categoria: "smartphones",
        marca: "Samsung",
        linha: "Galaxy Z"
    },

    // =========================================================
    // APPLE - SMARTPHONES
    // =========================================================

    {
        id: "iph17pm",
        nome: "Iphone 17 Pro Max",
        preco: 7839.00,
        imagem: "./Assets/Iphone 17 Pro Max.jpg",
        categoria: "smartphones",
        marca: "Apple",
        linha: "Apple Iphone"
    },

    {
        id: "iph17p",
        nome: "Iphone 17 Pro",
        preco: 9776.00,
        imagem: "./Assets/Iphone 17 Pro.jpg",
        categoria: "smartphones",
        marca: "Apple",
        linha: "Apple Iphone"
    },

    {
        id: "iph17",
        nome: "Iphone 17",
        preco: 5887.78,
        imagem: "./Assets/Iphone 17.jpg",
        categoria: "smartphones",
        marca: "Apple",
        linha: "Apple Iphone"
    },

    {
        id: "iph17e",
        nome: "Iphone 17E",
        preco: 4999.00,
        imagem: "./Assets/Iphone 17E.jpg",
        categoria: "smartphones",
        marca: "Apple",
        linha:  "Apple Iphone"
    },

    {
        id: "iph17air",
        nome: "Iphone 17 Air",
        preco: 7999.00,
        imagem: "./Assets/Iphone 17 Air.jpg",
        categoria: "smartphones",
        marca: "Apple",
        linha: "Apple Iphone"
    },

    {
        id: "iph16pm",
        nome: "Iphone 16 Pro Max",
        preco: 6856.00,
        imagem: "./Assets/Iphone 16 pro Max.jpg",
        categoria: "smartphones",
        marca: "Apple",
        linha:  "Apple Iphone"
    },

    {
        id: "iph16p",
        nome: "Iphone 16 Pro",
        preco: 6300.00,
        imagem: "./Assets/Iphone 16 pro.jpg",
        categoria: "smartphones",
        marca: "Apple",
        linha: "Apple Iphone"
    },

    {
        id: "iph16pls",
        nome: "Iphone 16 Plus",
        preco: 6799.00,
        imagem: "./Assets/Iphone 16 Plus.jpg",
        categoria: "smartphones",
        marca: "Apple",
        linha:"Apple Iphone"
    },

    {
        id: "iph16",
        nome: "Iphone 16",
        preco: 3500.00,
        imagem: "./Assets/Iphone 16.jpg",
        categoria: "smartphones",
        marca: "Apple",
        linha:  "Apple Iphone"
    },

    {
        id: "iph16e",
        nome: "Iphone 16E",
        preco: 3499.00,
        imagem: "./Assets/Iphone 16E.jpg",
        categoria: "smartphones",
        marca: "Apple",
        linha: "Apple Iphone"
    },

        {
        id: "iph15pm",
        nome: "Iphone 15 Pro Max",
        preco: 3499.00,
        imagem: "./Assets/Iphone 15 pro Max.jpg",
        categoria: "smartphones",
        marca: "Apple",
        linha:  "Apple Iphone"
    },

        {
        id: "iph15p",
        nome: "Iphone 15 Pro",
        preco: 3499.00,
        imagem: "./Assets/Iphone 15 pro.jpg",
        categoria: "smartphones",
        marca: "Apple",
        linha:  "Apple Iphone"
    },





    // =========================================================
    // SMARTWATCHES
    // =========================================================

     {
        id: "galaxywatchultra2",
        nome: "Galaxy Watch Ultra 2",
        preco: 8222.00,
        imagem: "./Assets/Galaxy watch ultra 2.jpg",
        categoria: "smartwatches",
        marca: "Samsung",
        linha: "Galaxy Watch"
    },

    {
        id: "galaxywatch9",
        nome: "Galaxy Watch 9",
        preco: 8222.00,
        imagem: "./Assets/Galaxy watch 9.jpg",
        categoria: "smartwatches",
        marca: "Samsung",
        linha: "Galaxy Watch"
    },

    {
        id: "galaxywatch8classic",
        nome: "Galaxy Watch Classic",
        preco: 8222.00,
        imagem: "./Assets/Galaxy watch 8 classic.jpg",
        categoria: "smartwatches",
        marca: "Samsung",
        linha: "Galaxy Watch"
    },

    {
        id: "galaxywatch8",
        nome: "Galaxy Watch 8",
        preco: 8222.00,
        imagem: "./Assets/Galaxy watch 8.jpg",
        categoria: "smartwatches",
        marca: "Samsung",
        linha: "Galaxy Watch"
    },

    {
        id: "galaxywatchultra",
        nome: "Galaxy Watch Ultra",
        preco: 8222.00,
        imagem: "./Assets/Galaxy watch ultra.jpg",
        categoria: "smartwatches",
        marca: "Samsung",
        linha: "Galaxy Watch"
    },

    {
        id: "galaxywatch7",
        nome: "Galaxy Watch 7",
        preco: 8222.00,
        imagem: "./Assets/Galaxy watch 7.jpg",
        categoria: "smartwatches",
        marca: "Samsung",
        linha: "Galaxy Watch"
    },

    {
        id: "awatchultra3",
        nome: "Apple Watch Ultra 3",
        preco: 8222.00,
        imagem: "./Assets/apple watch ultra 3.jpg",
        categoria: "smartwatches",
        marca: "Apple",
        linha: "Apple Watch"
    },

        {
        id: "awatchultra2",
        nome: "Apple Watch Ultra 2",
        preco: 8222.00,
        imagem: "./Assets/apple watch ultra 2.jpg",
        categoria: "smartwatches",
        marca: "Apple",
        linha: "Apple Watch"
    },

    {
        id: "awatchs11",
        nome: "Apple Watch Series 11",
        preco: 8222.00,
        imagem: "./Assets/apple watch series 11.jpg",
        categoria: "smartwatches",
        marca: "Apple",
        linha: "Apple Watch"
    },

    {
        id: "awatchs10",
        nome: "Apple Watch Series 10",
        preco: 8222.00,
        imagem: "./Assets/apple watch series 10.jpg",
        categoria: "smartwatches",
        marca: "Apple",
        linha: "Apple Watch"
    },

        {
        id: "awatchs9",
        nome: "Apple Watch Series 9",
        preco: 8222.00,
        imagem: "./Assets/apple watch series 9.jpg",
        categoria: "smartwatches",
        marca: "Apple",
             linha:"Apple Watch"
        },

    {
        id: "awatchse3",
        nome: "Apple Watch SE3",
        preco: 8222.00,
        imagem: "./Assets/apple watch se3.jpg",
        categoria: "smartwatches",
        marca: "Apple",
        linha: "Apple Watch"
    },




     // =========================================================
    // FONES
    // =========================================================
       {
        id: "airpods3pro",
        nome: "Airpods 3 pro",
        preco: 8222.00,
        imagem: "./Assets/airpods pro 3.jpg",
        categoria: "fone",
        marca: "Apple",
        linha: "AirPods"
    },

     {
        id: "airpods3",
        nome: "Airpods 3",
        preco: 8222.00,
        imagem: "./Assets/airpods 3.jpg",
        categoria: "fone",
        marca: "Apple",
        linha: "AirPods"
    },

     {
        id: "airpods4",
        nome: "Airpods 4",
        preco: 8222.00,
        imagem: "./Assets/airpods 4.jpg",
        categoria: "fone",
        marca: "Apple",
        linha: "AirPods"
    },

     {
        id: "gbuds3pro",
        nome: "Galaxy Buds 3 pro",
        preco: 8222.00,
        imagem: "./Assets/Galaxy buds 3 pro.jpg",
        categoria: "fone",
        marca: "Samsung",
        linha: "Galaxy Buds"
    },

         {
        id: "gbuds3",
        nome: "Galaxy Buds 3",
        preco: 8222.00,
        imagem: "./Assets/Galaxy buds 3.jpg",
        categoria: "fone",
        marca: "Samsung",
        linha: "Galaxy Buds"
    },

         {
        id: "gbudscore",
        nome: "Galaxy Buds core",
        preco: 8222.00,
        imagem: "./Assets/Galaxy buds core.jpg",
        categoria: "fone",
        marca: "Samsung",
        linha: "Galaxy Buds"
    },
    
    
    
    
    
    


    // =========================================================
    // FUTUROS FONES
    // =========================================================
    //
    // Exemplo:
    //
    // {
    //     id: "fone01",
    //     nome: "Nome do Fone Bluetooth",
    //     preco: 499.90,
    //     imagem: "./Assets/fone.jpg",
    //     categoria: "fone",
    //     marca: "Samsung",
    //     linha: "Galaxy Buds"
    // }

];



// ============================================================
// ORDEM DE EXIBIÇÃO (marcas e linhas)
// ============================================================
//
// Controla em que ordem as marcas e as linhas aparecem na
// página. Qualquer marca/linha que não esteja nessas listas
// simplesmente aparece depois, em ordem alfabética — não
// precisa editar isso ao adicionar produto novo, só se quiser
// controlar a posição exata dele.
// ============================================================

const ordemMarcas = ["Samsung", "Apple" ];

const ordemLinhas = {
     Samsung: ["Galaxy S", "Galaxy Z", "Galaxy Watch", "Galaxy Buds"],
    Apple: ["Apple Iphone", "Apple Watch", "AirPods"]
};

// Linhas que têm muitos produtos e por isso viram um carrossel
// horizontal (rolagem lateral) em vez de quebrar linha.

const linhasEmCarrossel = ["Apple Iphone", "Outros modelos", "Galaxy S", "Galaxy Z"];

// Em telas pequenas (celular/tablet) o carrossel vira grade normal,
// igual as outras seções — mesmo ponto de quebra usado no resto
// do site (896px).

const LARGURA_MINIMA_CARROSSEL = 896;

function ehLinhaEmCarrossel(linha) {
    return (
        linhasEmCarrossel.includes(linha) &&
        window.innerWidth > LARGURA_MINIMA_CARROSSEL
    );
}



// ============================================================
// ELEMENTOS DO HTML
// ============================================================

const produtosContainer =
    document.getElementById("produtos-container");

const campoPesquisa =
    document.getElementById("search");



// ============================================================
// PEGA A CATEGORIA DA URL
// ============================================================
//
// Exemplos:
//
// pagina-de-produtos.html?categoria=smartphones
//
// pagina-de-produtos.html?categoria=smartwatches
//
// pagina-de-produtos.html?categoria=fone
//
// pagina-de-produtos.html   -> mostra smartphones (Home)
//
// ============================================================

const parametros =
    new URLSearchParams(window.location.search);

const categoriaSelecionada =
    parametros.get("categoria");



// ============================================================
// FORMATAR PREÇO
// ============================================================

function formatarPreco(preco) {

    return preco.toLocaleString(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    );

}



// ============================================================
// INFORMAÇÕES ESTILO AMAZON (opções, avaliação, parcelamento,
// entrega e estoque) — geradas de forma determinística a
// partir do id do produto, pra não ficar mudando a cada
// renderização.
// ============================================================

function hashCodeIntoNumero(texto) {

    let hash = 0;

    for (let i = 0; i < texto.length; i++) {
        hash = (hash << 5) - hash + texto.charCodeAt(i);
        hash |= 0;
    }

    return Math.abs(hash);

}


function criarEstrelasHTML(rating) {

    const cheias = Math.round(rating);

    let html = "";

    for (let i = 1; i <= 5; i++) {

        html += i <= cheias
            ? `<ion-icon name="star"></ion-icon>`
            : `<ion-icon name="star-outline"></ion-icon>`;

    }

    return html;

}


function gerarInfoAmazon(produto) {

    const seed = hashCodeIntoNumero(produto.id);

    // Opções (tamanhos para telefones/relógios, cores para fones)
    const qtdOpcoes = 2 + (seed % 3); // 2 a 4
    const tipoOpcao = produto.categoria === "fone" ? "cores" : "tamanhos";

    // Avaliação (4,3 a 4,9) e número de avaliações
    const rating = 4.3 + ((seed % 7) / 10);
    const numAvaliacoes = 50 + (seed % 1950);

    // Estoque (1 a 15 unidades)
    const estoque = 1 + (seed % 15);

    // Entrega grátis: hoje + 2 a 5 dias úteis
    const diasEntrega = 2 + (seed % 4);
    const dataEntrega = new Date();
    dataEntrega.setDate(dataEntrega.getDate() + diasEntrega);

    const dataEntregaTexto = dataEntrega.toLocaleDateString(
        "pt-BR",
        {
            weekday: "short",
            day: "numeric",
            month: "short"
        }
    );

    return {
        opcoesTexto: `${qtdOpcoes} ${tipoOpcao}`,
        rating: rating,
        ratingTexto: rating.toFixed(1).replace(".", ","),
        numAvaliacoes: numAvaliacoes,
        estoqueTexto: estoque === 1
            ? "Somente 1 em estoque."
            : `Somente ${estoque} em estoque.`,
        dataEntregaTexto: dataEntregaTexto,
        parcelaTexto: formatarPreco(produto.preco / 12)
    };

}



// ============================================================
// CRIAR UM CARD DE PRODUTO
// ============================================================

function criarCardProduto(produto) {

    const card =
        document.createElement("div");

    card.classList.add("card-celular");

    card.dataset.categoria =
        produto.categoria;

    const infoAmazon =
        gerarInfoAmazon(produto);

    card.innerHTML = `

        <a
            href="./produto.html?id=${produto.id}"
            class="celular-link"
        >

            <img
                src="${produto.imagem}"
                alt="${produto.nome}"
                class="celular"
            >

        </a>


        <h1>
            ${produto.nome}
        </h1>


        <div class="card-info-amazon">

            <p class="opcoes-info">
                Opções: <strong>${infoAmazon.opcoesTexto}</strong>
            </p>

            <p class="rating-info">
                <span class="estrelas">${criarEstrelasHTML(infoAmazon.rating)}</span>
                ${infoAmazon.ratingTexto} de 5 estrelas
                <span class="rating-count">(${infoAmazon.numAvaliacoes})</span>
            </p>

            <p class="preco-label">
                Preço, página do produto
            </p>

            <p class="preco-principal">
                ${formatarPreco(produto.preco)}
            </p>

            <p class="parcelamento-info">
                em até 12x de ${infoAmazon.parcelaTexto} sem juros
            </p>

            <p class="entrega-info">
                Entrega <strong>GRÁTIS</strong>: ${infoAmazon.dataEntregaTexto}
            </p>

            <p class="estoque-info">
                ${infoAmazon.estoqueTexto}
            </p>

        </div>

    `;


    // Botão "Comprar" — leva direto para a página do produto,
    // onde o cliente escolhe as opções (armazenamento/cor) antes
    // de seguir para o pagamento.

    const btnComprar =
        document.createElement("a");

    btnComprar.href = `./produto.html?id=${produto.id}`;
    btnComprar.classList.add("btn-comprar-card");
    btnComprar.innerHTML =
        `<ion-icon name="flash-outline"></ion-icon> Comprar`;

    card.appendChild(btnComprar);


    // Botão "Adicionar ao carrinho" — usa as funções globais
    // do cart.js já usadas na página do produto. Depois de
    // adicionar, o botão vira "Remover do carrinho"; clicando
    // nele de novo, remove o item e volta ao estado normal.

    const btnCarrinho =
        document.createElement("button");

    btnCarrinho.type = "button";
    btnCarrinho.classList.add("btn-add-carrinho");

    // Estado inicial: se esse produto já estiver no carrinho
    // salvo (pode ter sido adicionado antes de pesquisar/filtrar,
    // o que recria os cards do zero), o botão já nasce como
    // "Remover do carrinho" em vez de perder essa informação.

    let cartIdAtual = null;

    if (typeof getCarrinho === "function") {

        const itemNoCarrinho =
            getCarrinho().find(
                (item) => item.produtoId === produto.id
            );

        if (itemNoCarrinho) {
            cartIdAtual = itemNoCarrinho.cartId;
        }

    }

    function atualizarVisualBotao() {

        if (cartIdAtual) {
            btnCarrinho.classList.add("adicionado");
            btnCarrinho.innerHTML =
                `<ion-icon name="trash-outline"></ion-icon> Remover do carrinho`;
        } else {
            btnCarrinho.classList.remove("adicionado");
            btnCarrinho.innerHTML =
                `<ion-icon name="cart-outline"></ion-icon> Adicionar ao carrinho`;
        }

    }

    atualizarVisualBotao();

    btnCarrinho.addEventListener("click", (evento) => {

        evento.preventDefault();
        evento.stopPropagation();

        // Ainda não está no carrinho -> adiciona
        if (!cartIdAtual) {

            if (typeof adicionarAoCarrinho !== "function") {
                return;
            }

            const itemAdicionado = adicionarAoCarrinho({
                produtoId: produto.id,
                nome: produto.nome,
                imagem: produto.imagem,
                armazenamento: null,
                preco: produto.preco,
                corHex: null,
                ram: null,
                pulseira: null
            });

            cartIdAtual = itemAdicionado.cartId;

            atualizarVisualBotao();

            return;
        }

        // Já está no carrinho -> remove e volta ao normal
        if (typeof removerDoCarrinho === "function") {
            removerDoCarrinho(cartIdAtual);
        }

        cartIdAtual = null;

        atualizarVisualBotao();

    });

    card.appendChild(btnCarrinho);


    return card;

}



// ============================================================
// CARROSSEL — ESTILO AMAZON
// ============================================================
//
// No desktop, as linhas configuradas em "linhasEmCarrossel"
// usam um carrossel horizontal com setas sobrepostas.
//
// Em tablet/celular (até 896px), o carrossel NÃO é montado:
// a linha volta a ser uma grade normal, como as demais.
//
// ============================================================

function injetarEstiloCarrossel() {

    if (document.getElementById("estilo-carrossel-ctech")) {
        return;
    }

    const estilo = document.createElement("style");
    estilo.id = "estilo-carrossel-ctech";

    estilo.textContent = `

        /* =====================================================
           CONTAINER PRINCIPAL
        ===================================================== */

        #produtos-container {
            row-gap: 0 !important;
            gap: 0 !important;
        }

        #produtos-container .titulo-marca {
            margin-bottom: 0 !important;
        }

        #produtos-container .titulo-linha {
            margin-top: 3px !important;
        }

        #produtos-container .imagem-container {
            margin-top: 0 !important;
        }

        .carrossel-wrapper {
            width: 100%;
            position: relative;
            display: flex;
            align-items: center;
            box-sizing: border-box;
            overflow: hidden;
        }


        /* =====================================================
           TRILHO DOS PRODUTOS
        ===================================================== */

        .trilho-carrossel {
            width: 100%;
            display: flex !important;
            flex-wrap: nowrap !important;

            overflow-x: auto;
            overflow-y: hidden;

            scroll-behavior: smooth;
            scroll-snap-type: x proximity;

            gap: 16px;

            padding: 0 20px 10px 20px;

            box-sizing: border-box;

            -ms-overflow-style: none;
            scrollbar-width: none;
        }


        .trilho-carrossel::-webkit-scrollbar {
            display: none;
        }


        /* =====================================================
           CARD DENTRO DO CARROSSEL
        ===================================================== */

        .trilho-carrossel .card-celular {
            flex: 0 0 240px;
            width: 240px;
            scroll-snap-align: start;
            box-sizing: border-box;
            margin: 0;
        }

        .trilho-carrossel .card-celular h1 {
            margin-top: 6px;
            margin-bottom: 2px;
            line-height: 1.1;
        }

        .trilho-carrossel .card-celular p {
            margin-top: 2px;
            margin-bottom: 0;
            line-height: 1.1;
        }


        /* =====================================================
           SETAS ESTILO AMAZON
        ===================================================== */

        .seta-carrossel {
            position: absolute;

            top: 50%;
            transform: translateY(-50%);

            z-index: 20;

            width: 46px;
            height: 70px;

            padding: 0;

            border: 1px solid #d5d9d9;
            border-radius: 7px;

            background: rgba(255, 255, 255, 0.96);

            color: #111;

            display: none;
            align-items: center;
            justify-content: center;

            cursor: pointer;

            font-size: 26px;

            box-shadow:
                0 2px 5px rgba(15, 17, 17, 0.15);

            transition:
                box-shadow 0.2s ease,
                background 0.2s ease;
        }


        .seta-carrossel:hover {
            background: #ffffff;

            box-shadow:
                0 0 0 3px rgba(0, 113, 133, 0.35),
                0 2px 5px rgba(15, 17, 17, 0.15);
        }


        .seta-carrossel-esquerda {
            left: 5px;
        }


        .seta-carrossel-direita {
            right: 5px;
        }


        .seta-carrossel ion-icon {
            pointer-events: none;
        }


        /* =====================================================
           CARD/BADGE DO TÍTULO DA LINHA
           -----------------------------------------------------
           Antes o título da linha (ex: "Galaxy S") era um texto
           simples. Agora vira um "card" — um selo arredondado
           com fundo escuro e sombra — e ganha mais respiro
           acima e abaixo.
        ===================================================== */

        .titulo-linha-card {
            display: inline-block;
            width: fit-content;

            margin: 18px auto 22px auto;
            padding: 10px 26px;

            background: #111;
            color: #fff;

            font-size: 16px;
            font-weight: 700;
            letter-spacing: 0.5px;
            text-transform: uppercase;

            border-radius: 999px;

            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.18);

            text-align: center;
        }


        /* =====================================================
           DESCRIÇÃO ESTILO AMAZON
           -----------------------------------------------------
           Bloco com opções, avaliação, preço, parcelamento,
           entrega e estoque — fica entre o nome do produto e
           os botões "Comprar" / "Adicionar ao carrinho".
        ===================================================== */

        .card-info-amazon {
            width: 100%;
            box-sizing: border-box;
            text-align: left;
            margin: 4px 0 10px 0;
        }

        .card-info-amazon p {
            display: block;
            padding: 0;
            margin: 2px 0;
            font-size: 13px;
            line-height: 1.4;
            text-align: left;
            color: #565959;
        }

        .card-info-amazon .rating-info {
            display: flex;
            align-items: center;
            gap: 4px;
            flex-wrap: wrap;
        }

        .card-info-amazon .estrelas {
            display: inline-flex;
            color: #ffa41c;
            font-size: 14px;
        }

        .card-info-amazon .rating-count {
            color: #007185;
        }

        .card-info-amazon .preco-label {
            margin-top: 6px;
            font-size: 12px;
        }

        .card-info-amazon .preco-principal {
            font-size: 20px;
            font-weight: 700;
            color: #0f1111;
        }

        .card-info-amazon .entrega-info strong {
            color: #007600;
        }


        /* =====================================================
           BOTÃO "COMPRAR"
           -----------------------------------------------------
           Fica acima do "Adicionar ao carrinho", com destaque
           visual mais forte (preenchido em preto).
        ===================================================== */

        .btn-comprar-card {
            width: 100%;
            box-sizing: border-box;
            margin-top: 6px;
            padding: 10px 16px;
            border: none;
            border-radius: 999px;
            background: #111;
            color: #fff;
            font-size: 14px;
            font-weight: 700;
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            cursor: pointer;
            transition: background 0.2s ease, transform 0.2s ease;
        }

        .btn-comprar-card:hover {
            background: #333;
            transform: scale(1.02);
        }


        /* =====================================================
           TABLET E CELULAR
           SEM CARROSSEL
        ===================================================== */

        @media (max-width: 896px) {

            .carrossel-wrapper {
                display: block;
                overflow: visible;
            }

            .trilho-carrossel {
                display: flex !important;
                flex-wrap: wrap !important;

                overflow: visible !important;

                justify-content: center !important;

                scroll-snap-type: none;

                padding: 0 0 6px 0;

                gap: 14px;
            }


            .trilho-carrossel .card-celular {
                flex: initial;
                width: auto;
                scroll-snap-align: none;
            }


            .seta-carrossel {
                display: none !important;
            }

            .titulo-linha-card {
                margin: 14px auto 18px auto;
                padding: 8px 20px;
                font-size: 14px;
            }

        }

    `;

    document.head.appendChild(estilo);

}



// ============================================================
// CARROSSEL — CRIAR SETA DE NAVEGAÇÃO
// ============================================================

function criarSetaCarrossel(lado) {

    const seta =
        document.createElement("button");

    seta.type = "button";

    seta.classList.add(
        "seta-carrossel",
        lado === "esquerda"
            ? "seta-carrossel-esquerda"
            : "seta-carrossel-direita"
    );

    seta.setAttribute(
        "aria-label",
        lado === "esquerda"
            ? "Ver produtos anteriores"
            : "Ver próximos produtos"
    );


    seta.innerHTML =
        lado === "esquerda"
            ? `<ion-icon name="chevron-back-outline"></ion-icon>`
            : `<ion-icon name="chevron-forward-outline"></ion-icon>`;


    return seta;

}



// ============================================================
// CARROSSEL — MONTAR TRILHO + SETAS
// ============================================================

function montarCarrossel(trilho) {

    injetarEstiloCarrossel();


    const wrapper =
        document.createElement("div");

    wrapper.classList.add("carrossel-wrapper");
    wrapper.style.margin = "0";
    wrapper.style.paddingTop = "0";


    const setaEsquerda =
        criarSetaCarrossel("esquerda");

    const setaDireita =
        criarSetaCarrossel("direita");


    wrapper.appendChild(trilho);
    wrapper.appendChild(setaEsquerda);
    wrapper.appendChild(setaDireita);



    // ========================================================
    // QUANTO O CARROSSEL ANDA
    // ========================================================

    function quantidadeScroll() {

        return trilho.clientWidth * 0.85;

    }



    setaEsquerda.addEventListener("click", () => {

        trilho.scrollBy({

            left: -quantidadeScroll(),

            behavior: "smooth"

        });

    });



    setaDireita.addEventListener("click", () => {

        trilho.scrollBy({

            left: quantidadeScroll(),

            behavior: "smooth"

        });

    });



    // ========================================================
    // MOSTRAR / ESCONDER SETAS
    // ========================================================

    function atualizarSetas() {

        // Em celular/tablet não existe carrossel.

        if (window.innerWidth <= LARGURA_MINIMA_CARROSSEL) {

            setaEsquerda.style.display = "none";
            setaDireita.style.display = "none";

            return;

        }


        const precisaRolar =
            trilho.scrollWidth > trilho.clientWidth + 2;


        if (!precisaRolar) {

            setaEsquerda.style.display = "none";
            setaDireita.style.display = "none";

            trilho.style.justifyContent = "center";

            return;

        }


        trilho.style.justifyContent = "flex-start";


        const inicio =
            trilho.scrollLeft <= 5;


        const final =
            trilho.scrollLeft +
            trilho.clientWidth >=
            trilho.scrollWidth - 5;


        setaEsquerda.style.display =
            inicio ? "none" : "flex";


        setaDireita.style.display =
            final ? "none" : "flex";

    }



    trilho.addEventListener(
        "scroll",
        atualizarSetas
    );


    window.addEventListener(
        "resize",
        atualizarSetas
    );



    requestAnimationFrame(
        atualizarSetas
    );



    // ========================================================
    // ARRASTAR COM MOUSE
    // ========================================================

    let arrastando = false;
    let posicaoInicialX = 0;
    let scrollInicial = 0;



    trilho.style.cursor = "grab";



    trilho.addEventListener(
        "mousedown",
        (evento) => {

            if (window.innerWidth <= LARGURA_MINIMA_CARROSSEL) {
                return;
            }


            arrastando = true;

            trilho.style.cursor =
                "grabbing";


            posicaoInicialX =
                evento.pageX;


            scrollInicial =
                trilho.scrollLeft;

        }
    );



    window.addEventListener(
        "mouseup",
        () => {

            arrastando = false;

            trilho.style.cursor =
                "grab";

        }
    );



    trilho.addEventListener(
        "mouseleave",
        () => {

            arrastando = false;

            trilho.style.cursor =
                "grab";

        }
    );



    trilho.addEventListener(
        "mousemove",
        (evento) => {

            if (!arrastando) {
                return;
            }


            evento.preventDefault();


            const movimento =
                evento.pageX -
                posicaoInicialX;


            trilho.scrollLeft =
                scrollInicial -
                movimento;

        }
    );


    return wrapper;

}



// ============================================================
// ORDENA UMA LISTA DE CHAVES SEGUINDO UMA ORDEM DE PRIORIDADE
// ============================================================
//
// Chaves que estão em "ordemPrioridade" aparecem primeiro
// (na ordem em que estão nesse array). Qualquer chave que
// não esteja na lista vai depois, em ordem alfabética.
// ============================================================

function ordenarPorPrioridade(chaves, ordemPrioridade) {

    return chaves.sort((a, b) => {

        const indiceA = ordemPrioridade.indexOf(a);
        const indiceB = ordemPrioridade.indexOf(b);

        if (indiceA === -1 && indiceB === -1) {
            return a.localeCompare(b);
        }

        if (indiceA === -1) return 1;
        if (indiceB === -1) return -1;

        return indiceA - indiceB;

    });

}



// ============================================================
// CRIAR OS CARDS — AGORA AGRUPADOS POR MARCA E LINHA
// ============================================================

function mostrarProdutos(lista) {

    produtosContainer.innerHTML = "";

    // Compacta toda a área do catálogo.
    // Importante: o CSS principal pode ter "gap" no #produtos-container,
    // então zeramos aqui para Apple, linha e produtos não ficarem distantes.
    produtosContainer.style.paddingTop = "215px";
    produtosContainer.style.rowGap = "0";
    produtosContainer.style.columnGap = "0";
    produtosContainer.style.gap = "0";


    // Nenhum produto encontrado

    if (lista.length === 0) {

        produtosContainer.innerHTML = `
            <div class="produto-nao-encontrado">

                <h2>
                    Nenhum produto encontrado.
                </h2>

            </div>
        `;

        return;
    }


    // Agrupa os produtos por marca e, dentro de cada marca,
    // por linha (produto.linha). Produto sem "linha" cai
    // no grupo "Outros".

    const grupos = {};

    lista.forEach(produto => {

        const marca = produto.marca || "Outros";
        const linha = produto.linha || "Outros";

        if (!grupos[marca]) {
            grupos[marca] = {};
        }

        if (!grupos[marca][linha]) {
            grupos[marca][linha] = [];
        }

        grupos[marca][linha].push(produto);

    });


    const marcasOrdenadas =
        ordenarPorPrioridade(Object.keys(grupos), ordemMarcas);


    marcasOrdenadas.forEach(marca => {

        // Garante que o CSS do card de linha já esteja disponível
        // mesmo em seções sem carrossel.
        injetarEstiloCarrossel();

        // Título da marca (ex: "Apple", "Samsung")

        const tituloMarca =
            document.createElement("h1");

        tituloMarca.textContent = marca;
        tituloMarca.classList.add("titulo-marca");
        tituloMarca.style.cssText =
            "width:100%; margin:40px 0 4px 0; padding:0 10px; font-size:30px; font-weight:800; text-align:center; line-height:1.1; letter-spacing:0.5px;";

        produtosContainer.appendChild(tituloMarca);


        const linhasDaMarca = grupos[marca];

        const ordemLinhasDaMarca =
            ordemLinhas[marca] || [];

        const linhasOrdenadas =
            ordenarPorPrioridade(
                Object.keys(linhasDaMarca),
                ordemLinhasDaMarca
            );


        linhasOrdenadas.forEach(linha => {

            // Título da linha (ex: "Pro e Pro Max", "Linha S")
            // Agora com visual de card/badge (ver .titulo-linha-card
            // injetado por injetarEstiloCarrossel).

            const tituloLinha =
                document.createElement("h2");

            tituloLinha.textContent = linha;
            tituloLinha.classList.add("titulo-linha", "titulo-linha-card");

            produtosContainer.appendChild(tituloLinha);


            // Grade de produtos dessa linha

            const gradeLinha =
                document.createElement("div");

            gradeLinha.classList.add("imagem-container");
            gradeLinha.style.padding = "0 0 4px 0";
            gradeLinha.style.margin = "0";
            gradeLinha.style.marginTop = "0";

            if (ehLinhaEmCarrossel(linha)) {

                // Desktop: carrossel horizontal no estilo Amazon.
                gradeLinha.classList.add("trilho-carrossel");

                gradeLinha.style.display = "flex";
                gradeLinha.style.flexWrap = "nowrap";

                gradeLinha.style.overflowX = "auto";
                gradeLinha.style.overflowY = "hidden";

                gradeLinha.style.justifyContent = "flex-start";

                gradeLinha.style.gap = "16px";

                gradeLinha.style.padding = "0 20px 10px 20px";

                gradeLinha.style.scrollBehavior = "smooth";

                gradeLinha.style.webkitOverflowScrolling = "touch";

            } else {

                // Tablet/celular e linhas comuns:
                // grade normal, sem rolagem lateral e sem setas.
                gradeLinha.style.display = "flex";
                gradeLinha.style.flexWrap = "wrap";
                gradeLinha.style.overflow = "visible";
                gradeLinha.style.justifyContent = "center";
                gradeLinha.style.gap = "16px";

            }

            linhasDaMarca[linha].forEach(produto => {
                const card = criarCardProduto(produto);

                if (ehLinhaEmCarrossel(linha)) {
                    card.style.flex = "0 0 auto";
                }

                gradeLinha.appendChild(card);
            });

            if (ehLinhaEmCarrossel(linha)) {

                const carrosselMontado =
                    montarCarrossel(gradeLinha);

                carrosselMontado.style.marginBottom = "30px";

                produtosContainer.appendChild(
                    carrosselMontado
                );

            } else {

                gradeLinha.style.marginBottom = "30px";

                produtosContainer.appendChild(
                    gradeLinha
                );

            }

        });

    });

}



// ============================================================
// FILTRAR PELA NAVBAR
// ============================================================
//
// Se a URL tiver "?categoria=...", usa essa categoria.
//
// Se NÃO tiver (ou seja, é a Home), mostra os
// SMARTPHONES por padrão — o smartwatch só aparece
// quando o usuário clicar em "Smartwatches" no menu.
//
// ============================================================

function carregarCategoria() {

    const categoriaAtual =
        categoriaSelecionada || "smartphones";


    // "todos" mostra o catálogo inteiro,
    // sem filtrar por categoria

    const produtosFiltrados =
        categoriaAtual === "todos"
            ? catalogoProdutos
            : catalogoProdutos.filter(produto =>

                produto.categoria === categoriaAtual

            );

    mostrarProdutos(produtosFiltrados);

}



// ============================================================
// PESQUISA
// ============================================================

campoPesquisa.addEventListener(
    "input",
    () => {

        const texto =
            campoPesquisa.value
                .toLowerCase()
                .trim();


        const categoriaAtual =
            categoriaSelecionada || "smartphones";


        let produtosFiltrados =
            categoriaAtual === "todos"
                ? catalogoProdutos
                : catalogoProdutos.filter(produto =>

                    produto.categoria === categoriaAtual

                );


        // Depois pesquisa dentro da categoria atual

        produtosFiltrados =
            produtosFiltrados.filter(produto =>

                produto.nome
                    .toLowerCase()
                    .includes(texto)

                ||

                produto.marca
                    .toLowerCase()
                    .includes(texto)

            );


        mostrarProdutos(produtosFiltrados);

    }
);



// ============================================================
// CARREGA A PÁGINA
// ============================================================

carregarCategoria();