document.addEventListener('DOMContentLoaded', () => {

    const menuToggle = document.getElementById('menuToggle');
    const menuNavbar = document.getElementById('menuNavbar');
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = document.querySelector('.dropbtn');
    const submenu = document.querySelector('.submenu');
    const searchContainer = document.querySelector('.search-container');


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

    });

});