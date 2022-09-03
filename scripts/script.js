function fechar() {
    var menu = document.getElementById('menu-mobile')
    var logo = document.getElementById('logo')

    if (menu.checked == true) {
        menu.checked = false;
        logo.style.marginLeft = '0rem';
    }
}

function espaco() {
    var logo = document.getElementById('logo')
    var menu = document.getElementById('menu-mobile')
    var largura = window.innerWidth

    if (menu.checked == true && largura >= 991 ) {
        logo.style.marginLeft = '3.9rem';
    } else {
        logo.style.marginLeft = '0rem';
    }
}
