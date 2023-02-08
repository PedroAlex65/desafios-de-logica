// Crie uma função que a cada vez que for chamada vai imprimir uma mensagem diferente

let array = ["Olá", "Tudo bem?","Como está?", "Bom Dia", "Boa Noite"]


function randomArray(){

    const value = Math.trunc((Math.random() *5)+0)
    console.log(array[value])
}

randomArray()

