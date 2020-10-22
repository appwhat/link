/* Adicionando Classes e removendo */
$(document).ready(function(){
    $('#menuLinkId1').click(function(){
        $('#startchat').show(); 
        $('#pagEncurtar').hide();
        $('#menuLinkId2').removeClass("menulink2");
        $('#menuLinkId1').addClass("menulink1"); 
    });
});
/* Adicionando Classes e removendo */
$(document).ready(function(){
    $('#menuLinkId2').click(function(){
        $('#startchat').hide();
        $('#pagEncurtar').show();
        $('#menuLinkId1').removeClass("menulink1");
        $('#menuLinkId2').addClass("menulink2");
    });
});


/* Esconder Campo de Mensagem */
$(document).ready(function(){
    $("#abrircampo").click(function(){
      $("#menssagem").slideToggle("slow");
    });
  });

  $(document).ready(function(){
      $("#resultadolink").click(function(){
          $("#linkfinal").slideToggle("slow");
      })
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

$(function () {
    $('#limpar').click(function () {
          $("#linkfinal").slideToggle("slow");
        $('#linkFinal').select();
        $('#linkfinal').focus();
        var selecionar = document.execCommand('selectAll');
        var limpar = document.execCommand('delete');
    })
});