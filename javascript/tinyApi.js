$(document).ready(function () {
    $("#buttonEncurtarTINYLINK").click(function () {
        /* click on Button */
        var fullLink = linkCompletoTINYLINK.value
        $.get(`https://tinyurl.com/api-create.php?url=${fullLink}`, function (shorturl) {
            var linkShortTINYLINK = shorturl
            linkCurtoTiny.value = linkShortTINYLINK
            AcessarLinkEncurtado.href = linkShortTINYLINK   
        $("#divLinkCopiarTINYLINK").slideDown("slow")
        })
    })
    /* Copy Link Final */
    $("#copiarTINYLINK").click(function(){
        $('#linkCurto').select();
        document.execCommand('copy')
    })
})