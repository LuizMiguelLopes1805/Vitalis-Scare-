document.addEventListener('DOMContentLoaded', function() {
    const clientesAtendidos = document.getElementById('clientesAtendidos');
    const clientesPendentes = document.getElementById('clientesPendentes');
    const feedbackRecentes = document.getElementById('feedbackRecentes');
    const relatoriosAtividade = document.getElementById('relatoriosAtividade');
    const feedbackList = document.getElementById('feedbackList');

    // Dados fictícios para estatísticas
    const clientes = [
        { nome: 'Cliente 1', atendido: true, feedback: 'Excelente serviço!', relatorio: 'Atividade 1' },
        { nome: 'Cliente 2', atendido: true, feedback: 'Muito bom!', relatorio: 'Atividade 2' },
        { nome: 'Cliente 3', atendido: false, feedback: '', relatorio: '' },
        { nome: 'Cliente 4', atendido: true, feedback: 'Satisfatório.', relatorio: 'Atividade 3' },
        { nome: 'Cliente 5', atendido: false, feedback: '', relatorio: '' },
        { nome: 'Cliente 6', atendido: true, feedback: 'Podia ser melhor.', relatorio: 'Atividade 4' },
        { nome: 'Cliente 7', atendido: true, feedback: 'Serviço incrível!', relatorio: 'Atividade 5' },
        { nome: 'Cliente 8', atendido: true, feedback: 'Muito profissional.', relatorio: 'Atividade 6' },
        { nome: 'Cliente 9', atendido: false, feedback: '', relatorio: '' },
        { nome: 'Cliente 10', atendido: true, feedback: 'Altamente recomendável.', relatorio: 'Atividade 7' },
        { nome: 'Cliente 11', atendido: false, feedback: '', relatorio: '' },
        { nome: 'Cliente 12', atendido: true, feedback: 'Gostei bastante.', relatorio: 'Atividade 8' },
        { nome: 'Cliente 13', atendido: true, feedback: 'Atendimento rápido e eficiente.', relatorio: 'Atividade 9' },
        { nome: 'Cliente 14', atendido: false, feedback: '', relatorio: '' },
        { nome: 'Cliente 15', atendido: true, feedback: 'Muito atenciosos.', relatorio: 'Atividade 10' }
        // Adicione mais clientes conforme necessário
    ];

    const atendidos = clientes.filter(cliente => cliente.atendido);
    const pendentes = clientes.filter(cliente => !cliente.atendido);
    const feedbacks = atendidos.filter(cliente => cliente.feedback);

    clientesAtendidos.textContent = atendidos.length;
    clientesPendentes.textContent = pendentes.length;
    feedbackRecentes.textContent = feedbacks.length;
    relatoriosAtividade.textContent = atendidos.length; // Usando número de atendidos como placeholder

    // Atualização dos feedbacks
    feedbacks.forEach(cliente => {
        const li = document.createElement('li');
        li.textContent = `${cliente.nome}: ${cliente.feedback}`;
        feedbackList.appendChild(li);
    });
});
