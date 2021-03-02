function criarQrCode() {
    $("#receberQrCode").html("")
    var textoInputQrCode = inputCriadorQrCode.value
    $("#receberQrCode").qrcode({
        text: textoInputQrCode
    })
}
