// Referências aos elementos
const confirmationModal = document.getElementById('confirmationModal');
const confirmBtn = document.getElementById('confirmBtn');
const cancelBtn = document.getElementById('cancelBtn');
const closeBtn = document.getElementById('closeBtn');

// Fechar o modal quando o botão "Não" for clicado
cancelBtn.addEventListener('click', function() {
    window.location.href = "/html/index2.html";
    confirmationModal.style.display = 'none';
});

// Ação de confirmar - redireciona para a próxima notificação
confirmBtn.addEventListener('click', function() {
    window.location.href = "/html/index2.html";
    confirmationModal.style.display = 'none';
});

// Fechar o modal quando o botão "X" for clicado
closeBtn.addEventListener('click', function() {
  confirmationModal.style.display = 'none';
});