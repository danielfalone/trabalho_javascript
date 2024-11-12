// Referência dos elementos
const helpButton = document.getElementById("helpButton");
const chatWindow = document.getElementById("chatWindow");
const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
const sendButton = document.getElementById("sendButton");

// Abre/Fecha o chat ao clicar no botão de ajuda
helpButton.addEventListener("click", () => {
  chatWindow.style.display = chatWindow.style.display === "none" ? "block" : "none";
});

// Função para enviar mensagem
function sendMessage() {
  const userMessage = chatInput.value;
  if (userMessage.trim() !== "") {
    const userMessageElement = document.createElement("p");
    userMessageElement.innerHTML = "<strong>Você:</strong> " + userMessage;
    chatMessages.appendChild(userMessageElement);
    chatInput.value = "";

    // Rolagem automática para a última mensagem
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Resposta automática do bot (apenas exemplo)
    setTimeout(() => {
      const botResponse = document.createElement("p");
      botResponse.innerHTML = "<strong>Bot:</strong> Estou aqui para ajudar!";
      chatMessages.appendChild(botResponse);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
  }
}

// Enviar mensagem ao clicar no botão "Enviar"
sendButton.addEventListener("click", sendMessage);

// Enviar mensagem ao pressionar "Enter"
chatInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});