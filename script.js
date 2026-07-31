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
