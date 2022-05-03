//Propiedades CRUD

console.log("Vinculado")
const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    variados: {
        amigos: ["cobarde", "timido"],
        favoritos: {
            comida: {
                frio: "salmon",
                caliente: "pollo"
            },
        },
    },
};

const amigos = ["cobarde", "timido"]
console.log(amigos.push("panzon"))

console.log(gato.variados?.favoritos.comida.frio)
console.log(gato.variados?.amigos)

console.log(gato.nombre)
console.log(gato["nombre"]);
console.log(gato.duerme);
console.log(gato["enemigos"][0]);
console.log(gato.enemigos[0]);

gato.color = "azul";
console.log(gato);

gato.edad = 5;
console.log(gato);

delete gato.duerme;
console.log(gato);

if (gato.hasOwnProperty("edad")) {
    gato.nombre = "Flojera";
}
console.log(gato)
console.log(gato.hasOwnProperty("edad"));
