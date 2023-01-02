var corpo = window.document.body
var p1 = window.document.getElementsByTagName('p')[1]
var d = window.document.getElementById('msg')
d.style.background = 'green'
d.innerText = 'Estou aguardando...'
window.alert(p1.innerHTML)