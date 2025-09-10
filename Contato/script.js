function enviar() {
    // Normaliza as bordas dos inputs
    document.getElementById('nome').style.border = "1px solid black";
    document.getElementById('telefone').style.border = "1px solid black";
    document.getElementById('assunto').style.border = "1px solid black";

    // Pega os valores digitados
    const name = document.getElementById('nome').value.trim();
    const email = document.getElementById('telefone').value.trim();
    const message = document.getElementById('assunto').value.trim();

    // Validação simples: se algum campo estiver vazio, marca em vermelho e sai da função
    let hasError = false;
    if (!name) {
        document.getElementById('nome').style.border = "2px solid red";
        hasError = true;
    }
    if (!email) {
        document.getElementById('telefone').style.border = "2px solid red";
        hasError = true;
    }
    if (!message) {
        document.getElementById('assunto').style.border = "2px solid red";
        hasError = true;
    }

    if (hasError) return;

    // Monta a mensagem para WhatsApp
    const texto = `Olá! Gostaria de entrar em contato.\n\nNome: ${name}\nEmail: ${email}\nMensagem: ${message}`;
    const textoEncode = encodeURIComponent(texto);

    // Redireciona para o WhatsApp com a mensagem pronta
    window.location.href = `https://wa.me/5541996505343?text=${textoEncode}`;
}