/* Esconder Campo de Mensagem e emoticons*/
$(document).ready(() => {
    /* -ChamadaAJaxDePartedoBody */   
    $.ajax({ url: "componentNumber.html", success: function(resultado){ $("#receber").html(resultado)}})
    /* ChamandoEmojis */
    $.ajax({ url: "componentEmojis.html", success: function (result) {$("#recebEmo").html(result)}});

    
 /* slideToggle Requisição Ajax dos Emojis Fim*/
    $("#abrircampoEmo").click(() =>{
        $("#recebEmo").slideToggle("slow");
    });

        
    $("#abrircampo").click(() => {
        /* Divs Toggadas */
            $("#menssagem, #abrircampoEmo, #iconeIniciarCnversar").slideToggle("slow");
            /* $("#abrircampoEmo").slideToggle("slow"); */
            /* $("#iconeIniciarCnversar").slideToggle("slow"); */
            $("#recebEmo").slideUp("slow");
        });
    /* Esconder Campo Link Final*/
    $("#resultadolink").click(() => {
        $("#linkfinal").slideToggle("slow");
    })
    /* Copiar e Colar */
    $(function () {
        $("#copiar").click(() => {
            $("#linkfinal").slideToggle("slow");
            $('#linkfinal').select();
            var selecionar = document.execCommand('selectAll');
            var copiar = document.execCommand('copy');
        });
    });

    
    /* Encurtar URL */
    $("#copyIdShort").click(() => {
        var pegarLink = $("#linkfinal").val();
        /*ShortLInk*/
        $.getJSON("https://is.gd/create.php?callback=?", {
            url: pegarLink,
            format: "json"
        }).done(function (data) {
            linkfinal.innerHTML = data.shorturl;
        })
        copyIdShort.classList.remove("d-block");
        copyIdShort.classList.add("d-none");
    });

    copyIdShort.classList.remove("d-block");
    copyIdShort.classList.add("d-none");

 
});
/*
    $(function () {
        $('#limpar').click(function () {
              $("#linkfinal").slideToggle("slow");
            $('#linkFinal').select();
            $('#linkfinal').focus();
            var selecionar = document.execCommand('selectAll');
            var limpar = document.execCommand('delete');
        })
    }); */
