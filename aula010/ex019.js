let valores = [1,4,8,2,3,5,7]


for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`)
}

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`)
}