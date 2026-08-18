document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const categoria = params.get('categoria');

    if (categoria) {
        aplicarFiltro(categoria);
    }

    document.querySelectorAll('.filtro-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const naIndex =
                window.location.pathname.endsWith('index.html') ||
                window.location.pathname === '/' ||
                window.location.pathname === '';

            if (naIndex) {
                e.preventDefault();

                const cat = link.dataset.categoria;

                aplicarFiltro(cat);

                const novaUrl = cat
                    ? `?categoria=${cat}`
                    : window.location.pathname;

                history.pushState({}, '', novaUrl);

                fecharMenuMobile();
            }
        });
    });

    /* O toggle do botão "Filtros" (.dropbtn) já é feito pelo
       navbar responsiva.js. Um segundo listener aqui alternava
       a mesma classe .active duas vezes no mesmo clique, o que
       cancelava o toggle e fazia o menu só aparecer via :hover
       do CSS, nunca "grudar" com o clique. */
});