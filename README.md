# BUY2BUY 📱


<p align="center">


  <img src="./assets/banner buy2buy.png" alt="Preview do Buy2Buy" width="100%">

</p>

Site de e-commerce de celulares desenvolvido com **HTML, CSS, JavaScript e Python**.
 
## 🎯 Finalidade do projeto
 
O C-TECH é uma loja virtual de celulares que permite ao usuário navegar por um catálogo de produtos, visualizar os detalhes de cada aparelho em uma página dedicada e montar seu carrinho de compras. O projeto foi desenvolvido como uma aplicação **front-end pura**, sem frameworks, com o objetivo de reforçar o domínio dos fundamentos de HTML, CSS e JavaScript — além de integrar Python para uma funcionalidade específica de geração de QR Code.
 
## ✨ Funcionalidades
 
- **Catálogo de produtos** — listagem dos celulares disponíveis
- **Página de produto genérica** (`produto.html`) — exibe os detalhes de cada celular dinamicamente via query string, em vez de uma página HTML separada para cada item
- **Carrinho de compras** — adicione produtos e acompanhe sua seleção antes da compra
- **Geração de QR Code** — criada em Python, para (descreva aqui a finalidade, ex: compartilhar o link do produto ou confirmar a compra)
## 💻 Linguagens e responsabilidades
 
O projeto utiliza **4 linguagens**, cada uma com um papel específico:
 
| Linguagem | Finalidade |
|---|---|
| **HTML** | Estruturação semântica das páginas (catálogo, produto, carrinho) |
| **CSS** | Estilização visual, além de toda a **estrutura de fluidez e responsividade** do layout, adaptando o site a diferentes tamanhos de tela |
| **JavaScript** | Lógica da aplicação (renderização dinâmica de produtos, carrinho, navegação) e também parte da **estrutura de fluidez e responsividade**, controlando o comportamento dinâmico dos elementos conforme a tela |
| **Python** | Utilizado à parte do front-end, para **gerar QR Codes** |
 
> 🔎 Destaque: diferente da abordagem tradicional (onde a responsividade fica só no CSS), aqui a fluidez do layout foi construída em conjunto entre **CSS e JavaScript**, unindo estilos adaptativos com ajustes dinâmicos via script.
 
## 🚀 Como rodar o projeto
 
Este projeto não depende de build nem de instalação de pacotes — basta servir os arquivos estáticos.
 
1. Clone o repositório:
```bash
   git clone <url-do-repositorio>
```
2. Abra a pasta no VS Code.
3. Instale a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), caso ainda não tenha.
4. Clique com o botão direito em `index.html` e selecione **"Open with Live Server"**.
## 🗂️ Estrutura do projeto
 
```
c-tech/
├── index.html         # Página inicial / catálogo
├── produto.html        # Página de produto genérica (dados via query string)
├── css/                 # Estilos e responsividade
├── js/                  # Scripts (catálogo, carrinho, produto, responsividade)
├── qrcode/              # Script(s) Python para geração de QR Code
└── assets/              # Imagens e outros recursos estáticos
```
 
> Ajuste a estrutura acima conforme a organização real das pastas do seu projeto.
 
## 🛠️ Tecnologias
 
- HTML5
- CSS3 (estrutura de fluidez e responsividade)
- JavaScript Vanilla (lógica da aplicação e responsividade)
- Python (geração de QR Code)
## 📌 Próximos passos
 
- [ x ] Adicionar novas funcionalidades
- [ x ] Melhorar responsividade
- [ ] Documentar o funcionamento do carrinho e da página de produto
## 📄 Licença
 
Defina aqui a licença do projeto (ex: MIT).
 
