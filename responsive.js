
function addResponsiveStyles() {

    let sliderWindow = document.querySelector('.is-style-scale-hero')
    let sliderWidth = sliderWindow ? sliderWindow.offsetWidth : 0
    let previousArrow = document.querySelector('.is-style-scale-hero .swiper .swiper-button-prev')

    if (sliderWidth && sliderWidth < 350) {
        console.log('what is the width?')
        previousArrow.classList.add('responsive-slider')
    }

    if (sliderWidth && sliderWidth > 350) {
        previousArrow.classList.remove('responsive-slider')
    }

}

window.addEventListener('resize', addResponsiveStyles)
document.addEventListener('DOMContentLoaded', addResponsiveStyles)
