let edadElement = document.getElementById("edad");
let fechaNacimiento = new Date(2003, 8, 18);
let fechaActual = new Date();
let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

if (
  fechaActual.getMonth() < fechaNacimiento.getMonth() ||
  (fechaActual.getMonth() === fechaNacimiento.getMonth() &&
    fechaActual.getDate() < fechaNacimiento.getDate())
) {
  edad--;
}

edadElement.innerText = edad;

let menuVisible = false;

function mostrarOcultarMenu() {
  var nav = document.getElementById("nav");
  if (!menuVisible) {
    nav.classList.add("responsive");
    menuVisible = true;
  } else {
    nav.classList.remove("responsive");
    menuVisible = false;
  }
}

function seleccionar() {
  var nav = document.getElementById("nav");
  nav.classList.remove("responsive");
  menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("htmlcss");
    habilidades[2].classList.add("python");
    habilidades[3].classList.add("basesdedatos");
    habilidades[4].classList.add("frameworksjs");
    habilidades[5].classList.add("comunicacion");
    habilidades[6].classList.add("trabajoequipo");
    habilidades[7].classList.add("creatividad");
    habilidades[8].classList.add("dedicacion");
    habilidades[9].classList.add("puntualidad");
  }
}
//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.addEventListener("scroll", efectoHabilidades);

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
  efectoHabilidades();
};

