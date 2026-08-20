document.addEventListener('DOMContentLoaded', () => {
    const voiceBtn = document.getElementById('voice-search-btn');
    const searchInput = document.getElementById('search');

    if (!voiceBtn || !searchInput) return;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        console.warn('Reconhecimento de voz não suportado neste navegador.');
        voiceBtn.style.display = 'none';
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'pt-BR';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.addEventListener('start', () => {
        voiceBtn.classList.add('listening');
    });

    recognition.addEventListener('end', () => {
        voiceBtn.classList.remove('listening');
    });

    recognition.addEventListener('result', (event) => {
        const transcript = event.results[0][0].transcript;
        searchInput.value = transcript;
        // dispara o evento 'input' para acionar o filtro do catálogo, se ele escutar esse evento
        searchInput.dispatchEvent(new Event('input', { bubbles: true }));
    });

    recognition.addEventListener('error', (event) => {
        console.error('Erro no reconhecimento de voz:', event.error);
        voiceBtn.classList.remove('listening');
    });

    voiceBtn.addEventListener('click', () => {
        recognition.start();
    });
});