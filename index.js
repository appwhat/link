
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

    copiar.value="Copiar"; // Mudar o valor copiar
    if(copiar.value == "Copiar"){
        copiar.classList.add("btnCriar");
        copiar.classList.remove("btniniciar");
        }

};

function copiado(){
    copiar.value="Copiado";
    if(copiar.value == "Copiado"){
    copiar.classList.remove("btnCriar");
    copiar.classList.add("btniniciar");
    }
    
}

