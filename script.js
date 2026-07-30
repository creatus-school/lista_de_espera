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