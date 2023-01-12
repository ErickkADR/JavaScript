function carregar () {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()

    msg.innerHTML = `now it's ${hora}:${minuto}`
    if (hora >= 0 && hora < 12) {
        img.src = '../ex014/images/manhã.jpg'
        document.body.style.background = '#3C540A'
    }else if (hora >= 12 && hora <= 18){
        img.src = '../ex014/images/tarde.jpg'
        document.body.style.background = '#b9846f'
    }else {
        img.src = '../ex014/images/noite.jpg'
        document.body.style.background = '#002B39'
    }
}