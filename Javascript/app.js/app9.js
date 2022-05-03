const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"]
};

// for (let propiedad in gato) {
//     console.log(gato[propiedad]);
// }

const { nombre : nombreSuperGato, vigila: Vigilante = "No Vigila", edad } = gato;
console.log(nombreSuperGato, Vigilante, edad)

console.log(Object.values(gato));
Object.values(gato).forEach((item) => console.log(item));

const apodoGato = gato.nombre
console.log(apodoGato)