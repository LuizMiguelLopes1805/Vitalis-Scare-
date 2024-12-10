document.addEventListener("DOMContentLoaded", function() {
    const comissoes = [
        { periodo: "Novembro 2024", total: "R$ 500,00", detalhes: "Comissão por serviços X" },
        { periodo: "Dezembro 2024", total: "R$ 700,00", detalhes: "Comissão por serviços Y" }
    ];

    function populateCommissions() {
        const commissionElement = document.querySelector(".commission-list");
        commissionElement.innerHTML = comissoes.map(item => `
            <div class="commission-item">
                <strong>Período:</strong> ${item.periodo} <br>
                <strong>Total:</strong> ${item.total} <br>
                <strong>Detalhes:</strong> ${item.detalhes}
            </div>
        `).join("");
    }

    populateCommissions();
});
