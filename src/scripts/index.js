//switcher
const sliderBtns = document.querySelector('.buttons');
const switchButton = document.getElementById('switch');
switchButton.addEventListener('click', () => {
    if (switchButton.checked != true) {
        sliderBtns.style.display = "none";
    } else {
        sliderBtns.style.display = "block";
    }
});

//CounterSlide
const carouselImages = document.querySelectorAll('.carousel__image');
const slide = document.querySelector('.carousel');
let counter = 1;
const size = carouselImages[0].clientWidth;

slide.style.transform = 'translateX(' + (-size * counter) + 'px)';


//buttons
const btnNext = document.querySelector('.carousel__button--next');
const btnPrev = document.querySelector('.carousel__button--prev');

btnPrev.addEventListener('click', () => {
    counter--
    slide.style.transition = "transform 0.4s ease-in-out";
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

btnNext.addEventListener('click', () => {
    counter++
    slide.style.transition = "transform 0.4s ease-in-out";
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

slide.addEventListener('transitionend', () => {
    if (counter === carouselImages.length - 3) {
        slide.style.transition = "none";
        counter = 1;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (counter < 1) {
        slide.style.transition = "none";
        counter = carouselImages.length - 4;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})