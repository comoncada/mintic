//inicializacion de AOS library
AOS.init();

let menu = document.getElementById("menu");

let menu_bar = document.getElementById("menu-bar");

menu_bar.addEventListener('click', function() {
    //alert("sip")
    menu.classList.toggle("menu-toggle")
})