const nombre = "Merme"

const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    get nombreMayuscula() {
        return this.nombre.toUpperCase();
    },
    set agregarEnemigo(nuevoAmigo) {
        this.enemigos.push(nuevoAmigo);
    },
};

//console.log(gato.nombreMayuscula)
gato.agregarEnemigo = "Batman";
console.log(gato);

let a = "Hola";
let b = a;
a = "chao"
console.log(b);

let c = ["hola"]
let d = c;

c.push("chao")
console.log(d)