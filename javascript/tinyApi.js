$(document).ready(function() {
    $("#buttonEncurtarTINYLINK").click(function() {
        if (linkCompletoTINYLINK.value == "" || linkCompletoTINYLINK.value.length < 6) {
            /* Tratamento de Erro */
            $("#divErro").text(`Por favor, forneça um url válido.`).removeClass("d-none").slideDown("3000").delay("3000").slideUp("3000");
            console.log("Por favor, forneça um url válido.");
        } else {
            var fullLink = linkCompletoTINYLINK.value;
            $.get(`https://tinyurl.com/api-create.php?url=${fullLink }`, function(fullLink) {
               
            
            /* Limpando Div DO QrCOde */
                $("#receberQrCodeTiny").text("")
                var linkShortTINYLINK = fullLink;
                linkCurtoTiny.value = linkShortTINYLINK;
                AcessarLinkEncurtado.href = linkShortTINYLINK;
                $("#divLinkCopiarTINYLINK").slideDown("slow")
                    /* QR CODE Criador */
                $("#receberQrCodeTiny").qrcode({
                        text: linkShortTINYLINK
                    })
                    
                    
                    /* Criando Historico */
                let site, url;
                site = linkCompletoTINYLINK.value
                url = new URL(linkShortTINYLINK)
                localStorage.setItem(url, site)
                    /* Criando Historico */

                    
            })
        }
    })
    $("#copiarTINYLINK").click(function() {
        $("#linkCurtoTiny").select();
        document.execCommand("copy")
    })
});
