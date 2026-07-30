document.getElementById('form-espera').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;

    // Aqui você poderá integrar com sua API ou serviço de e-mail no futuro
    alert(`Excelente! O e-mail ${email} foi adicionado à lista de espera VIP. Em breve entraremos em contato.`);

    // Limpa o campo após o envio
    this.reset();
});