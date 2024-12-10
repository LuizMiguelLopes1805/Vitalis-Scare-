document.addEventListener('DOMContentLoaded', function() {
    const historicoList = document.getElementById('historicoList');

    
    const historico = [
        { data: '01/01/2024', descricao: 'Consulta com Dr. João' },
        { data: '02/01/2024', descricao: 'Recebimento de resultado de exame' },
        { data: '03/01/2024', descricao: 'Vacinação contra gripe' },
        { data: '04/01/2024', descricao: 'Consulta de retorno' },
        { data: '05/01/2024', descricao: 'Agendamento de fisioterapia' }
        
    ];

    
    historico.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.data}: ${item.descricao}`;
        historicoList.appendChild(li);
    });
});
