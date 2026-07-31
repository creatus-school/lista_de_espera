// Lógica do Carrossel de Vídeos
document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('video-track');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');

    const scrollAmount = 350;

    if (btnNext && btnPrev && track) {
        btnNext.addEventListener('click', () => {
            track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });

        btnPrev.addEventListener('click', () => {
            track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
    }
});

// Lógica do Formulário de Espera com Google Sheets
document.getElementById('form-espera').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const btn = this.querySelector('button');

    const textoOriginal = btn.innerText;
    btn.innerText = 'Enviando...';

    // COLE A SUA NOVA URL DO GOOGLE APPS SCRIPT AQUI
    const scriptURL = 'https://script.google.com/macros/s/AKfycbz4_L3lTWbCokyv7ZMT67BClDAxkmg2lbNUKXtqido/dev';

    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('email', email);
    formData.append('whatsapp', whatsapp);

    fetch(scriptURL, { method: 'POST', body: formData, mode: 'no-cors' })
        .then(() => {
            alert(`Excelente, ${nome}! Você foi adicionado à lista de espera VIP.`);
            this.reset(); // Limpa todos os campos de uma vez
            btn.innerText = textoOriginal;
        })
        .catch(error => {
            alert('Houve um erro ao enviar. Tente novamente.');
            btn.innerText = textoOriginal;
        });
});
