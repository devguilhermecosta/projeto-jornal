function fechar() {
    var menu = document.getElementById('menu-mobile')

    if (menu.checked == true) {
        menu.checked = false
    }
}

function espaco() {
    var logo = document.getElementById('logo')
    var menu = document.getElementById('menu-mobile')
    var largura = window.innerWidth

    if (menu.checked == true && largura >= 992 ) {
        logo.style.marginLeft = '5.9rem'
    } else {
        logo.style.marginLeft = '0'
    }
}
