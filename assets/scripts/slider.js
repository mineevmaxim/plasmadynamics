let firstSlideIndex = 2;
let count = document.getElementsByClassName(
    "examples-card__content-right__item"
).length;
let startX; // Начальная позиция касания
const sliderCont = document.querySelector(".examples-card__content-right");
const slides = document.getElementsByClassName(
    "examples-card__content-right__item"
);
const leftCont = document.getElementsByClassName("examples-card__content-left");
const slideWidthcon = document.getElementsByClassName(
    "examples-card__content-right"
);
let nextbutton = document.getElementsByClassName("bttn-scroll-next")[0];
let prevbutton = document.getElementsByClassName("bttn-scroll-prev")[0];

// Добавляем обработчики событий
sliderCont.addEventListener("touchstart", handleTouchStart);
sliderCont.addEventListener("touchend", handleTouchEnd);
sliderCont.addEventListener("touchmove", handleTouchMove);

previousSlide(firstSlideIndex);
showSlides(firstSlideIndex);

function nextSlide() {
    prevbutton.disabled = false;

    firstSlideIndex += 1;
    showSlides(firstSlideIndex);
    if (firstSlideIndex >= count) {
        nextbutton.disabled = true;
        return firstSlideIndex;
    }
    return firstSlideIndex;
}

function previousSlide() {
    nextbutton.disabled = false;

    firstSlideIndex -= 1;
    showSlides(firstSlideIndex);
    if (firstSlideIndex <= 1) {
        prevbutton.disabled = true;
        return firstSlideIndex;
    }
    return firstSlideIndex;
}

function showSlides(n) {
    if (window.innerWidth < 1000) {
        for (let slide of slides) {
            slide.style.display = "none"; // Скрываем все слайды
        }
        slideWidthcon[0].style.width = "100%";
        slides[n - 1].style.display = "flex"; // Показываем активный слайд
        leftCont[0].style.display = "flex";
    } else {
        for (let slide of slides) {
            slide.style.display = "none"; // Скрываем все слайды
        }
        if (n == 1) {
            leftCont[0].style.display = "flex";
            slides[n - 1].style.display = "flex";
            slideWidthcon[0].style.width = "32%";
        } else {
            if (n == count) {
                n -= 1;
            }
            leftCont[0].style.display = "none";
            slides[n - 2].style.display = "flex";
            slides[n - 1].style.display = "flex";
            slides[n].style.display = "flex";
            slideWidthcon[0].style.width = "100%";
        }
    }
}

// Обработка начала касания
function handleTouchStart(evt) {
    const firstTouch = evt.touches[0];
    startX = firstTouch.clientX; // Получаем начальную позицию по оси X
    for (let slide of slides) {
        slide.querySelector(".img-cont").style.transition = "none"; // Отключаем переход для мгновенного изменения
    }
}

// Обработка перемещения
function handleTouchMove(evt) {
    if (!startX) return; // Если не получена начальная позиция, завершаем функцию

    const currentX = evt.touches[0].clientX; // Получаем текущую позицию по оси X
    let xDiff = startX - currentX; // Разница между начальной и текущей позицией
    if (xDiff > 100) {
        xDiff = 100;
    }
    if (xDiff < -100) {
        xDiff = -100;
    }
    // Устанавливаем сдвиг только для контейнера изображения текущего слайда
    const activeSlide = slides[firstSlideIndex - 1]; // Получаем текущий слайд
    const imgContainer = activeSlide.querySelector(".img-cont"); // Получаем контейнер для изображения
    imgContainer.style.transform = `translateX(${-xDiff}px)`; // Применяем сдвиг к контейнеру изображения
}

// Обработка завершения касания
function handleTouchEnd(evt) {
    const activeSlide = slides[firstSlideIndex - 1];
    const imgContainer = activeSlide.querySelector(".img-cont");
    imgContainer.style.transition = "transform 0.3s ease"; // Включаем анимацию
    imgContainer.style.transform = "translateX(0)";
    const endX = evt.changedTouches[0].clientX; // Получаем конечную позицию по оси X
    const xDiff = startX - endX; // Разница между начальной и конечной позицией
    if (Math.abs(xDiff) > 50) {
        // Проверяем свайп
        if (xDiff > 0 && firstSlideIndex < count) {
            nextSlide(); // Свайп влево, след. слайд
        } else {
            if (firstSlideIndex > 1 && xDiff < 0) {
                previousSlide(); // Свайп вправо, предыдущий слайд
            }
        }
    }

    // Возвращаем изображение на место
    activeSlide = slides[firstSlideIndex - 1]; // Получаем текущий слайд
    imgContainer = activeSlide.querySelector(".img-cont"); // Получаем контейнер для изображения
    imgContainer.style.transition = "transform 0.3s ease"; // Включаем анимацию
    imgContainer.style.transform = "translateX(0)"; // Возвращаем на исходную позицию

    startX = null; // Сбрасываем начальную позицию
}
