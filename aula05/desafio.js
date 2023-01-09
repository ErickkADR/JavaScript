function verificar () {
    var pais = window.document.querySelector('input#itext')
    var res = window.document.querySelector('div#res')
    var nasc = (pais.value)
    res.innerHTML = `Você está vivendo no/a ${nasc}`
    if (nasc.toLowerCase() == 'brasil') {
        res.innerHTML += `<p>Já você vive no Brasil, você é brasileiro!!!</p>`
    }else {
        res.innerHTML += `<p> Já que você vive no/a ${nasc}, você é estrangeiro</p>`
    }
}