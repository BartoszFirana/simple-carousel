import image1 from '../../assets/1.png';
import image2 from '../../assets/2.png';
import image3 from '../../assets/3.png';
import image4 from '../../assets/4.png';
import image5 from '../../assets/5.png';

let data = [
    {
        src: image1,
    },
    {
        src: image2,
    },
    {
        src: image3,
    },
    {
        src: image4,
    },
    {
        src: image5,
    }
];

const galleryContainer = document.querySelector('.carousel');
const checkbox = document.querySelector('.switch__container--input');

const btns = document.querySelector('.carousel__button');
const btnPrev = document.querySelector('.carousel__button--prev');
const btnNext = document.querySelector('.carousel__button--next');

const lastPicture = data.length - 1;

setContent();

btnPrev.addEventListener('click', () => {
    data.splice(0, 0, data[lastPicture]);
    data.splice(data.length - 1, 1);
    setContent();
});

btnNext.addEventListener('click', () => {
    data.splice(data.length, 0, data[0]);
    data.splice(0, 1);
    setContent();
});

window.addEventListener('resize', setContent);

checkbox.addEventListener('click', () => {
    if (!checkbox.checked) {
        btns.classList.add('carousel__button--disable');
    } else {
        btns.classList.remove('carousel__button--disable');
    }
});

function setContent() {

    if (window.innerWidth < 700 || data.length <= 3) {
        galleryContainer.innerHTML = `
            <button class="image2"><img src="${data[0].src}" alt="" class="carousel__image"></button>
            <img src="${data[1].src}" alt="" class="carousel__image active">
            <button class="image4"><img src="${data[2].src}" alt="" class="carousel__image"></button>
`;
    } else {
        galleryContainer.innerHTML = `
            <button class="image1"><img src="${data[lastPicture].src}" alt="" class="carousel__image"></button>
            <button class="image2"><img src="${data[0].src}" alt="" class="carousel__image"></button>
            <img src="${data[1].src}" alt="" class="carousel__image active">
            <button class="image4"><img src="${data[2].src}" alt="" class="carousel__image"></button>
            <button class="image5"><img src="${data[3].src}" alt="" class="carousel__image"></button>
    `;
    }
};