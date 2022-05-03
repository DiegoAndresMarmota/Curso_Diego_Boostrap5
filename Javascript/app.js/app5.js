
//funcion declarativa

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(randomNumber(5,21))

//funcion expresada

const numberAzar = function (max, min) {
    return Math.floor(Math.random() * (max - min)) + min;    
}
console.log(numberAzar(100, 201))

//Funciones de Flecha

const azarFlecha = (min =1, max =100) => (Math.floor(Math.random() * (max - min)) + min);
//const azarFlecha = max => (Math.floor(Math.random() * (max - 1)) + 1);     
console.log(azarFlecha())
//console.log(azarFlecha(null,10))