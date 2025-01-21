/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
console.log('Hello World! (from rivedge-swiper-slider-block block)')
/* eslint-enable no-console 

document.addEventListener('ready', () => {

    let sliderWindow = document.querySelector('.is-style-scale-hero')

    function addResponsiveStyles() {

        let sliderWidth = sliderWindow.offsetWidth
        console.log('what is the width?')
        let previousArrow = document.querySelector('.is-style-scale-hero .swiper .swiper-button-prev')
        previousArrow.classList.toggle('responsive-slider')
    }

    sliderWindow.addEventListener('resize', addResponsiveStyles())
})

*/
