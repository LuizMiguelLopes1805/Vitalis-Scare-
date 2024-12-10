document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('configForm');
    const body = document.body;
    const header = document.querySelector('header');
    const notificacoesSelect = document.getElementById('notificacoes');
    const temaSelect = document.getElementById('tema');

    // Carregar configurações salvas do localStorage
    const savedNotificacoes = localStorage.getItem('notificacoes');
    const savedTema = localStorage.getItem('tema');

    if (savedNotificacoes) {
        notificacoesSelect.value = savedNotificacoes;
    }

    if (savedTema) {
        temaSelect.value = savedTema;
        aplicarTema(savedTema);
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const notificacoes = notificacoesSelect.value;
        const tema = temaSelect.value;

        // Salvar configurações no localStorage
        localStorage.setItem('notificacoes', notificacoes);
        localStorage.setItem('tema', tema);

        aplicarTema(tema);

        alert(`Configurações salvas:\nNotificações: ${notificacoes}\nTema: ${tema}`);
    });

    function aplicarTema(tema) {
        if (tema === 'escuro') {
            body.classList.add('escuro');
            header.classList.add('escuro');
        } else {
            body.classList.remove('escuro');
            header.classList.remove('escuro');
        }
    }
});
