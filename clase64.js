const gatos = [
    {
        name: "Rodolfo",
        shortDesc: "Tiene 4 años, le gusta perseguir mariposas, se lleva bien con niños y con otros gatos.",
        longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
        img: "http://www.placekitten.com/400"
    },

    {
        name: "Muzzarella",
        shortDesc: "Muy dulce y mimosa. Tiene seis dedos en una pata que asegura le dan superpoderes.",
        longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
        img: "http://www.placekitten.com/500"
    },

    {
        name: "Artilugia",
        shortDesc: "Muy activa y juguetona. Se lleva bien con perros. Ideal para casa con jardin amplio",
        longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
        img: "http://www.placekitten.com/600"
    },

    {
        name: "Wosito",
        shortDesc: "Vivio toda su vida en la calle y todavia se asombra de cosas como estufas y escaleras.",
        longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
        img: "http://www.placekitten.com/700"
    },

    {
        name: "Calamardo",
        shortDesc: "Dicen que de noche, cuando nadie lo puede escuchar, invoca a Cthulu. Muy mimoso.",
        longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
        img: "http://www.placekitten.com/700"
    },
]

const cards = document.querySelector(".todasLasCards")
let contenidoCards = ""

for (let i = 0; i < gatos.length; i++) {
    contenidoCards += `
    <div class="card">
      <div class="imagen">
      <img src="${gatos[i].img}"></img>
      </div>
      <div class="texto">
      <h2 class="name"> ${gatos[i].name}</h2>
      <p class="shortDesc"> ${gatos[i].shortDesc} </p>
    <div class="botonVerMas"><button class="abrirModal">VER MÁS</button> </div>
      </div>
    </div>`
}

cards.innerHTML = contenidoCards


const botonAbrirModal = document.getElementsByClassName("abrirModal");

const modal = document.getElementById("myModal");
let contenidoModal = document.getElementsByClassName("cardModal");


for (let i  = 0; i < gatos.length; i++) {
        botonAbrirModal[i].onclick = () => {
        contenidoModal = 
            `<div class="cardModal">
<div class="imagenModal"><img src="${gatos[i].img}"></img></div>
<div class="textoModal">
<h2>${gatos[i].name}</h2>
<h3>${gatos[i].shortDesc}</h3>
<p>${gatos[i].longDesc}</p>
</div>
<div class="botonCerrar"><button class="cerrarModal">X</button></div>
        </div>`
        modal.innerHTML = contenidoModal
        modal.classList.remove('noMostrar')
        
          const botonCerrarModal = document.getElementsByClassName("cerrarModal");

console.log(botonCerrarModal);

for (let i = 0; i < gatos.length; i++) {
botonCerrarModal[i].onclick = () => {
modal.classList.add('noMostrar');
}
}
}   
}

