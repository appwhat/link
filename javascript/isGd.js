$(document).ready(function () {
   
    $("#buttonEncurtarISGD").click(function () {
         if(linkCompleto2.value == ""){
        console.log("Campo Invalido")
    }else{
        var longoURL = linkCompleto2.value

        $.getJSON("https://is.gd/create.php?callback=?", {
            url: longoURL,
            format: "json"
        }).done(function (data) {
            linkCurtoISGD.value = data.shorturl
            $("#divLinkCopiarIsGd").slideDown("slow")
            AcessarLinkEncurtadoISGD.href = data.shorturl
        })
    }
    })

    $("#copiarTimiLinkISGD").click(function(){
        $("#linkCurtoISGD").select()
        document.execCommand('copy')
    })
    

})