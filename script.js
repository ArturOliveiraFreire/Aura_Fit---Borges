// ------------ MENU HAMBURGER ------------

let menu = document.getElementById("menu")
let icone_barras = document.getElementById("icone_barras")
let icone_x = document.getElementById("icone_x")
let sombras = document.getElementById("sombras")

function abreFechaMenu() {
    // Se o menu está fechado
    if(window.getComputedStyle(menu).right == "-210px") {

        // Abrir o menu
        menu.style.right = "0"

        //Mostrar o icone X
        icone_x.style.display = "inline"

        //Esconder icone barras
        icone_barras.style.display = "none"

        sombras.style.right = "0"

    } else {

        //Fechar o menu
        menu.style.right = "-210px"


        //Esconder icone X
        icone_x.style.display = "none"

        //Aparecer o icone barras
        icone_barras.style.display = "inline"

        sombras.style.right = "-101vw"
    }
}

onresize = () =>{
    if(window.getComputedStyle(menu).right == "-210px"){
        //Mostra icone X
        iconeX.style.display = "none"
    }else{
        //Esconde icone barras
        iconeBarras.style.display = "inline"
    }
}




// ------------ CARROSSEL ------------

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}