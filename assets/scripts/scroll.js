const headerButton = document.getElementById("header-button");
const heroButton = document.getElementById("hero-button");
const headerLogo = document.getElementById("header-logo");
const form1 = document.getElementById("form");

const scrollToForm = () => {
    form1.scrollIntoView({ block: "center", behavior: "smooth" });
};

const scrollToTop = () => {
    window.scrollTo(0, 0);
};

headerButton.addEventListener("click", scrollToForm);
heroButton.addEventListener("click", scrollToForm);
headerLogo.addEventListener("click", scrollToTop);
