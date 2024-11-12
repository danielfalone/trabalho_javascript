document.addEventListener('DOMContentLoaded', function () {
  // Seleciona o formulário
  const form = document.getElementById('meuFormulario');

  // Adiciona um evento de submit
  form.addEventListener('submit', function (event) {
    // Impede o envio padrão se o formulário for inválido
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      // Se o formulário for válido, redireciona para outra página
      event.preventDefault(); // Evita o envio padrão do formulário para redirecionar
      window.location.href = '/html/login.html'; 
  }

    // Adiciona a classe 'was-validated' para mostrar os feedbacks
    form.classList.add('was-validated');
  });
});

// Limpa os campos e mostra os feedbacks
function limparCampos() {
  document.getElementById('meuFormulario').reset();
};