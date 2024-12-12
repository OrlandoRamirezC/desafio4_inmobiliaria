import {propiedadesAlquiler} from "./data/propiedades.js"

const sectionAlquiler = document.querySelector('#propiedadesAlquiler')
let html = ''
for (let elemento of propiedadesAlquiler) {
    html += `<div class="elemento">
        <div class="ima"> <img src="${elemento.src}" alt="imagen"> </div>
        <h5> ${elemento.nombre} </h5>
        <p> ${elemento.descripcion} </p>
        <p> <i class="fas fa-map-marker-alt"></i> ${elemento.ubicacion} </p> 
        <p> <i class="fas fa-bed"></i> ${elemento.habitaciones} habitaciones | <i class="fas fa-bath"></i> ${elemento.baños} baños</p>
        <p> <i class="fas fa-dollar-sign"></i>${elemento.costo} </p>
        <p> <i class="fas ${elemento.smoke ? 'text-success fa-smoking' : 'text-danger fa-smoking-ban'} "></i>
        ${elemento.smoke ? '<span class="verde"> Se puede fumar </span>' : '<span class="rojo"> No se puede fumar </span>'} </p>
        <p> <i class="fas ${elemento.pets ? 'text-success fa-paw' : 'text-danger fa-ban'}"></i> 
        ${elemento.pets ?  '<span class="verde"> Se permiten mascotas </span>' : '<span class="rojo"> No se permiten mascotas </span>'}</p>
        </div>`
}
sectionAlquiler.innerHTML = html