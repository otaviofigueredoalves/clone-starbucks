const menu = document.querySelector('.menu');
const menuHidden = document.querySelector('.menu-hidden')

menuHidden.style.display = 'none'

function abrirMenu(){
    if(menuHidden.style.display == 'none'){
        menuHidden.style.display = 'block'
    } else {
        menuHidden.style.display = 'none'
    }
}

menu.addEventListener('click', abrirMenu)