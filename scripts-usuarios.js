document.addEventListener('DOMContentLoaded', () => {
    const addUserForm = document.getElementById('addUserForm');
    const userList = document.getElementById('list');

    addUserForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const funcao = document.getElementById('funcao').value;

        const userItem = document.createElement('li');
        userItem.setAttribute('data-nome', nome);
        userItem.setAttribute('data-email', email);
        userItem.setAttribute('data-funcao', funcao);

        userItem.innerHTML = `<strong>${nome}</strong> - ${funcao}<p>Email: ${email}</p>`;

        userList.appendChild(userItem);

        addUserForm.reset();
    });
});
