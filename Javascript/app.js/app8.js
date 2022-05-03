nombre = "Merme"

const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    comer: function (alimento1) {
        console.log('Gato Comiendo: ' + alimento1)
    },
    comerDos(alimento2) {
        console.log(`
        ${gato.nombre} esta comiendo ${alimento2}  
        `)
    },
    comerTres() {
        this.enemigos.forEach((item) => console.log(item));
    },
};

gato.comer("raton");
gato.comerDos("pez");
gato.comerTres();