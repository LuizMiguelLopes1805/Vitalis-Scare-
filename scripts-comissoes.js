document.addEventListener('DOMContentLoaded', function() {
    const comissoesList = document.getElementById('comissoesList');

   
    const comissoes = [
        { data: '10/01/2024', descricao: 'Consulta com Dr. Ana' },
        { data: '15/01/2024', descricao: 'Exame de sangue' },
        { data: '20/01/2024', descricao: 'Consulta de retorno com Dr. Pedro' },
        { data: '25/01/2024', descricao: 'Sessão de fisioterapia' },
        { data: '30/01/2024', descricao: 'Consulta com nutricionista' }
       
    ];

    
    comissoes.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.data}: ${item.descricao}`;
        comissoesList.appendChild(li);
    });
});
