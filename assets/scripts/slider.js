// let firstSlideIndex = 1
// let secondSlideIndex = 2
// let count = document.getElementsByClassName("examples-card__content-right__item").length

// showSlides(firstSlideIndex, secondSlideIndex)

// function nextSlide() {
//     firstSlideIndex = secondSlideIndex
//     secondSlideIndex += 1
//     if(secondSlideIndex > count)
//     {
//         secondSlideIndex = 1
//     }
//     showSlides(firstSlideIndex, secondSlideIndex);
// }

// function previousSlide() {
//     secondSlideIndex = firstSlideIndex
//     firstSlideIndex -= 1
//     if(firstSlideIndex < 1)
//     {
//         firstSlideIndex = count
//     }
//     showSlides(firstSlideIndex, secondSlideIndex);  
// }

// function showSlides(n, m) {

//     let slides = document.getElementsByClassName("examples-card__content-right__item");

//     for (let slide of slides) {
//         slide.style.display = "none";
//     }

//     slides[n - 1].style.display = "flex";
//     slides[m - 1].style.display = "flex";    
// }



let firstSlideIndex = 1;
let count = document.getElementsByClassName(
    "examples-card__content-right__item"
).length;

const sliderCont = document.querySelector('.examples-card__content-right');
sliderCont.addEventListener('touchstart', handleTouchStart, false);
sliderCont.addEventListener('touchmove', handleTouchMove, false);
let currentSlide

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
    let slides = document.getElementsByClassName(
        "examples-card__content-right__item"
    );

    for (let slide of slides) {
        slide.style.display = "none";
    }

    slides[n - 1].style.display = "flex";
    currentSlide = slides[n - 1]
}

function handleTouchStart(evt) {
    const firstTouch = evt.touches[0];
    console.log(firstTouch)
    startX = firstTouch.clientX; // Получаем начальную позицию по оси X
}

function handleTouchMove(evt) {
    if (!startX) return; // Если не получена начальная позиция, завершить функцию

    let x = evt.touches[0].clientX; // Получаем позицию касания по оси X
    let xDiff = startX - x; // Разница между начальной и текущей позицией

    if (Math.abs(xDiff) > 50) { // Если разница больше 50 пикселей
        if (xDiff > 0) {
            nextSlide(); // Свайп влево, след. слайд
        } else {
            previousSlide(); // Свайп вправо, предыдущий слайд
        }
    }

    startX = null; // Сбрасываем начальную позицию
}
