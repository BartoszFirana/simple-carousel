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
]
const galleryContainer = document.querySelector('.carousel');
const btnPrev = document.querySelector('.carousel__button--prev');
const btnNext = document.querySelector('.carousel__button--next');

setContent();

btnPrev.addEventListener('click', () => {
    data.splice(0, 0, data[data.length - 1]);
    data.splice(data.length - 1, 1);
    setContent();
});

btnNext.addEventListener('click', () => {
    data.splice(data.length, 0, data[0]);
    data.splice(0, 1);
    setContent();
});

window.addEventListener('resize', setContent);

function setContent() {

    if (window.innerWidth < 700) {
        galleryContainer.innerHTML = `
    <img src="${data[0].src}" alt="" class="carousel__image">
    <img src="${data[1].src}" alt="" class="carousel__image active">
    <img src="${data[2].src}" alt="" class="carousel__image">
`;
    } else {
        galleryContainer.innerHTML = `
        <img src="${data[4].src}" alt="" class="carousel__image">
        <img src="${data[0].src}" alt="" class="carousel__image">
        <img src="${data[1].src}" alt="" class="carousel__image active">
        <img src="${data[2].src}" alt="" class="carousel__image">
        <img src="${data[3].src}" alt="" class="carousel__image">
    `;
    }
}