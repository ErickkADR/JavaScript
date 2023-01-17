 function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERROR] Verique os dados e tente novamente!!!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'man'
            if  (idade >= 0 && idade <= 6){
                img.setAttribute('src', '../ex015/images/babyma.jpg')
            }else if (idade <= 15) {
                img.setAttribute('src', '../ex015/images/criancam.jpg')
            }
            else if (idade <= 18) {
                img.setAttribute('src', '../ex015/images/jovemh.jpg')
            }
            else if (idade <= 50) {
                img.setAttribute('src', '../ex015/images/adulto.jpg')
            }else {
                img.setAttribute('src', '../ex015/images/homemvelho.jpg')
            }
        }else if (fsex[1].checked) {
            genero = 'woman'
            if  (idade >= 0 && idade <= 6){
                img.setAttribute('src', '../ex015/images/babyf.jpg')
            }else if (idade <= 15) {
                img.setAttribute('src', '../ex015/images/criancafe.jpg')
            }
            else if (idade <= 18) {
                img.setAttribute('src', '../ex015/images/jovemm.jpg')
            }
            else if (idade <= 50) {
                img.setAttribute('src', '../ex015/images/adulta.jpg')
            }else {
                img.setAttribute('src', '../ex015/images/idosa.jpg')
            }
        }   
        res.innerHTML = `We detected a ${genero} with ${idade} years.`
        res.appendChild(img)
    }
 }