
function getLinkWA() {
    /* Get Value of Input */
    var numero = document.querySelector("#number").value;
    /*  */
    if (numero.length < 9) {
        numberErro.classList.add("text-danger")
    } else {
        numberErro.classList.remove("text-danger")
        iniciarconversa.classList.add("d-block");
        resultadolink.classList.add("d-block");
        copiar.classList.add("d-block");
        copyIdShort.classList.add("d-block");
        numero = numero.replace(/\D/g, ''); //REGEX Only Number
        if (numero.length < 13) {
            numero = "55" + numero;
        }
        /* Get value of menssage */
        var texto = document.querySelector("#menssagem").value;
        /* Translate Of Value Message For Enode+ */
        texto = window.encodeURIComponent(texto);
        let resultado = `https://api.whatsapp.com/send?phone=${numero}&text=${texto}`;
        linkfinal.innerHTML = resultado;
        /* Button Open Chat */
        iniciarconversa.href = resultado;
    }

};
