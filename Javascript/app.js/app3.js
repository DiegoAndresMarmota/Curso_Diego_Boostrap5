// let nombreUsuario = "Diego";
// console.log("Bienvenido: \n" + nombreUsuario);
// console.log(`Bienvenido:  ${nombreUsuario}`)

// var nombreUser = "Diego"; //let no permita usar dos veces la misma variable
// var nombreUser = "Andres";
// console.log(nombreUser);

// var estado = true
// if (estado) {
//     console.log("Entró al If")
//     var estado = false
//     console.log(estado);
// }
// console.log(estado)

// for (let i = 0; i < 5; i++){
//     console.log(i);
// }
// console.log(i);

// const estado = true;
// estado = false;

// for (const i = 0; i < 5; i++){
//     console.log(i)
// }
// console.log(i)

// const estado = true
// if (estado) {
//     const estado = false
//     console.log(estado)
// }
//     console.log(estado)

const frutas = ["sandia", "pera", "uva", "melon"];
frutas.push("banana");
frutas.unshift("manzana");
const frutaEliminadaUlt = frutas.pop();
const frutaEliminadaPrim = frutas.shift()
console.log(frutas);
console.log(frutaEliminadaUlt);
console.log(frutaEliminadaPrim);
