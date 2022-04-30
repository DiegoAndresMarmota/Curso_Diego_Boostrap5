let resultado = true && true && true
console.log(resultado);

let resultado1 = true || false &&  true
console.log(resultado1);

let resultado2 = !false &&  false
console.log(resultado2);

let stringUsuario = prompt('Escriba "Javascript"')
if (stringUsuario === 'Javascript') {
    console.log('correcto')
}
else {
    console.log('false')
}

let numUsuario = parseInt(prompt('Ingrese un numero del 1 al 10'));
if (numUsuario <= 10) {
    console.log('Perfecto'); 
}
else {
    console.log('Lo siento. No es un nº del 1 al 10');
}

let opcionUsuario = prompt(`
Elija una opción:
1: Libros
2: Películas
3: Juegos`);
console.log(opcionUsuario)