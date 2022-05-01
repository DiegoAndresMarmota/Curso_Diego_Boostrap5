// console.log("vinculado")
// let frutas = ["platano", "sandia", "pera", "uva"];
// console.log(frutas);
// console.log(frutas.length);
// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);
// console.log(frutas[3]);

// for (let i = 0; i < frutas.length; i++){
//     console.log(frutas[i]);
// }

// for (let fruta of frutas){
//     console.log(fruta);
// }

// let nombreUsuario = "Diego";
// let edad = 50;
// for (let letra of nombreUsuario) {
//     console.log(letra)
// }
function saludar(nombreUsuario) {
    return ("Bienvenido: "+ nombreUsuario)
//    console.log("Bienvenido: "+ nombreUsuario);
}
console.log(saludar("Diego"))

function sumar(n1, n2) {
    return parseInt(n1) + parseInt(n2)
}

let numbUno = prompt("Ingrese el primer número")
let numbDos = prompt("Ingrese el segundo número")
console.log(sumar(numbUno, numbDos))