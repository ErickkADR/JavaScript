var a = window.document.getElementById('area')

a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar () {
    a.innerHTML = 'Clicou!!!'
    a.style.background = 'red'
}
function entrar () {
    a.innerHTML = 'Entrou!!!'
    a.style.background = 'orange'
}
function sair () {
    a.innerHTML = 'Saiu!!!'
    a.style.background = 'yellow'
}