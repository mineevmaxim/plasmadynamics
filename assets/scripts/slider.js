let firstSlideIndex = 1;
let count = document.getElementsByClassName("examples-card__content-right__item").length;
let startX; // Для отслеживания начальной позиции касания

showSlides(firstSlideIndex);

// Функции переключения слайдов
function nextSlide() {
    firstSlideIndex += 1;
    if (firstSlideIndex > count) {
        firstSlideIndex = 1;
    }
    showSlides(firstSlideIndex);
}

function previousSlide() {
    firstSlideIndex -= 1;
    if (firstSlideIndex < 1) {
        firstSlideIndex = count;
    }
    showSlides(firstSlideIndex);
}

// Функция отображения слайдов
function showSlides(n) {
    let slides = document.getElementsByClassName("examples-card__content-right__item");
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[n - 1].style.display = "flex";
}

// Обработка жестов касания
const sliderContainer = document.querySelector('.examples-card__content-right'); // Замените на ваш контейнер слайдера

sliderContainer.addEventListener('touchstart', handleTouchStart, false);
sliderContainer.addEventListener('touchmove', handleTouchMove, false);

function handleTouchStart(evt) {
    const firstTouch = evt.touches[0];
    startX = firstTouch.clientX; // Получаем начальную позицию по оси X
}

function handleTouchMove(evt) {
    if (!startX) return; // Если не получена начальная позиция, завершить функцию

    let x = evt.touches[0].clientX; // Получаем позицию касания по оси X
    let xDiff = startX - x; // Разница между начальной и текущей позицией

    if (Math.abs(xDiff) > 30) { // Если разница больше 50 пикселей
        if (xDiff > 0) {
            nextSlide(); // Свайп влево, след. слайд
        } else {
            previousSlide(); // Свайп вправо, предыдущий слайд
        }
    }

    startX = null; // Сбрасываем начальную позицию
}
