$(function() {

    let scanner = new Instascan.Scanner({
        video: document.getElementById('preview'),
        continuous: true,
        mirror: false,
        captureImage: true,
        refractoryPeriod: 10000
    })
    scanner.addListener('scan', function(content, image) {
        /* var img = document.getElementById('img')
        img.src = image */

        var scanLink = document.getElementById('link')
        var divResultado = document.querySelector('.linkResult')
        divResultado.style.display = "block"
            /* scanLink.href = content */
        scanLink.value = content
    })
    Instascan.Camera.getCameras().then(function(cameras) {
        console.log(cameras[0].name);
        /* Verificação se Existe a camera */
        if (cameras.length > 0) {
            scanner.start(cameras[0])
                /* scanner.start(cameras[1]) */
            $('[name="option"]').on('change', function() {
                if ($(this).val() == 1) {
                    if (cameras[0] != "") {
                        scanner.start(cameras[0])
                    } else {
                        alert("Not front camera found!")
                    }
                } else if ($(this).val() == 2) {
                    if (cameras[1]) {
                        scanner.start(cameras[1])
                    } else {
                        alert("Not back camera found!")
                    }
                }
            })
        } else {
            console.error('No cameras found.');
            alert('No cameras found.');
        }
    }).catch(function(e) {
        console.error(e);
        alert(e);
    })

    $("#link").click(() => {
        $("#link").select()
        document.execCommand('copy')
    })
})
