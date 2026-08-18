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
    `
  },

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
    `
  },

  // ---------------------- SAMSUNG GALAXY ----------------------

  "s26ultra": {
    nome: "Galaxy S26 Ultra",
    specs: "256GB 12GB RAM 6.8",
    imagens: [ "./Assets/Galaxy S26 Ultra.jpg",
      "./Assets/Galaxy S26 Ultra branco.jpg",
      "./Assets/Galaxy S26 Ultra azul.jpg",
      "./Assets/Galaxy S26 Ultra violeta.jpg",
     ],
      cores: ["#383b40" , "#fefefe", "#d6e2ee", "#595975" ],
    ram: ["12GB","16G"
    ],
    armazenamento: [
      { label: "256GB", preco: 7149.08 },
      { label: "512GB", preco: 8944.00 },
       { label: "1TB", preco: 12134.70 },
    ],
  
    descricao: `
      <b>S Pen integrada:</b> Caneta digital de alta precisão embutida no aparelho.<br/>
      <b>Tela Dynamic AMOLED 2X:</b> Cores vibrantes e brilho altíssimo mesmo sob sol forte.<br/>
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
      { label: "256GB", preco: 10859.99 },
         { label: "512GB", preco: 10859.99 }
    ],
    descricao: `
      <b>S Pen integrada:</b> Produtividade e criatividade na palma da mão.<br/>
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
      { label: "256GB", preco: 3500.00 },
      { label: "256GB", preco: 4096.00 },
    ],
    descricao: `
      <b>Linha S25:</b> Todo o desempenho Samsung em formato compacto.<br/>
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
      { label: "128GB", preco: 10859.99 },
        { label: "256GB", preco: 10859.99 }
    ],
    descricao: `
      <b>Fan Edition:</b> O melhor da linha S25 com ótimo custo-benefício.<br/>
    `
  },

  "awatchultra": {
    nome: "Apple Watch",
    specs: "256GB 12GB RAM 6.3",
    imagens: ["./assets/apple watch ultra.jpg"],
    // Pulseiras: array de tamanhos disponíveis. Ajuste os tamanhos reais
    // (ex: "41mm", "45mm", "49mm" ou "S/M", "M/L") conforme o modelo.
    pulseiras: ["S/M", "M/L"],
    armazenamento: [
      { label: "256GB", preco: 10859.99 }
    ],
    descricao: `
      <b>HyperOS:</b> Interface fluida e otimizada da Xiaomi.<br/>
    `
  },


  // A seção "Motorola" do index.html ainda usa imagens/nomes da Xiaomi
  // (parece que ainda não foi preenchida) — quando tiver os modelos reais,
  // adicione aqui do mesmo jeito.
};