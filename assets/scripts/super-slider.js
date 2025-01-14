let slideIndex = 0;
let ct = document.getElementsByClassName("examples-card__content-right__item").length;
const slideList = document.getElementsByClassName("examples-card__content-right__item");
const leftCont = document.getElementsByClassName("examples-card__content-left");
const slideCont = document.getElementsByClassName('examples-card__content-right');
let nextbutton  = document.getElementsByClassName('bttn-scroll-next');
let prevbutton = document.getElementsByClassName('bttn-scroll-prev');


nextSlide(slideIndex);

function nextSlide() {
    firstSlideIndex += 1;
    if (slideIndex = ct) {
        slideIndex = 1;
    }
    showSlides(slideIndex);
}

function previousSlide() {
    slideIndex -= 1;
    if (slideIndex < 1) {
        slideIndex = ct;
    }
    showSlides(slideIndex);
}

function showSlides(n) {
    for (let slide of slideList) {
        slide.style.display = "none"; // Скрываем все слайды
    }
    if (n == 1)
    {
        leftCont[0].style.display = "flex";
        slideList[n - 1].style.display = "flex";
        slideCont[0].style.width = "32%";
    }
    else{
        leftCont[0].style.display = "none";
        slideList[n - 2].style.display = "flex";
        slideList[n - 1].style.display = "flex";
        slideList[n].style.display = "flex";
        slideCont[0].style.width = "100%";
    }
     // Показываем активный слайд
}

