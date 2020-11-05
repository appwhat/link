/* Esconder Campo de Mensagem e emoticons*/
$(document).ready(function () {
    $("#abrircampo").click(function () {
        $("#menssagem").slideToggle("slow");
        $("#emoticons").slideToggle("slow");
    });
    /* Esconder Campo Link Final*/
    $("#resultadolink").click(function () {
        $("#linkfinal").slideToggle("slow");
    })
    /* Copiar e Colar */
    $(function () {
        $("#copiar").click(function () {
            $("#linkfinal").slideToggle("slow");
            $('#linkfinal').select();
            var selecionar = document.execCommand('selectAll');
            var copiar = document.execCommand('copy');
        });
    });

    
    /* Encurtar URL */
    $("#copyIdShort").click(function () {
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

    /* Requisição Ajax dos Emoticons*/
    $.ajax({
        url: "emoticons.html", success: function (result) {
            $("#recebEmo").html(result)
        }
    });

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
