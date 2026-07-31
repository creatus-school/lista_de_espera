// Lógica do Formulário de Espera
document.getElementById('form-espera').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;

    // Aqui você poderá integrar com sua API ou serviço de e-mail no futuro
    alert(`Excelente! O e-mail ${email} foi adicionado à lista de espera VIP. Em breve entraremos em contato.`);

    // Limpa o campo após o envio
    this.reset();
});

// Lógica do Carrossel de Vídeos
document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('video-track');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');

    // Define o quanto a tela vai rolar a cada clique (largura do card + gap)
    const scrollAmount = 350; 

    // Verifica se os elementos existem na página antes de adicionar os cliques
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

    // Captura os valores dos 3 campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const btn = this.querySelector('button');

    const textoOriginal = btn.innerText;
    btn.innerText = 'Enviando...';

    // COLE A SUA NOVA URL DO GOOGLE APPS SCRIPT AQUI
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzmFCBDx9SuAs44tNq1Pc9HVYw_4OalLhaV_YhaNK5CPLeFA0RZToSYDICydfQbWecm/exec';

    // Prepara os dados para envio
    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('email', email);
    formData.append('whatsapp', whatsapp);

    // Envia para a planilha
    fetch(scriptURL, { method: 'POST', body: formData, mode: 'no-cors' })
        .then(() => {
            alert(`Excelente, ${nome}! Você foi adicionado à lista de espera VIP.`);
            this.reset(); // Limpa o formulário
            btn.innerText = textoOriginal;
        })
        .catch(error => {
            alert('Houve um erro ao enviar. Tente novamente.');
            btn.innerText = textoOriginal;
        });
});
