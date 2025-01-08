/*let firstSlideIndex = 1
let secondSlideIndex = 2
let count = document.getElementsByClassName("examples-card__content-right__item").length

showSlides(firstSlideIndex, secondSlideIndex)

function nextSlide() {
    firstSlideIndex = secondSlideIndex
    secondSlideIndex += 1
    if(secondSlideIndex > count)
    {
        secondSlideIndex = 1
    }
    showSlides(firstSlideIndex, secondSlideIndex);
}

function previousSlide() {
    secondSlideIndex = firstSlideIndex
    firstSlideIndex -= 1
    if(firstSlideIndex < 1)
    {
        firstSlideIndex = count
    }
    showSlides(firstSlideIndex, secondSlideIndex);  
}

function showSlides(n, m) {

    let slides = document.getElementsByClassName("examples-card__content-right__item");

    for (let slide of slides) {
        slide.style.display = "none";
    }

    slides[n - 1].style.display = "flex";
    slides[m - 1].style.display = "flex";    
}*/

let firstSlideIndex = 1;
let count = document.getElementsByClassName(
    "examples-card__content-right__item"
).length;

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
}
