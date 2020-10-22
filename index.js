
function criarLink() {
    var numero = document.querySelector("#number").value;
    numero = numero.replace(/\D/g, ''); //REGEX Deixar Apenas Numeros
    // Verificar se Tem o DDI do Pais
    //numero.trim(); // Tirar espaço antes e depois
    if (numero.length < 13) {
        numero = "55" + numero;
    }
    var texto = document.querySelector("#menssagem").value;
    texto = window.encodeURIComponent(texto);
    let resultado = `https://api.whatsapp.com/send?phone=${numero}&text=${texto}`;
    linkfinal.innerHTML = resultado;

    iniciarconversa.href= resultado;
    
};


