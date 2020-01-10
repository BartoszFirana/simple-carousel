import image1 from '../../assets/1.png';
import image2 from '../../assets/2.png';
import image3 from '../../assets/3.png';
import image4 from '../../assets/4.png';
import image5 from '../../assets/5.png';

const images = [image1, image2, image3, image4, image5];

const galleryContainer = document.querySelector('.carousel');
const checkbox = document.querySelector('.switch__input');
const btns = document.querySelector('.carousel__button');
const carouselMarkers = document.querySelector('.carousel__marker');

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
    const imgElements = document.querySelectorAll('.carousel__image');
    if (imgElements[0].style.transform === "") {
        const targetClassName = event.target.classList.value;
        if (targetClassName === "carousel__button--prev") {
            centerOnImage("1")
        } if (targetClassName === "carousel__button--next") {
            centerOnImage("3")
        }
    }
})

galleryContainer.addEventListener("click", (event) => {
    if (!event.target.style.transform) {
        const imageId = event.target.id;
        if (imageId !== "2") {
            centerOnImage(imageId)
        } if (imageId === "2") {
            modalHandler(imageId);
        }
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
    const imgElements = document.querySelectorAll('.carousel__image');
    const margin = 30;
    const imgElementWidth = imgElements[0].offsetWidth + margin;
    const imgElementsLenght = imgElements.length;
    for (let i = 0; i < imgElementsLenght; i++) {
        if (index === "0") {
            imgElements[i].style.transform = `translateX(${imgElementWidth * 2}px)`;
            imgElements[3].style.opacity = "0";
            imgElements[4].style.opacity = "0";
        } if (index === "1") {
            imgElements[i].style.transform = `translateX(${imgElementWidth}px)`;
            imgElements[4].style.opacity = "0";
        } if (index === "3") {
            imgElements[i].style.transform = `translateX(${"-" + imgElementWidth}px)`;
            imgElements[0].style.opacity = "0";
        } if (index === "4") {
            imgElements[i].style.transform = `translateX(${"-" + imgElementWidth * 2}px)`;
            imgElements[0].style.opacity = "0";
            imgElements[1].style.opacity = "0";
        }
    }
}

function modalHandler(imageId) {
    const modal = document.querySelector(".modal");
    modal.style.display = "block";
    modal.innerHTML = `
        <div class="modal__background">
            <img src=${images[imageId]} alt="" class="modal__image">
        </div>
    `;
    modal.addEventListener("click", () => {
        modal.style.display = "none";
    })
}

function setContent(images) {
    galleryContainer.innerHTML = images.map((image, index) => (`
            <img src="${image}" alt="" id=${index} class="${index === 2 ? "carousel__image active" : "carousel__image"}">
            `)).join(``)
};