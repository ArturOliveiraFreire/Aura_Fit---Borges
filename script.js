// Menu Hamburger

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
