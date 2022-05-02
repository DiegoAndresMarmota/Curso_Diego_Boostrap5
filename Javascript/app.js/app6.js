const carritoCompras = []

const producto = prompt("-La Botica de la Estrella- \n" + "Bienvenido, Qué desea comprar?")

carritoCompras.push(producto);


while (confirm("Desea agregar otro producto a su carrito de compras")) {
    const producto = prompt("Qué producto deseas comprar?")
    carritoCompras.push(producto);
}
    
console.log("Compraste: ")

// for (const producto of carritoCompras) {
//     console.log(producto)
// }

carritoCompras.forEach((producto, index) => {
    console.log(`${index}: ${producto}`);
    //console.log(producto);
})