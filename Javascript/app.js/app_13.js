const lista = document.querySelector('#lista');

const arrayPaises = ["Peru", "Bolivia", "Colombia"]
// arrayPaises.forEach(pais => {
//     const li = document.createElement('li');
//     li.textContent = pais;
//     lista.appendChild(li)
//     });

// const li = document.createElement('li');
// li.textContent = 'Elemento desde Js';
// console.log(li);

// lista.appendChild(li)

arrayPaises.forEach(pais => {
    lista.innerHTML += `<li>${pais}</li>`
})