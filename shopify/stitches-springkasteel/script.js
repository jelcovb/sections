const mainImage = document.querySelector('.bouncy-image');
const overlayBox = document.querySelector('.modal');
const btnCloseOverlay = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const carouselItems = document.querySelectorAll('.carousel-item');
var position = 0;

const checkPosition = function () {
    carouselItems.forEach((element, index) => {
        if (!element.classList.contains('hidden')) {
            position = index;
        }
    });
};

const openModal = function () {
    overlayBox.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    overlayBox.classList.add('hidden');
    overlay.classList.add('hidden');
};

mainImage.addEventListener('click', function () {
    openModal();
});

btnCloseOverlay.addEventListener('click', function () {
    closeModal();
});

overlay.addEventListener('click', function () {
    closeModal();
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !overlayBox.classList.contains('hidden')) {
        closeModal();
    }
});

next.addEventListener('click', function () {
    checkPosition();
    carouselItems[position].classList.add('hidden');

    if (position + 1 >= carouselItems.length) {
        carouselItems[0].classList.remove('hidden');
    } else {
        carouselItems[position + 1].classList.remove('hidden');
    }
});

prev.addEventListener('click', function () {
    checkPosition();
    carouselItems[position].classList.add('hidden');

    if (position === 0) {
        carouselItems[carouselItems.length - 1].classList.remove('hidden');
    } else {
        carouselItems[position - 1].classList.remove('hidden');
    }
});
