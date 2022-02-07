function OpenAndCloseMenu(){
    // Abrir e fechar menu mobile
    const nav = document.querySelector('#header nav')
    const toggle = document.querySelectorAll('nav .toggle')
    const links = document.querySelectorAll('#header nav ul li a')
    
    for (const element of toggle) {
        element.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }

    for (const link of links) {
        link.addEventListener('click', () => {
            nav.classList.remove('show')
        })
    }
}

function scrollShadowHeader(){
    // Função para modificar o header e colocar uma sombra
    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight

    if(window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}

function carousel(){
    // carousel com swiper
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination'
        },
        mousewheel: true,
        keyboard: true,
        loop: true,
        breakpoints: {
            767:{
                slidesPerView: 2,
                setWrapperSize: true,
            }
        }
    })
}

function scrollRevealOrigin(){
    // Animação scroll reveal
    const scrollReveal = ScrollReveal({
        origin: top,
        distance: '30px',
        duration: 800,
        reset: true
    })
    
    scrollReveal.reveal(`
        #home .image, #home .text,
        #about .image, #about .text,
        #services header, #services .card,
        #testimonials header, #testimonials .testimonials,
        #contact .text, #contact .links,
        footer .brand, footer .social
    `, {interval: 100})
}

function appearBackToTop(){
    // Função para aparecer o botão de voltar ao topo
    const backToTopButton = document.querySelector('#back-to-top')
    if(window.scrollY >= 560){
        backToTopButton.classList.add('show')
    }else{
        backToTopButton.classList.remove('show')
    }
}

function backToTop(){
    // função de click para retornar ao topo
    document.documentElement.scrollTop = 0
}

const sections = document.querySelectorAll('section[id]')
function activateMenuAtCurrentSection(){
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for (const section of sections){
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if(checkpointStart && checkpointEnd){
            document.querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.add('active')
        } else {
            document.querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.remove('active')
        }
    }
}

window.addEventListener('scroll', () => {
    scrollShadowHeader()
    appearBackToTop()
    activateMenuAtCurrentSection()
})

// Chamando as funções de abrir menu, efetuar animação e rodar o carousel
OpenAndCloseMenu()
scrollRevealOrigin()
carousel()


