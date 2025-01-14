let firstSlideIndex = 1;
let count = document.getElementsByClassName("examples-card__content-right__item").length;
let startX; // Начальная позиция касания
const sliderCont = document.querySelector('.examples-card__content-right');
const slides = document.getElementsByClassName("examples-card__content-right__item");

// Добавляем обработчики событий
sliderCont.addEventListener('touchstart', handleTouchStart);
sliderCont.addEventListener('touchend', handleTouchEnd);
sliderCont.addEventListener('touchmove', handleTouchMove);

showSlides(firstSlideIndex);

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

function showSlides(n) {
    for (let slide of slides) {
        slide.style.display = "none"; // Скрываем все слайды
    }
    slides[n - 1].style.display = "flex"; // Показываем активный слайд
}

// Обработка начала касания
function handleTouchStart(evt) {
    const firstTouch = evt.touches[0];
    startX = firstTouch.clientX; // Получаем начальную позицию по оси X
    for (let slide of slides) {
        slide.querySelector('.img-cont').style.transition = "none"; // Отключаем переход для мгновенного изменения
    }
}

// Обработка перемещения
function handleTouchMove(evt) {
    if (!startX) return; // Если не получена начальная позиция, завершаем функцию

    const currentX = evt.touches[0].clientX; // Получаем текущую позицию по оси X
    const xDiff = startX - currentX; // Разница между начальной и текущей позицией

    // Устанавливаем сдвиг только для контейнера изображения текущего слайда
    const activeSlide = slides[firstSlideIndex - 1]; // Получаем текущий слайд
    const imgContainer = activeSlide.querySelector('.img-cont'); // Получаем контейнер для изображения
    imgContainer.style.transform = `translateX(${-xDiff}px)`; // Применяем сдвиг к контейнеру изображения
}

// Обработка завершения касания
function handleTouchEnd(evt) {
    const endX = evt.changedTouches[0].clientX; // Получаем конечную позицию по оси X
    const xDiff = startX - endX; // Разница между начальной и конечной позицией

    if (Math.abs(xDiff) > 50) { // Проверяем свайп
        if (xDiff > 0) {
            nextSlide(); // Свайп влево, след. слайд
        } else {
            previousSlide(); // Свайп вправо, предыдущий слайд
        }
    }

    // Возвращаем изображение на место
    const activeSlide = slides[firstSlideIndex - 1]; // Получаем текущий слайд
    const imgContainer = activeSlide.querySelector('.img-cont'); // Получаем контейнер для изображения
    imgContainer.style.transition = "transform 0.3s ease"; // Включаем анимацию
    imgContainer.style.transform = "translateX(0)"; // Возвращаем на исходную позицию
    
    startX = null; // Сбрасываем начальную позицию
}
