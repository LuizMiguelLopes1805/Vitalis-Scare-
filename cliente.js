document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const regiaoInput = document.getElementById('regiao');
    const notaInput = document.getElementById('nota');
    const generoInput = document.getElementById('genero');
    const idadeInput = document.getElementById('idade');
    const precoInput = document.getElementById('preco');
    const filterButton = document.querySelector('button');

    function filtrarFreelancers() {
        const searchValue = searchInput.value.toLowerCase();
        const regiaoValue = regiaoInput.value;
        const notaValue = notaInput.value;
        const generoValue = generoInput.value;
        const idadeValue = idadeInput.value;
        const precoValue = precoInput.value;

        const freelancers = document.querySelectorAll('#list li');
        
        freelancers.forEach(freelancer => {
            const funcao = freelancer.getAttribute('data-funcao').toLowerCase();
            const regiao = freelancer.getAttribute('data-regiao');
            const nota = freelancer.getAttribute('data-nota');
            const genero = freelancer.getAttribute('data-genero');
            const idade = freelancer.getAttribute('data-idade');
            const preco = freelancer.getAttribute('data-preco');

            let isMatch = true;

            if (searchValue && !funcao.includes(searchValue)) {
                isMatch = false;
            }

            if (regiaoValue !== 'todas' && regiao !== regiaoValue) {
                isMatch = false;
            }

            if (notaValue !== 'todas' && nota !== notaValue) {
                isMatch = false;
            }

            if (generoValue !== 'todos' && genero !== generoValue) {
                isMatch = false;
            }

            if (idadeValue && parseInt(idade) < parseInt(idadeValue)) {
                isMatch = false;
            }

            if (precoValue && parseFloat(preco) > parseFloat(precoValue)) {
                isMatch = false;
            }

            if (isMatch) {
                freelancer.style.display = 'block';
            } else {
                freelancer.style.display = 'none';
            }
        });
    }

    searchInput.addEventListener('input', filtrarFreelancers);
    filterButton.addEventListener('click', filtrarFreelancers);
    regiaoInput.addEventListener('change', filtrarFreelancers);
    notaInput.addEventListener('change', filtrarFreelancers);
    generoInput.addEventListener('change', filtrarFreelancers);
    idadeInput.addEventListener('input', filtrarFreelancers);
    precoInput.addEventListener('input', filtrarFreelancers);
});
