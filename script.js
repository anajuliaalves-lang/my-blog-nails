const toggleBtn = document.getElementById('toggle-theme');

toggleBtn.addEventListener('click', () => {
    // Alterna a classe dark-theme no body
    document.body.classList.toggle('dark-theme');

    // Atualiza o texto do botão de acordo com o tema atual
    if (document.body.classList.contains('dark-theme')) {
        toggleBtn.textContent = 'Modo Claro ☀️';
    } else {
        toggleBtn.textContent = 'Modo Escuro 🌙';
    }
});