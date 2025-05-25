// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Funcionalidade das Abas (para a página de perfil)
    const tabButtons = document.querySelectorAll('.tab-button');
    const postsContent = document.getElementById('posts-content');
    const informationContent = document.getElementById('information-content');

    if (tabButtons.length > 0 && postsContent && informationContent) {
        tabButtons.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove a classe ativa de todas as abas e adiciona inativa
                tabButtons.forEach(t => {
                    t.classList.remove('tab-active');
                    t.classList.add('tab-inactive');
                });
                // Adiciona a classe ativa à aba clicada e remove inativa
                tab.classList.add('tab-active');
                tab.classList.remove('tab-inactive');

                // Mostra/Esconde o conteúdo correspondente
                if (tab.dataset.tab === 'posts') {
                    postsContent.classList.remove('hidden');
                    informationContent.classList.add('hidden');
                } else if (tab.dataset.tab === 'information') {
                    postsContent.classList.add('hidden');
                    informationContent.classList.remove('hidden');
                }
            });
        });

        // Simula o clique na primeira aba ("Posts") ao carregar a página de perfil
        // para exibir seu conteúdo por padrão, se ela existir.
        const defaultActiveTab = document.querySelector('.tab-button[data-tab="posts"]');
        if (defaultActiveTab) {
            defaultActiveTab.click();
        }
    }

    // Funcionalidade dos Filtros (para a página explorar)
    const filterButtons = document.querySelectorAll('.filter-button');
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => {
                    btn.classList.remove('filter-button-active');
                    btn.classList.add('filter-button-inactive');
                });
                button.classList.add('filter-button-active');
                button.classList.remove('filter-button-inactive');
                
                // Aqui você adicionaria a lógica para filtrar os cards
                // const filterValue = button.dataset.filter;
                // console.log('Filtrar por:', filterValue);
            });
        });
         // Ativa o primeiro botão de filtro por padrão
        const defaultActiveFilter = document.querySelector('.filter-button');
        if (defaultActiveFilter) {
            defaultActiveFilter.classList.add('filter-button-active');
            defaultActiveFilter.classList.remove('filter-button-inactive');
        }
    }
});
