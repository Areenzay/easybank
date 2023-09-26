const menuOpen = document.querySelector(".ri-menu-line")
const menuClose = document.querySelector(".ri-close-fill")
const menu = document.querySelector("nav ul")

menuOpen.addEventListener("click", function(){
    menu.style.top = "35%"
    menuOpen.style.display = "none"
    menuClose.style.display = "block"
})

menuClose.addEventListener("click", function(){
    menu.style.top = "-35%"
    menuOpen.style.display = "block"
    menuClose.style.display = "none"
})

AOS.init();