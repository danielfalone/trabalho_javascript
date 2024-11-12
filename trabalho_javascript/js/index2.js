// Referências aos elementos
const confirmationModal = document.getElementById('confirmationModal');
const confirmBtn = document.getElementById('registerBtn');
const cancelBtn = document.getElementById('loginBtn');
const closeBtn = document.getElementById('closeBtn');

// Redirecionar para a página de cadastro
registerBtn.addEventListener('click', function() {
    window.location.href = "/html/register.html";
    confirmationModal.style.display = 'none';
});

// Redirecionar para a página de login
loginBtn.addEventListener('click', function() {
    window.location.href = "/html/login.html";
    confirmationModal.style.display = 'none';
});

// Fechar o modal quando o botão "X" for clicado
closeBtn.addEventListener('click', function() {
  confirmationModal.style.display = 'none';
});