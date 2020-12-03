$(document).ready(function(){
    $(this).ajaxStart(function(){
        $("#carregando").removeClass("d-none")
        $("#carregando").addClass("d-block")
    })
    $(this).ajaxStop(function(){
        $("#carregando").removeClass("d-block")
        $("#carregando").addClass("d-none")
    })
   /*  $(this).ajaxError(function(){
        $("#carregando").removeClass("d-block")
        $("#carregando").addClass("d-none")
    }) */

    $(document).ajaxError(function () {
        console.log("Algum erro foi apresentado, verifique sua URL")
    })

})