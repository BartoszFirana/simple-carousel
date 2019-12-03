import image1 from '../../assets/1.png';
import image2 from '../../assets/2.png';
import image3 from '../../assets/3.png';
import image4 from '../../assets/4.png';
import image5 from '../../assets/5.png';

const images = [image1, image2, image3, image4, image5];

const galleryContainer = document.querySelector('.carousel');
const checkbox = document.querySelector('.switch__input');
const btns = document.querySelector('.carousel__button');

const imagesLastIndex = images.length - 1;

setContent(images);

checkbox.addEventListener('click', () => {
    if (!checkbox.checked) {
        btns.classList.add('carousel__button--disable');
    } else {
        btns.classList.remove('carousel__button--disable');
    }
});

btns.addEventListener('click', (event) => {
    const targetClassName = event.target.classList.value;
    if (targetClassName === "carousel__button--prev") {
        centerOnImage("1")
    } if (targetClassName === "carousel__button--next") {
        centerOnImage("3")
    }
})

galleryContainer.addEventListener("click", (event) => {
    const imageId = event.target.id;
    if (imageId !== "2") {
        centerOnImage(imageId)
    }
});

function centerOnImage(index) {
    moveEffect(index);
    setTimeout(function () {
        if (index === "0") {
            images.splice(0, 0, images[imagesLastIndex]);
            images.splice(0, 0, images[imagesLastIndex]);
            images.splice(images.length - 2, 2);
        } if (index === "1") {
            images.splice(0, 0, images[imagesLastIndex]);
            images.splice(images.length - 1, 1);
        } if (index === "3") {
            images.splice(images.length, 0, images[0]);
            images.splice(0, 1);
        } if (index === "4") {
            images.splice(images.length, 0, images[0]);
            images.splice(images.length, 0, images[1]);
            images.splice(0, 2);
        }
        setContent(images);
    }, 1000);
}

function moveEffect(index) {
    const imgEl = document.querySelectorAll('.carousel__image');
    const imgElLenght = imgEl.length;
    for (let i = 0; i < imgElLenght; i++) {
        if (index === "0" || index === "1") {
            imgEl[i].classList.add("moveleft");
            imgEl[4].classList.add("disappearing");
        } if (index === "3" || index === "4") {
            imgEl[i].classList.add("moveright")
            imgEl[0].classList.add("disappearing");
        }
    }
}

function setContent(images) {
    galleryContainer.innerHTML = images.map((image, index) => (`
            <img src="${image}" alt="" id=${index} class="${index === 2 ? "carousel__image active" : "carousel__image"}">
            `)).join(``)
};