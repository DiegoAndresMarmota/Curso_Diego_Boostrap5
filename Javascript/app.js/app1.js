//let resultado = true && true && true
// console.log(resultado);

// let resultado1 = true || false &&  true
// console.log(resultado1);

// let resultado2 = !false &&  false
// console.log(resultado2);

// let stringUsuario = prompt('Escriba "Javascript"')
// if (stringUsuario === 'Javascript') {
//     console.log('correcto')
// }
// else {
//     console.log('false')
// }

// let numUsuario = parseInt(prompt('Ingrese un numero del 1 al 10'));
// if (numUsuario <= 10) {
//     console.log('Perfecto');
// }
// else {
//     console.log('Lo siento. No es un nº del 1 al 10');
// }

// let opcionUsuario = prompt(`
// Elija una opción:
// 1: Libros
// 2: Películas
// 3: Juegos`);
// console.log(opcionUsuario)

// switch (opcionUsuario) {
//     case '1':
//         console.log('principito')
//     break;
//     case '2':
//         console.log('Matriz')
//     break;
//     case '3':
//         console.log('NFS')
//     break;
//     default:
//         console.log('Opcion no válida')
//     break}
// let numero = 1;
// while (numero <= 10) {
//     console.log(numero);
//     //numero = numero + 1
//     numero++;
// }
// console.log('Fin del ciclo' + numero);


let numeroMaquina = Math.floor(Math.random() * (10 - 1)) + 1;
    console.log(numeroMaquina);
let numeroUser = parseInt(prompt("Adivine número del 1 al 10"));

let vidas = 3;

while (numeroMaquina !== numeroUser && vidas > 1) {

    let mensaje = (numeroMaquina>numeroUser) ? 'El numeroMaquina es mayor' : 'El numeroMaquina es menor'
    console.log('Te equivocaste.' +'Te quedan: ' + vidas + ' vidas')

if (numeroMaquina < numeroUser) {
        console.log("Es más bajo");
    } else {
        console.log("Es más alto");
    }

    vidas--;
    numeroUser = parseInt(prompt("Vuelve a intentarlo, tus vidas: " + vidas));
}

if (numeroMaquina === numeroUser) {
    console.log("GANASTE");
} else {
    console.log("PERDISTE, el número era: " + numeroMaquina);
}