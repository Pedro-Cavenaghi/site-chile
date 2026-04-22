const BASE_PATH = window.location.pathname.includes("/pages/")
  ? "../"
  : "";

document.addEventListener("DOMContentLoaded", () => {
    const menuHamburguer = document.querySelector(".menu-hamburguer")
    const navLinks = document.querySelector(".nav-links")

    if (menuHamburguer && navLinks) {
        menuHamburguer.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-menu')

            document.body.classList.toggle('nao-scroll')
            
            if (navLinks.classList.contains('mobile-menu')) {
                menuHamburguer.src = BASE_PATH + "assets/icons/cruz-fechar.png"
            } else {
                menuHamburguer.src = BASE_PATH + "assets/icons/menu-aberto.png"
            }
        })
    }
})
const lightbox = GLightbox();