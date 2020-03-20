const scrollPosition = {
    x: 0,
    y: 0
}
const parallaxBg = document.querySelector('.hero-image');

const scrollLoop = () => {
    //returns the number of pixels that document is currently scrolled on x and y axis
    //scrollPosition.x = window.scrollX;
    scrollPosition.y = window.scrollY;
    //repositions background image in 3d -> 
    //values change according to scrolled pixels a
    //nd the multiplier sets the changed scroll speed of the background image
    parallaxBg.style.transform = `translate3d(${scrollPosition.x}px, ${scrollPosition.y * -0.2}px, 0)`;

    //inserts scrollLoop to browser's event loop 
    window.requestAnimationFrame(scrollLoop);

}

//starts the loop after DOM has loaded
//false prevents event bubbling
window.addEventListener('DOMContentLoaded', scrollLoop, false);

const trackScroll = () => {
    const button = document.querySelector('.back-to-top-btn');
    //viewport height
    let vpHeight = document.documentElement.clientHeight;
    scrollPosition.y = window.scrollY;

    if (scrollPosition.y > vpHeight) {
        button.style.display = 'block';
    }
    if (scrollPosition.y < vpHeight) {
        button.style.display = 'none';
    }
}

window.addEventListener('scroll', trackScroll);