// produtos-data.js
// Cada chave é o "id" que vai na URL: produto.html?id=iph17pm
// Adicione um novo objeto aqui para cada celular novo — não precisa criar HTML novo.
//
// OBS: os produtos abaixo que vieram só do index.html têm apenas 1 opção de
// armazenamento (com o preço que já estava no card) e uma descrição genérica.
// Edite à vontade para colocar specs reais, mais fotos e mais opções de armazenamento.
//
// RAM: adicionei o campo "ram" em cada celular com o valor que já estava
// escrito em "specs". Hoje é só 1 opção por produto — se algum modelo tiver
// mais de uma configuração de RAM de verdade, é só colocar mais itens no array,
// ex: ram: ["8GB", "12GB"].
//
// PULSEIRAS: campo novo "pulseiras", usado só em produtos tipo Apple Watch.
// É um array de strings com os tamanhos disponíveis. Produtos sem esse campo
// simplesmente não mostram o seletor de pulseira (igual já acontece com RAM).

const produtos = {

  // ---------------------- IPHONE ----------------------
    // ---------------------- SMARTPHONES  ----------------------
    // ---------------------- LINHA 17 ----------------------

  "iph17pm": {
    nome: "Iphone 17 Pro Max 5G",
    specs: "256GB 12GB RAM 6.9",
    imagens: [
      "./Assets/Iphone 17 pro Max.jpg",
      "./Assets/Iphone 17 pro Max azul.jpg",
      "./Assets/Iphone 17 pro Max cinza.jpg"
    ],
    cores: ["#d9722c", "#233a5e", "#c7c7cc"],
    ram: ["12GB"],
    armazenamento: [
      { label: "256GB", preco: 7839.00 },
      { label: "512GB", preco: 9339.00 },
      { label: "1TB",   preco: 13099.00 },
      { label: "2TB",   preco: 15749.00 }
    ],
    descricao: `
      <b>Design unibody em alumínio:</b> Construção premium em alumínio forjado, oferecendo maior resistência, leveza e acabamento sofisticado.<br/>
      <b>Ceramic Shield ultrarresistente:</b> Proteção Ceramic Shield na parte traseira, até 4x mais resistente a quedas.<br/>
      <b>Sistema de câmaras Pro:</b> Conjunto de câmaras traseiras de 48 MP com zoom ótico de até 8x.<br/>
      <b>Processador A19 Pro:</b> Chip de alto desempenho com sistema de arrefecimento por evaporação.<br/>
      <b>Bateria de longa duração:</b> Autonomia para o dia inteiro mesmo com uso intenso de câmera e tela ligada.<br/>
      <b>Tela ProMotion 120Hz:</b> Rolagem mais fluida e resposta imediata ao toque.<br/>
    `
  },

  "iph17p": {
    nome: "Iphone 17 Pro 5G",
    specs: "256GB 8GB RAM 6.3",
    imagens: [ 
      "./Assets/Iphone 17 Pro.jpg",
      "./assets/Iphone 17 Pro laranja.jpg",
      "./assets/Iphone 17 Pro cinza.jpg"

    ],
    cores: ["#233a5e", "#d9722c", "#c7c7cc"],
    ram: ["8GB"],
    armazenamento: [
      {label: "256GB", preco: 9776.00 },
      {label: "512GB", preco: 10879.00 },
      {label: "1TB", preco: 12599.00 }
    ],
    descricao: `
      <b>Design em titânio:</b> Leve, resistente e com acabamento premium.<br/>
      <b>Câmera Pro:</b> Sistema triplo de câmaras com zoom óptico avançado.<br/>
      <b>Tela ProMotion 120Hz:</b> Rolagem mais fluida e melhor resposta ao toque.<br/>
      <b>Face ID avançado:</b> Desbloqueio seguro e rápido mesmo em ambientes escuros.<br/>
      <b>Gravação em vídeo profissional:</b> Suporte a ProRes e formatos usados em produções cinematográficas.<br/>
    `
  },

  "iph17": {
    nome: "Iphone 17",
    specs: "128GB 6GB RAM 6.1",
    imagens: [ 
      "./Assets/Iphone 17.jpg",
      "./assets/Iphone 17 azul.jpg",
      "./assets/Iphone 17 verde.jpg",
      "./assets/Iphone 17 branco.jpg",
      "./assets/Iphone 17 preto.jpg"
    ],
    cores: ["#f1e4f5","#b7c7de",  "#c6d0ab" , "#f6f6f4" , "#6b6b6b"],
    ram: ["6GB"],
    armazenamento: [
      { label: "256GB", preco: 5887.78 },
      { label: "512GB", preco: 7199.00 },
    ],
    descricao: `
      <b>Chip A18:</b> Alto desempenho para o dia a dia e jogos.<br/>
      <b>Câmera dupla de 48MP:</b> Fotos e vídeos com qualidade profissional.<br/>
      <b>Tela Ceramic Shield:</b> Resistente a arranhões e quedas do dia a dia.<br/>
      <b>5G rápido:</b> Downloads e streaming sem travar mesmo fora de casa.<br/>
      <b>Cinco cores disponíveis:</b> Acabamento fosco em tons variados pra combinar com o seu estilo.<br/>
    `
  },

  "iph17e": {
    nome: "Iphone 17E",
    specs: "128GB 6GB RAM 6.1",
    imagens: [ "./Assets/Iphone 17E.jpg",
      "./assets/Iphone 17E branco.jpg",
      "./assets/Iphone 17E rose.jpg",
    ],
    cores: ["#4b4b4b", "#f1e4f5", "#ffefef"],
    ram: ["6GB"],
    armazenamento: [
      { label: "256GB", preco: 4999.00 },
      { label: "512GB", preco: 7299.00 }
    ],
    descricao: `
      <b>Custo-benefício Apple:</b> Desempenho atual em um formato mais acessível.<br/>
      <b>Câmara única de alta resolução:</b> Ótimos resultados no automático.<br/>
      <b>Chip atualizado:</b> Roda os apps e jogos mais recentes sem engasgar.<br/>
      <b>Face ID:</b> Segurança biométrica sem precisar de sensor de digital.<br/>
      <b>Bateria confiável:</b> Aguenta o dia todo com uso normal, sem sustos.<br/>
    `
  },

  "iph17air": {
    nome: "Iphone 17 Air",
    specs: "256GB 8GB RAM 6.5",
    imagens: [ "./Assets/Iphone 17 Air.jpg", 
      "./assets/Iphone 17 Air branco.jpg",
      "./assets/Iphone 17 Air dourado-claro.jpg",
      "./assets/Iphone 17 Air preto sideral.jpg",
    ],
    cores: ["#ecf3fb", "#f7f7f7", "#faf7f2", "#4c4c4c"],
    ram: ["8GB"],
    armazenamento: [
      { label: "256GB", preco: 7999.00 },
      { label: "512GB", preco: 8664.00 },
      { label: "1TB", preco: 9464.90 }
    ],
    descricao: `
      <b>Design ultrafino:</b> O Iphone mais leve já lançado.<br/>
      <b>Bateria otimizada:</b> Autonomia de um dia inteiro mesmo com corpo fino.<br/>
      <b>Corpo em titânio:</b> Leve mas resistente, ideal pra quem quer um aparelho fino sem abrir mão da durabilidade.<br/>
      <b>Câmera principal de alta resolução:</b> Boas fotos mesmo no corpo mais fino da linha.<br/>
      <b>Tela grande de 6.5":</b> Boa área de visualização apesar do design compacto.<br/>
    `
  },

    // ---------------------- LINHA 16 ----------------------

  "iph16pm": {
    nome: "Iphone 16 Pro Max",
    specs: "256GB 8GB RAM 6.9",
    imagens: [ "./Assets/Iphone 16 pro Max.jpg",
      "./Assets/Iphone 16 pro Max branco.jpg",
         "./Assets/Iphone 16 pro Max preto.jpg",
            "./Assets/Iphone 16 pro Max dourado.jpg",
    ],
    cores: ["#f1e0d0", "#fcfcfc", "#737373", "#efeae4" ],
    ram: ["8GB"],
    armazenamento: [
      { label: "256GB", preco: 6856.00 },
       { label: "512GB", preco: 8862.00 },
        { label: "1TB", preco: 10499.00 }
    ],
    descricao: `
      <b>Chip A18 Pro:</b> Desempenho de ponta com eficiência energética.<br/>
      <b>Câmara tripla de 48MP:</b> Zoom óptico avançado e vídeos em 4K.<br/>
      <b>Tela Super Retina XDR:</b> Brilho altíssimo, ótima até em dias de sol forte.<br/>
      <b>Bateria para o dia todo:</b> Aguenta uso pesado sem precisar de carregador por perto.<br/>
      <b>Botão de Ação e Câmera de Controle:</b> Atalhos físicos pra funções e captura rápida de fotos.<br/>
    `
  },

  "iph16p": {
    nome: "Iphone 16 Pro",
    specs: "128GB 8GB RAM 6.3",
    imagens: [ "./Assets/Iphone 16 pro.jpg",
       "./Assets/Iphone 16 pro deserto.jpg"  
    ],
      cores: [ "#fcfcfc", "#f1e0d0" ],
    ram: ["8GB"],
    armazenamento: [
      { label: "256GB", preco: 6300.00 },
        { label: "512GB", preco: 8241.00 },

    ],
    descricao: `
      <b>Design em titânio:</b> Leveza e resistência combinadas.<br/>
      <b>Botão de Ação:</b> Atalho personalizável para suas funções favoritas.<br/>
      <b>Câmera com zoom óptico:</b> Aproxima cenas distantes sem perder qualidade.<br/>
      <b>USB-C rápido:</b> Transferência de arquivos e carregamento mais ágeis.<br/>
      <b>Tela ProMotion:</b> Taxa de atualização adaptativa até 120Hz.<br/>
    `
  },

  "iph16pls": {
    nome: "Iphone 16 Plus",
    specs: "128GB 6GB RAM 6.7",
    imagens: [ "./Assets/Iphone 16 Plus.jpg",
      "./Assets/Iphone 16 Plus branco.jpg",
      "./Assets/Iphone 16 Plus rosa.jpg",
      "./Assets/Iphone 16 Plus azul.jpg",
      "./Assets/Iphone 16 Plus verde.jpg"
     ],
        cores: [ "#4f4f4f", "#f7f7f5" , "#f3b8de" , "#a0b2fa" , "#bddddc" ],
    ram: ["6GB"],
    armazenamento: [
      { label: "128GB", preco: 6799.00 },
       { label: "256GB", preco: 7299.00 },
        { label: "512GB", preco: 9200.00 }
    ],
    descricao: `
      <b>Tela grande de 6.7":</b> Ideal para vídeos e jogos.<br/>
      <b>Bateria de longa duração:</b> Até 27h de reprodução de vídeo.<br/>
      <b>Câmera dupla de 48MP:</b> Boas fotos em ambientes com pouca luz.<br/>
      <b>Chip A18:</b> Desempenho tranquilo para jogos e multitarefa.<br/>
      <b>Cinco cores vibrantes:</b> Acabamento fosco disponível em várias opções.<br/>
    `
  },

  "iph16": {
    nome: "Iphone 16",
    specs: "128GB 6GB RAM 6.1",
    imagens: [ "./Assets/Iphone 16.jpg",
      "./Assets/Iphone 16 preto.jpg",
      "./Assets/Iphone 16 rosa.jpg",
      "./Assets/Iphone 16 verde.jpg",
    
     ],
     cores: ["#f7f7f5" , "#4f4f4f",  "#f3b8de" , "#bddddc" ],
    ram: ["6GB"],
    armazenamento: [
      { label: "128GB", preco: 3500.00 },
    ],
    descricao: `
      <b>Chip A18:</b> Rápido e eficiente para o uso diário.<br/>
      <b>Câmara dupla de 48MP:</b> Fotos nítidas em qualquer situação.<br/>
      <b>Botão de Ação:</b> Atalho rápido pra câmera, lanterna ou modo silencioso.<br/>
      <b>Resistente à água:</b> Proteção contra respingos e imersão acidental.<br/>
      <b>Tela OLED brilhante:</b> Boa visibilidade mesmo em ambientes claros.<br/>
    `
  },

  "iph16e": {
    nome: "Iphone 16E",
    specs: "128GB 6GB RAM 6.1",
    imagens: [ "./Assets/Iphone 16E.jpg",
      "./Assets/Iphone 16E branco.jpg"
     ],
      cores: ["#484848" , "#f7f7f5" ],
    ram: ["6GB"],
    armazenamento: [
      { label: "128GB", preco: 3499.00 },
      { label: "256GB", preco: 4887.78 },
      { label: "512GB", preco: 6110.00 },
    ],
    descricao: `
      <b>Entrada na linha 16:</b> Recursos atuais com o melhor preço da linha.<br/>
      <b>Chip A18:</b> Mesmo processador dos modelos mais caros da linha.<br/>
      <b>Câmera com boa qualidade:</b> Fotos nítidas no automático, sem complicação.<br/>
      <b>Face ID:</b> Desbloqueio rápido e seguro.<br/>
      <b>Bateria eficiente:</b> Boa autonomia mesmo com uso moderado a intenso.<br/>
    `
  },

  
    // ---------------------- LINHA 15 ----------------------

    "iph15pm": {
    nome: "Iphone 15 Pro Max",
    specs: "256GB 8GB RAM 6.7",
    imagens: [ "./Assets/Iphone 15 pro Max.jpg",
  
    ],
    ram: ["8GB"],
    armazenamento: [
      { label: "256GB", preco: 6856.00 },
       { label: "512GB", preco: 8862.00 },
        { label: "1TB", preco: 10499.00 }
    ],
          descricao: `
      <b>Design em titânio:</b> Leveza e resistência combinadas.<br/>
      <b>Botão de Ação:</b> Atalho personalizável para suas funções favoritas.<br/>
      <b>Câmera com zoom óptico:</b> Aproxima cenas distantes sem perder qualidade.<br/>
      <b>USB-C rápido:</b> Transferência de arquivos e carregamento mais ágeis.<br/>
      <b>Chip A17 Pro:</b> Primeiro chip de 3 nanômetros da Apple, mais rápido e eficiente.<br/>
    `
  },

  "iph15p": {
    nome: "Iphone 15 Pro",
    specs: "128GB 8GB RAM 6.1",
    imagens: [ "./Assets/Iphone 15 pro.jpg",
    ],
    ram: ["8GB"],
    armazenamento: [
      { label: "256GB", preco: 6300.00 },
        { label: "512GB", preco: 8241.00 },

    ],
    descricao: `
      <b>Design em titânio:</b> Leveza e resistência combinadas.<br/>
      <b>Botão de Ação:</b> Atalho personalizável para suas funções favoritas.<br/>
      <b>Câmera com zoom óptico:</b> Aproxima cenas distantes sem perder qualidade.<br/>
      <b>USB-C rápido:</b> Transferência de arquivos e carregamento mais ágeis.<br/>
      <b>Chip A17 Pro:</b> Primeiro chip de 3 nanômetros da Apple, mais rápido e eficiente.<br/>
    `
  },

  

  // ---------------------- SAMSUNG GALAXY ----------------------
  // ---------------------- SMARTPHONES  ----------------------
  //---------------------- GALAXY S  ----------------------
  "s26ultra": {
    nome: "Galaxy S26 Ultra",
    specs: "256GB 12GB RAM 6.8",
    imagens: [ "./Assets/Galaxy S26 Ultra.jpg",
      "./Assets/Galaxy S26 Ultra branco.jpg",
      "./Assets/Galaxy S26 Ultra azul.jpg",
      "./Assets/Galaxy S26 Ultra violeta.jpg",
     ],
      cores: ["#383b40" , "#fefefe", "#d6e2ee", "#595975" ],
    ram: ["12GB"],
    armazenamento: [
      { label: "256GB", preco: 7149.08 },
      { label: "512GB", preco: 8944.00 },
       { label: "1TB", preco: 12134.70 },
    ],
    descricao: `
      <b>S Pen integrada:</b> Caneta digital de alta precisão embutida no aparelho.<br/>
      <b>Tela Dynamic AMOLED 2X:</b> Cores vibrantes e brilho altíssimo mesmo sob sol forte.<br/>
      <b>Câmera de alta resolução:</b> Zoom potente pra capturar detalhes de longe.<br/>
      <b>Bateria de longa duração:</b> Aguenta o dia inteiro com uso intenso.<br/>
      <b>Corpo em titânio:</b> Resistência extra sem pesar no bolso.<br/>
    `
  },

  "s26plus": {
    nome: "Galaxy S26 Plus",
    specs: "256GB 12GB RAM 6.7",
    imagens: [ "./Assets/Galaxy S26 Plus.jpg",
       "./Assets/Galaxy S26 Plus branco.jpg",
        "./Assets/Galaxy S26 Plus preto.jpg",
         "./Assets/Galaxy S26 Plus violeta.jpg"
     ],
     cores: ["#d6e2ee", "#fefefe", "#383b40" , "#595975" ],
    ram: ["12GB"],
    armazenamento: [
      { label: "256GB", preco: 5999.00 },
         { label: "512GB", preco: 7776.00 },
    ],
    descricao: `
      <b>Tela imersiva:</b> Bordas finas e alto brilho para qualquer ambiente.<br/>
      <b>Processador de ponta:</b> Desempenho suave em jogos pesados e multitarefa.<br/>
      <b>Câmera versátil:</b> Boas fotos em diferentes condições de luz.<br/>
      <b>Carregamento rápido:</b> Volta à bateria cheia em pouco tempo.<br/>
      <b>One UI atualizada:</b> Interface fluida com os recursos mais recentes da Samsung.<br/>
    `
  },

  "s26": {
    nome: "Galaxy S26",
    specs: "256GB 8GB RAM 6.2",
    imagens: [ "./Assets/Galaxy S26.jpg",
      "./Assets/Galaxy S26 azul.jpg",
      "./Assets/Galaxy S26 branco.jpg",
      "./Assets/Galaxy S26 violeta.jpg",
     ],
     cores: [ "#383b40" , "#d6e2ee", "#fefefe", "#595975" ],
    ram: ["8GB"],
    armazenamento: [
      { label: "256GB", preco: 4298.00 },
         { label: "512GB", preco: 5299.20 }
    ],
    descricao: `
      <b>Compacto e potente:</b> Todo o poder da linha S26 em corpo menor.<br/>
      <b>Tela Dynamic AMOLED:</b> Cores vivas em um corpo mais fácil de segurar com uma mão.<br/>
      <b>Câmera tripla:</b> Versatilidade entre grande angular, principal e zoom.<br/>
      <b>One UI fluida:</b> Interface com os recursos mais recentes da Samsung.<br/>
      <b>Bateria equilibrada:</b> Boa autonomia mesmo com o corpo compacto.<br/>
    `
  },

  "s25ultra": {
    nome: "Galaxy S25 Ultra",
    specs: "256GB 12GB RAM 6.8",
    imagens: [   "./Assets/Galaxy S25 Ultra.jpg",
      "./Assets/Galaxy S25 Ultra dourado.jpg",
      "./Assets/Galaxy S25 Ultra prata.jpg",
      "./Assets/Galaxy S25 Ultra a.jpg"
     ],
      cores: ["#3f4044" , "#c3beba", "#d6d6d8" ,  "#a0a6b6" ],
    ram: ["12GB"],
    armazenamento: [
      { label: "256GB", preco: 5798.70 },
         { label: "512GB", preco: 7449.00 }
    ],
    descricao: `
      <b>S Pen integrada:</b> Produtividade e criatividade na palma da mão.<br/>
      <b>Câmera de 200MP:</b> Detalhes nítidos mesmo em zoom digital alto.<br/>
      <b>Tela plana de bordas finas:</b> Mais área útil e visual moderno.<br/>
      <b>Titânio no corpo:</b> Resistência extra sem pesar no bolso.<br/>
      <b>Bateria robusta:</b> Aguenta um dia inteiro de uso intenso.<br/>
    `
  },

  "s25plus": {
    nome: "Galaxy S25 Plus",
    specs: "256GB 12GB RAM 6.7",
    imagens: [ "./Assets/Galaxy S25 Plus.jpg",
      "./Assets//Galaxy S25 Plus azul safira.jpg",
         "./Assets//Galaxy S25 Plus prata.jpg",
     ],
      cores: ["#d2d8e4" , "#283b65", "#d6d6d8" ,  "#dae0ec" ],
    ram: ["12GB"],
    armazenamento: [
      { label: "256GB", preco: 4999.00 },
       { label: "512GB", preco: 5887.78 },
    ],
    descricao: `
      <b>Desempenho equilibrado:</b> Tela grande com ótima autonomia.<br/>
      <b>Tela grande AMOLED:</b> Ótima pra vídeos e jogos.<br/>
      <b>Câmera versátil:</b> Boas fotos em diferentes situações.<br/>
      <b>Bateria de longa duração:</b> Aguenta um dia inteiro de uso.<br/>
      <b>Carregamento rápido:</b> Menos tempo preso na tomada.<br/>
    `
  },

  "s25": {
    nome: "Galaxy S25",
    specs: "256GB 8GB RAM 6.2",
    imagens: [ "./Assets/Galaxy S25.jpg",
      "./Assets/Galaxy S25 azul.jpg",
      "./Assets/Galaxy S25 verde.jpg",
     ],
       cores: ["#1f325c" , "#d5dbe7", "#e2f0df" , ],
    ram: ["8GB"],
    armazenamento: [
      { label: "128GB", preco: 3500.00 },
      { label: "256GB", preco: 4096.00 },
    ],
    descricao: `
      <b>Linha S25:</b> Todo o desempenho Samsung em formato compacto.<br/>
      <b>Processador rápido:</b> Roda os apps e jogos mais pesados sem travar.<br/>
      <b>Câmera tripla:</b> Grande angular, principal e zoom em um só aparelho.<br/>
      <b>5G:</b> Conexão rápida pra streaming e downloads.<br/>
      <b>Design compacto:</b> Fácil de usar com uma mão só.<br/>
    `
  },

  "s25edge": {
    nome: "Galaxy S25 Edge",
    specs: "256GB 12GB RAM 6.6",
    imagens: [ "./Assets/Galaxy S25 Edge.jpg",
        "./Assets/Galaxy S25 Edge branco.jpg"
     ],
      cores: ["#373a3f" , "#dbdbdb" ],
    ram: ["12GB"],
    armazenamento: [
      { label: "512GB", preco: 4499.00 }
    ],
    descricao: `
      <b>Design ultrafino:</b> Corpo esbelto sem abrir mão do desempenho.<br/>
      <b>Corpo em titânio:</b> Leveza sem perder resistência.<br/>
      <b>Câmera de alta resolução:</b> Boas fotos mesmo no corpo mais fino da linha.<br/>
      <b>Tela grande:</b> Boa área de visualização apesar do design compacto.<br/>
      <b>Processador de ponta:</b> Desempenho à altura da linha S25 principal.<br/>
    `
  },

  "s25fe": {
    nome: "Galaxy S25 FE",
    specs: "256GB 8GB RAM 6.4",
    imagens: [ "./Assets/Galaxy S25 FE.jpg",
       "./Assets/Galaxy S25 FE preto.jpg",
        "./Assets/Galaxy S25 FE branco.jpg"

     ],
     cores: ["#394669" , "#2e2f34", "#e1e2f4" ],
    ram: ["8GB"],
    armazenamento: [
      { label: "128GB", preco: 2998.99 },
        { label: "256GB", preco: 3599.10 }
    ],
    descricao: `
      <b>Fan Edition:</b> O melhor da linha S25 com ótimo custo-benefício.<br/>
      <b>Câmera tripla:</b> Grande angular, principal e teleobjetiva.<br/>
      <b>Bateria de longa duração:</b> Ideal pra quem usa o celular o dia todo.<br/>
      <b>Design premium:</b> Acabamento à altura da linha S25 por um preço mais em conta.<br/>
      <b>Tela AMOLED fluida:</b> Boa taxa de atualização pra rolagem suave.<br/>
    `
  },

  
  "s24ultra": {
    nome: "Galaxy S24 Ultra",
    specs: "256GB 12GB RAM 6.8",
    imagens: [ "./Assets/Galaxy S24 ultra.jpg",
       "./Assets/Galaxy S24 ultra dourado.jpg"
     ],
     cores: ["#4a4947" , "#9a918c" ],
    ram: ["12GB"],
    armazenamento: [
      { label: "128GB", preco: 5399.10 },
    ],
    descricao: `
      <b>S Pen de série:</b> Precisão para anotações e edição direto na tela.<br/>
      <b>Titânio nas bordas:</b> Resistência extra sem pesar no bolso.<br/>
      <b>Câmera com zoom poderoso:</b> Ótimo pra fotos de longe com boa nitidez.<br/>
      <b>Tela grande e nítida:</b> Ideal pra produtividade e consumo de conteúdo.<br/>
      <b>Bateria robusta:</b> Aguenta um dia inteiro de uso intenso.<br/>
    `
  },

    "s24fe": {
    nome: "Galaxy S24 FE",
    specs: "256GB 8GB RAM 6.7",
    imagens: [ "./Assets/Galaxy S24 FE.jpg",
       "./Assets/Galaxy s24 FE azul.jpg"
     ],
     cores: ["##484848" ],
    ram: ["8GB"],
    armazenamento: [
      { label: "128GB", preco: 2659.00 },
    ],
    descricao: `
      <b>Fan Edition:</b> O essencial da linha S24 com ótimo custo-benefício.<br/>
      <b>Tela grande de 6.7":</b> Boa opção para quem assiste muito vídeo.<br/>
      <b>Câmera tripla:</b> Boa versatilidade para o dia a dia.<br/>
      <b>Bateria robusta:</b> Aguenta um dia cheio de uso sem sustos.<br/>
      <b>Processador ágil:</b> Roda jogos e apps pesados sem travamentos.<br/>
    `
  },

  //---------------------- GALAXY Z ----------------------

      "zfold8ultra": {
    nome: "Galaxy Z Fold 8 Ultra",
    specs: "512GB 12GB RAM 8.0",
    imagens: ["./Assets/Galaxy z fold 8 ultra.jpg",
       "./Assets/Galaxy z fold 8 ultra vinho.jpg"
     ],
     cores: ["#494a4f", "#3b2f39" ],
    ram: ["12GB"],
    armazenamento: [
      { label: "512GB", preco: 13859.00 },
    ],
    descricao: `
      <b>Tela dobrável de 8":</b> Abre como um mini tablet para multitarefa e produtividade.<br/>
      <b>Topo de linha Ultra:</b> A versão mais avançada da linha Z Fold, com o melhor processador e câmeras.<br/>
      <b>Multitarefa real:</b> Roda até três apps lado a lado na tela grande.<br/>
      <b>Câmera profissional:</b> Sistema de câmeras equivalente aos modelos Ultra da linha S.<br/>
      <b>S Pen compatível:</b> Aceita a caneta digital pra anotações e edição na tela aberta.<br/>
    `
  },

  
      "zfold8": {
    nome: "Galaxy Z Fold 8",
    specs: "512GB 12GB RAM 7.6",
    imagens: ["./Assets/Galaxy z fold 8.jpg",
       "./Assets/Galaxy z fold 8 rosa.jpg"
     ],
     cores: ["#4f4f59", "#d3cadb" ],
    ram: ["12GB"],
    armazenamento: [
      { label: "512GB", preco: 11339.10 },
    ],
    descricao: `
      <b>Tela dobrável de 7.6":</b> Fecha como um smartphone comum e abre em formato tablet.<br/>
      <b>Vinco quase imperceptível:</b> Dobradiça de nova geração, mais discreta e resistente.<br/>
      <b>Modo Flex:</b> Deixa o celular parcialmente dobrado pra vídeochamadas ou fotos sem as mãos.<br/>
      <b>S Pen compatível:</b> Aceita a caneta digital vendida separadamente.<br/>
      <b>Câmera versátil:</b> Grande angular, principal e teleobjetiva em um só aparelho.<br/>
    `
  },

    "zflip8": {
    nome: "Galaxy Z Flip 8",
    specs: "256GB 12GB RAM 6.9",
    imagens: ["./Assets/Galaxy z flip 8.jpg",
     ],
    ram: ["12GB"],
    armazenamento: [
      { label: "256GB", preco: 8279.10 },
    ],
    descricao: `
      <b>Dobra na vertical:</b> Formato compacto de bolso, abrindo em tela cheia quando precisar.<br/>
      <b>Tela externa de capa:</b> Vê notificações e tira fotos sem precisar abrir o aparelho.<br/>
      <b>Design compacto:</b> Cabe fácil em qualquer bolso quando fechado.<br/>
      <b>Dobradiça reforçada:</b> Feita pra aguentar milhares de dobras.<br/>
      <b>Câmera dupla:</b> Boa qualidade de foto mesmo no corpo compacto.<br/>
    `
  },

   "zfold7": {
    nome: "Galaxy Z Fold 7",
    specs: "512GB 12GB RAM 8.0",
    imagens: ["./Assets/Galaxy z fold 7.jpg",
       "./Assets/Galaxy z fold 7 azul.jpg"
     ],
     cores: ["#29282d", "#1a2a4c" ],
    ram: ["12GB"],
    armazenamento: [
      { label: "512GB", preco: 10439.00 },
    ],
    descricao: `
      <b>Tela dobrável de 8":</b> Espaço de sobra para trabalhar com vários apps ao mesmo tempo.<br/>
      <b>S Pen compatível:</b> Aceita a caneta digital para anotações na tela grande.<br/>
      <b>Câmeras versáteis:</b> Grande angular, principal e teleobjetiva em um só aparelho.<br/>
      <b>Bateria dupla:</b> Duas baterias internas trabalhando juntas pra mais autonomia.<br/>
      <b>Tela externa funcional:</b> Usa o celular fechado pra tarefas rápidas do dia a dia.<br/>
    `
  },

     "zflip7": {
    nome: "Galaxy Z Flip 7",
    specs: "512GB 12GB RAM 6.9",
    imagens: ["./Assets/Galaxy z flip 7.jpg",
     ],
     cores: ["#29282d"],
    ram: ["12GB"],
    armazenamento: [
      { label: "128GB", preco: 6610.00 },
      { label: "256GB", preco: 7839.00 },
    ],
    descricao: `
      <b>Dobra na vertical:</b> Design icônico, compacto no bolso e cheio de personalidade.<br/>
      <b>Câmera com boa performance em selfies:</b> Usa a própria câmera traseira como selfie com a tela dobrada.<br/>
      <b>Tela externa grande:</b> Dá pra responder mensagens e ver notificações sem abrir o aparelho.<br/>
      <b>Cores exclusivas:</b> Acabamento diferenciado que só a linha Flip tem.<br/>
      <b>Dobradiça durável:</b> Projetada pra resistir a milhares de aberturas e fechamentos.<br/>
    `
  },

  
     "zflipfe": {
    nome: "Galaxy Z Fold 7 FE",
    specs: "512GB 8GB RAM 6.7",
    imagens: ["./Assets/Galaxy z flip 7 FE.jpg",
       "./Assets/Galaxy z flip 7 FE branco.jpg"
     ],
     cores: ["#363636", "#fafafa"],
    ram: ["8GB"],
    armazenamento: [
      { label: "256GB", preco: 4229.00 },
    ],
    descricao: `
      <b>Fan Edition dobrável:</b> A experiência de um celular dobrável por um preço mais acessível.<br/>
      <b>Design compacto:</b> Cabe fechado em qualquer bolso.<br/>
      <b>Câmera dupla:</b> Boa qualidade de foto com preço mais acessível.<br/>
      <b>Mesma dobradiça da linha principal:</b> Resistência sem abrir mão do preço menor.<br/>
      <b>Tela externa de capa:</b> Notificações e fotos rápidas sem abrir o aparelho.<br/>
    `
  },


       "zfold6": {
    nome: "Galaxy Z Fold 6",
    specs: "512GB 12GB RAM 7.60",
    imagens: ["./Assets/Galaxy z fold 6.jpg",
     ],
     cores: ["#292e42"],
    ram: ["12GB"],
    armazenamento: [
      { label: "512GB", preco: 7499.00 },
    ],
    descricao: `
      <b>Tela dobrável de 7.6":</b> Formato tablet compacto que fecha no tamanho de um smartphone.<br/>
      <b>Ótimo custo-benefício em dobrável:</b> A porta de entrada mais em conta pra experiência Z Fold.<br/>
      <b>Multitarefa:</b> Roda dois apps lado a lado na tela aberta.<br/>
      <b>Câmera tripla:</b> Grande angular, principal e zoom.<br/>
      <b>S Pen compatível:</b> Aceita a caneta digital vendida separadamente.<br/>
    `
  },
   // ---------------------- APPLE  -----------------------------
    // ---------------------- SMARTWATCHES  ----------------------



  "awatchultra3": {
    nome: "Apple Watch Ultra 3",
    specs: "GPS + Cellular, Caixa em titânio natural de 49 mm com Loop Trail azul/azul‑vivo ‑ P/M",
    imagens: [ "./Assets/apple watch ultra 3.jpg"],
    // Pulseiras: array de tamanhos disponíveis. Ajuste os tamanhos reais
    // (ex: "41mm", "45mm", "49mm" ou "S/M", "M/L") conforme o modelo.
    pulseiras: ["S/M", "M/L"],
    armazenamento: [
      { label: "64GB", preco: 7400.00 }
    ],
    descricao: `
      <b>Processador:</b> Chip S10 SiP de 64 bits com dois núcleos.<br/>
      <b>Conectividade:</b> GPS de dupla frequência (L1 e L5), Cellular (LTE/5G) integrado.<br/>
      <b>Resistente a mergulho:</b> Certificação pra esportes aquáticos e mergulho recreativo.<br/>
      <b>Bateria de longa duração:</b> Feita pra atividades de resistência sem precisar recarregar no meio do dia.<br/>
      <b>Caixa em titânio:</b> Leve, resistente a arranhões e pronta pra ambientes extremos.<br/>
    `
  },

  
  "awatchultra2": {
    nome: "Apple Watch Ultra 2",
    specs: "GPS + Cellular, Caixa em titânio natural de 49 mm com Loop Trail azul/azul‑vivo ‑ P/M",
    imagens: [ "./Assets/apple watch ultra 2.jpg"],
    // Pulseiras: array de tamanhos disponíveis. Ajuste os tamanhos reais
    // (ex: "41mm", "45mm", "49mm" ou "S/M", "M/L") conforme o modelo.
    pulseiras: ["S/M", "M/L"],
    armazenamento: [
      { label: "64GB", preco: 6799.00 }
    ],
    descricao: `
      <b>Processador:</b> Chip S10 SiP de 64 bits com dois núcleos.<br/>
      <b>Conectividade:</b> GPS de dupla frequência (L1 e L5), Cellular (LTE/5G) integrado.<br/>
      <b>Resistente a mergulho:</b> Certificação pra esportes aquáticos e mergulho recreativo.<br/>
      <b>Bateria de longa duração:</b> Feita pra atividades de resistência sem precisar recarregar no meio do dia.<br/>
      <b>Caixa em titânio:</b> Leve, resistente a arranhões e pronta pra ambientes extremos.<br/>
    `
  },

  
  "awatchs11": {
    nome: "Apple Watch Series 11",
    specs: "45mm, GPS + Cellular",
    imagens: ["./assets/apple watch series 11.jpg"],
    // Pulseiras: array de tamanhos disponíveis. Ajuste os tamanhos reais
    // (ex: "41mm", "45mm", "49mm" ou "S/M", "M/L") conforme o modelo.
    pulseiras: ["S/M", "M/L"],
    armazenamento: [
      { label: "64GB", preco: 4599.00 }
    ],
    descricao: `
      <b>Tela sempre ativa:</b> Visor Retina LTPO que mostra as horas mesmo sem levantar o pulso.<br/>
      <b>Monitoramento de saúde:</b> Frequência cardíaca, oxigenação do sangue e ciclo de sono acompanhados o dia todo.<br/>
      <b>Detecção de queda:</b> Aciona alerta automático em caso de acidente.<br/>
      <b>Resistente à água:</b> Pode ser usado pra nadar sem problema.<br/>
      <b>Carregamento rápido:</b> Recupera boa parte da bateria em poucos minutos na tomada.<br/>
    `
  },

    "awatchs10": {
    nome: "Apple Watch Series 10",
    specs: "42mm, GPS",
    imagens: ["./assets/apple watch series 10.jpg"],
    // Pulseiras: array de tamanhos disponíveis. Ajuste os tamanhos reais
    // (ex: "41mm", "45mm", "49mm" ou "S/M", "M/L") conforme o modelo.
    pulseiras: ["S/M", "M/L"],
    armazenamento: [
      { label: "32GB", preco: 3899.00 }
    ],
    descricao: `
      <b>Tela sempre ativa:</b> Visor Retina LTPO que mostra as horas mesmo sem levantar o pulso.<br/>
      <b>Monitoramento de saúde:</b> Frequência cardíaca, oxigenação do sangue e ciclo de sono acompanhados o dia todo.<br/>
      <b>Detecção de queda:</b> Aciona alerta automático em caso de acidente.<br/>
      <b>Resistente à água:</b> Pode ser usado pra nadar sem problema.<br/>
      <b>Carregamento rápido:</b> Recupera boa parte da bateria em poucos minutos na tomada.<br/>
    `
  },

    "awatchs9": {
    nome: "Apple Watch Series 9",
    specs: "45mm, GPS + Cellular",
    imagens: ["./assets/apple watch series 9.jpg"],
    // Pulseiras: array de tamanhos disponíveis. Ajuste os tamanhos reais
    // (ex: "41mm", "45mm", "49mm" ou "S/M", "M/L") conforme o modelo.
    pulseiras: ["S/M", "M/L"],
    armazenamento: [
      { label: "32GB", preco: 3299.00 }
    ],
    descricao: `
      <b>Tela sempre ativa:</b> Visor Retina LTPO que mostra as horas mesmo sem levantar o pulso.<br/>
      <b>Monitoramento de saúde:</b> Frequência cardíaca, oxigenação do sangue e ciclo de sono acompanhados o dia todo.<br/>
      <b>Detecção de queda:</b> Aciona alerta automático em caso de acidente.<br/>
      <b>Resistente à água:</b> Pode ser usado pra nadar sem problema.<br/>
      <b>Carregamento rápido:</b> Recupera boa parte da bateria em poucos minutos na tomada.<br/>
    `
  },

    "awatchse3": {
    nome: "Apple Watch SE3",
    specs: "44mm, GPS",
    imagens: ["./assets/apple watch se3.jpg"],
    // Pulseiras: array de tamanhos disponíveis. Ajuste os tamanhos reais
    // (ex: "41mm", "45mm", "49mm" ou "S/M", "M/L") conforme o modelo.
    pulseiras: ["S/M", "M/L"],
    armazenamento: [
      { label: "32GB", preco: 2499.00 }
    ],
    descricao: `
      <b>Tela sempre ativa:</b> Visor Retina LTPO que mostra as horas mesmo sem levantar o pulso.<br/>
      <b>Monitoramento de saúde:</b> Frequência cardíaca, oxigenação do sangue e ciclo de sono acompanhados o dia todo.<br/>
      <b>Detecção de queda:</b> Aciona alerta automático em caso de acidente.<br/>
      <b>Resistente à água:</b> Pode ser usado pra nadar sem problema.<br/>
      <b>Carregamento rápido:</b> Recupera boa parte da bateria em poucos minutos na tomada.<br/>
    `
  },



    "galaxywatchultra2": {
    nome: "Galaxy Watch Ultra 2",
    specs: "47mm, Titânio, GPS + LTE",
    imagens: ["./Assets/Galaxy watch ultra 2.jpg"],
    // Pulseiras: array de tamanhos disponíveis. Ajuste os tamanhos reais
    // (ex: "41mm", "45mm", "49mm" ou "S/M", "M/L") conforme o modelo.
        pulseiras: ["47mm"],
    armazenamento: [
      { label: "32GB", preco: 4299.00 }
    ],
     descricao: `
      <b>Tela Super AMOLED de alto brilho:</b> Visibilidade ótima mesmo sob sol forte.<br/>
      <b>Corpo em titânio:</b> Resistente a arranhões e pronto pra ambientes extremos.<br/>
      <b>Botão Quick Button:</b> Atalho físico programável pra funções e apps.<br/>
      <b>Monitoramento avançado de saúde:</b> Frequência cardíaca, oxigenação, sono e temperatura da pele.<br/>
      <b>Bateria de longa duração:</b> Modo de economia estende o uso por vários dias.<br/>
    `
  },

     "galaxywatchultra": {
     nome: "Galaxy Watch Ultra",
    specs: "47mm, Titânio, GPS + LTE",
    imagens: ["./Assets/Galaxy watch ultra.jpg"],
    // Pulseiras: array de tamanhos disponíveis. Ajuste os tamanhos reais
    // (ex: "41mm", "45mm", "49mm" ou "S/M", "M/L") conforme o modelo.
     pulseiras: ["47mm"],
    armazenamento: [
      { label: "32GB", preco: 3799.00 }
    ],
     descricao: `
      <b>Tela Super AMOLED de alto brilho:</b> Visibilidade ótima mesmo sob sol forte.<br/>
      <b>Corpo em titânio:</b> Resistente a arranhões e pronto pra ambientes extremos.<br/>
      <b>Botão Quick Button:</b> Atalho físico programável pra funções e apps.<br/>
      <b>Resistência para esportes extremos:</b> Certificação militar contra choques e água.<br/>
      <b>Bateria de longa duração:</b> Aguenta atividades de resistência sem precisar recarregar no meio do dia.<br/>
    `
  },

     "galaxywatch9": {
     nome: "Galaxy Watch 9",
    specs: "44mm, Alumínio, GPS + LTE",
    imagens: [ "./Assets/Galaxy watch 9.jpg"],
       pulseiras: ["40mm", "44mm"],
    armazenamento: [
      { label: "32GB", preco: 2599.00 }
    ],
     descricao: `
      <b>Tela Super AMOLED:</b> Cores vivas e boa visibilidade ao ar livre.<br/>
      <b>Monitoramento de saúde:</b> Frequência cardíaca, oxigenação do sangue e ciclo de sono acompanhados o dia todo.<br/>
      <b>Detecção de queda:</b> Aciona alerta automático em caso de acidente.<br/>
      <b>Resistente à água:</b> Pode ser usado pra nadar sem problema.<br/>
      <b>Carregamento rápido:</b> Recupera boa parte da bateria em poucos minutos na tomada.<br/>
    `
  },

  
     "galaxywatch8": {
       nome: "Galaxy Watch 8",
    specs: "44mm, Alumínio, GPS + LTE",
    imagens: [ "./Assets/Galaxy watch 8.jpg"],
      pulseiras: ["40mm", "44mm"],
    armazenamento: [
      { label: "32GB", preco: 2299.00 }
    ],
     descricao: `
      <b>Tela Super AMOLED:</b> Cores vivas e boa visibilidade ao ar livre.<br/>
      <b>Monitoramento de saúde:</b> Frequência cardíaca, oxigenação do sangue e ciclo de sono acompanhados o dia todo.<br/>
      <b>Design mais fino:</b> Corpo levemente redesenhado, mais confortável no pulso.<br/>
      <b>Resistente à água:</b> Pode ser usado pra nadar sem problema.<br/>
      <b>Carregamento rápido:</b> Recupera boa parte da bateria em poucos minutos na tomada.<br/>
    `
  },

  
     "galaxywatch7": {
       nome: "Galaxy Watch 7",
    specs: "40mm, Alumínio, GPS",
    imagens: [ "./Assets/Galaxy watch 7.jpg"],
     pulseiras: ["40mm", "44mm"],
    armazenamento: [
      { label: "32GB", preco: 1899.00 }
    ],
   descricao: `
      <b>Tela Super AMOLED:</b> Cores vivas e boa visibilidade ao ar livre.<br/>
      <b>Monitoramento de saúde:</b> Frequência cardíaca, oxigenação do sangue e ciclo de sono acompanhados o dia todo.<br/>
      <b>Detecção de queda:</b> Aciona alerta automático em caso de acidente.<br/>
      <b>Resistente à água:</b> Pode ser usado pra nadar sem problema.<br/>
      <b>Carregamento rápido:</b> Recupera boa parte da bateria em poucos minutos na tomada.<br/>
    `
  },

     "galaxywatch8classic": {
       nome: "Galaxy Watch Classic",
    specs: "46mm, Aço inoxidável, Bezel giratório, GPS + LTE",
    imagens: [ "./Assets/Galaxy watch 8 classic.jpg"],
     pulseiras: ["46mm"],
    armazenamento: [
      { label: "32GB", preco: 2699.00 }
    ],
   descricao: `
      <b>Bezel giratório:</b> Navegação física entre telas e apps, marca registrada da linha Classic.<br/>
      <b>Corpo em aço inoxidável:</b> Acabamento premium e mais resistente a arranhões.<br/>
      <b>Tela Super AMOLED:</b> Cores vivas e boa visibilidade ao ar livre.<br/>
      <b>Monitoramento de saúde:</b> Frequência cardíaca, oxigenação do sangue e ciclo de sono acompanhados o dia todo.<br/>
      <b>Resistente à água:</b> Pode ser usado pra nadar sem problema.<br/>
    `
  },


};