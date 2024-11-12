// Selecionando o elemento de áudio
const audio = document.getElementById("audio");
const playPauseButton = document.getElementById("play-pause");
const progressBar = document.getElementById("progress");

// Função para alternar entre play e pause
function togglePlay() {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = "Pause";
    } else {
        audio.pause();
        playPauseButton.textContent = "Play";
    }
}

// Função para parar o áudio e resetar
function stopAudio() {
    audio.pause();
    audio.currentTime = 0; // Reseta o tempo para o início
    playPauseButton.textContent = "Play";
}

// Função para ajustar o volume
function setVolume(value) {
    audio.volume = value;
}

// Atualiza a barra de progresso enquanto o áudio toca
audio.addEventListener("timeupdate", () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
});

// Permite ao usuário mudar a posição do áudio através da barra de progresso
function seekAudio(value) {
    audio.currentTime = (value / 100) * audio.duration;
}

// Reseta o botão play quando o áudio termina
audio.addEventListener("ended", () => {
    playPauseButton.textContent = "Play";
    progressBar.value = 0;
});
