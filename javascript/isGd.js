$(document).ready(function () {

    $("#buttonEncurtarISGD").click(function () {
        if (linkCompleto2.value == "" || linkCompleto2.value.length < 6) {
            console.log("URL Invalida")
        } else {
            var longoURL = linkCompleto2.value

            $.getJSON("https://is.gd/create.php?callback=?", {
                url: longoURL,
                format: "json"
            }).done(function (data) {
                if(data.shorturl == undefined){
                    console.log("URL Invalida")
                }else{
                linkCurtoISGD.value = data.shorturl
                $("#divLinkCopiarIsGd").slideDown("slow")
                AcessarLinkEncurtadoISGD.href = data.shorturl}
            })
        }
    })

    $("#copiarTimiLinkISGD").click(function () {
        $("#linkCurtoISGD").select()
        document.execCommand('copy')
    })


})
