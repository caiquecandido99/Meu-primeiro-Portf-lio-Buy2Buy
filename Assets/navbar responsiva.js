document.addEventListener('DOMContentLoaded', () => {

    const menuToggle = document.getElementById('menuToggle');
    const menuNavbar = document.getElementById('menuNavbar');
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = document.querySelector('.dropbtn');
    const submenu = document.querySelector('.submenu');
    const searchContainer = document.querySelector('.search-container');

    // Wrapper de conteúdo da página (varia por página: <main>, .produto
    // ou .carrinho-pagina — pega o primeiro que existir).
    const conteudoPagina =
        document.querySelector('main') ||
        document.querySelector('.produto') ||
        document.querySelector('.carrinho-pagina');


    // =====================================================
    // EMPURRAR A BARRA DE PESQUISA PARA BAIXO
    // Só em mobile/tablet (<= 896px) e só quando o
    // menu hambúrguer estiver aberto. Recalcula a altura
    // real do menu (que muda se o submenu FILTROS também
    // estiver aberto) para a busca nunca ficar em cima dele.
    //
    // Nem toda página tem barra de pesquisa (.search-container),
    // então essa função sai cedo quando ela não existe — sem
    // isso, o clique no hambúrguer/filtros quebrava com um erro
    // em qualquer página sem essa barra.
    // =====================================================

    function atualizarPosicaoBusca() {

        if (!searchContainer) {
            return;
        }

        if (window.innerWidth <= 896 && menuNavbar.classList.contains('active')) {

            const alturaMenu = menuNavbar.getBoundingClientRect().bottom;
            searchContainer.style.top = (alturaMenu + 15) + 'px';

        } else {

            // Volta pro valor padrão definido no CSS
            searchContainer.style.top = '';

        }

    }


    // =====================================================
    // EMPURRAR BUSCA + CONTEÚDO NO DESKTOP QUANDO O
    // SUBMENU "FILTROS" ABRE
    // -----------------------------------------------------
    // No desktop (> 896px) o submenu agora é uma barra
    // full-width, igual à navbar. Quando ela abre, empurra
    // a barra de pesquisa e o conteúdo da página pra baixo
    // (mesma altura do submenu) para não ficar tudo por
    // cima; quando fecha, tudo volta pra posição original.
    // =====================================================

    function atualizarEmpurraoConteudo() {

        // Essa lógica é só para desktop — no mobile o submenu
        // já empurra o próprio menu por conta própria (max-height),
        // então aqui a gente sempre reseta nesse caso.
        if (window.innerWidth <= 896) {

            if (searchContainer) {
                searchContainer.style.transform = '';
            }

            if (conteudoPagina) {
                conteudoPagina.style.transform = '';
            }

            return;

        }

        const abrindo = dropdown.classList.contains('active');

        if (!abrindo) {

            if (searchContainer) {
                searchContainer.style.transform = '';
            }

            if (conteudoPagina) {
                conteudoPagina.style.transform = '';
            }

            return;

        }

        // Altura real do submenu já aberto (o navegador só sabe
        // isso depois que display:flex é aplicado, então essa
        // função deve ser chamada DEPOIS do toggle da classe).
        const alturaSubmenu = submenu.getBoundingClientRect().height;

        if (searchContainer) {
            // Mantém a centralização horizontal (translateX -50%)
            // que já existe no CSS, só soma o deslocamento vertical.
            searchContainer.style.transform =
                `translate(-50%, ${alturaSubmenu}px)`;
        }

        if (conteudoPagina) {
            conteudoPagina.style.transform =
                `translateY(${alturaSubmenu}px)`;
        }

    }


    // =====================================================
    // MENU HAMBÚRGUER (continua só para mobile/tablet)
    // =====================================================

    menuToggle.addEventListener('click', (e) => {

        e.stopPropagation();

        menuToggle.classList.toggle('active');
        menuNavbar.classList.toggle('active');


        // Se fechar o menu hambúrguer,
        // também fecha o submenu
        if (!menuNavbar.classList.contains('active')) {
            dropdown.classList.remove('active');
        }

        atualizarPosicaoBusca();
        atualizarEmpurraoConteudo();

    });


    // =====================================================
    // ABRIR / FECHAR FILTROS
    // Agora funciona em QUALQUER largura de tela (desktop e mobile)
    // =====================================================

    dropbtn.addEventListener('click', (e) => {

        e.preventDefault();
        e.stopPropagation();

        // Primeiro clique = abre
        // Segundo clique = fecha
        dropdown.classList.toggle('active');

        // O submenu pode aumentar a altura do menu mobile.
        // Recalcula já (resposta rápida) e de novo após a
        // transição de max-height terminar (posição final exata).
        atualizarPosicaoBusca();
        setTimeout(atualizarPosicaoBusca, 700);

        // Empurra busca + conteúdo no desktop (a altura do
        // submenu já está disponível assim que a classe muda,
        // já que display:flex é aplicado de forma síncrona).
        atualizarEmpurraoConteudo();

    });


    // =====================================================
    // IMPORTANTE:
    // CLICAR DENTRO DO SUBMENU NÃO FECHA ANTES DA SELEÇÃO
    // =====================================================

    submenu.addEventListener('click', (e) => {

        // Impede o clique de subir até o document
        e.stopPropagation();

    });


    // =====================================================
    // LINKS DO SUBMENU
    // =====================================================

    const submenuLinks = submenu.querySelectorAll('a');


    submenuLinks.forEach(link => {

        link.addEventListener('click', () => {

            // O link é executado normalmente.
            // Não usamos preventDefault aqui.

            dropdown.classList.remove('active');

            if (window.innerWidth <= 896) {
                menuNavbar.classList.remove('active');
                menuToggle.classList.remove('active');
            }

            atualizarPosicaoBusca();
            atualizarEmpurraoConteudo();

        });

    });


    // =====================================================
    // CLICAR DENTRO DA NAVBAR NÃO FECHA O MENU MOBILE
    // (o dropdown já tem seu próprio stopPropagation acima)
    // =====================================================

    menuNavbar.addEventListener('click', (e) => {

        if (window.innerWidth <= 896) {
            e.stopPropagation();
        }

    });


    // =====================================================
    // CLICAR FORA FECHA O SUBMENU (desktop e mobile)
    // e também o menu hambúrguer (só mobile)
    // =====================================================

    document.addEventListener('click', () => {

        dropdown.classList.remove('active');

        if (window.innerWidth <= 896) {
            menuNavbar.classList.remove('active');
            menuToggle.classList.remove('active');
        }

        atualizarPosicaoBusca();
        atualizarEmpurraoConteudo();

    });


    // =====================================================
    // VOLTOU PARA DESKTOP
    // =====================================================

    window.addEventListener('resize', () => {

        if (window.innerWidth > 896) {

            menuNavbar.classList.remove('active');
            menuToggle.classList.remove('active');

        }

        atualizarPosicaoBusca();
        atualizarEmpurraoConteudo();

    });

});
