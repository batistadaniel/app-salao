function mostrarsenha() {
    // Obtém o campo de senha pelo ID
    var senha = document.getElementById('senha');
    // Obtém o botão de mostrar/esconder senha pelo ID
    var btnsenha = document.getElementById('btn-senha');

    // Verifica o tipo atual do campo de senha
    if (senha.type === 'password') {
        // Altera o tipo do campo para texto para mostrar a senha
        senha.setAttribute('type', 'text');
        // Substitui o ícone de olho aberto por olho fechado
        btnsenha.classList.replace('bi-eye', 'bi-eye-slash');
    } else {
        // Altera o tipo do campo para senha para esconder a senha
        senha.setAttribute('type', 'password');
        // Substitui o ícone de olho fechado por olho aberto
        btnsenha.classList.replace('bi-eye-slash', 'bi-eye');
    }
}