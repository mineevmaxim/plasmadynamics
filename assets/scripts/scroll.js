const headerButton = document.getElementById("header-button");
    const heroButton = document.getElementById("hero-button");
    const form = document.getElementById("form");

    const scrollToForm = () => {
        form.scrollIntoView({block: "center", behavior: "smooth"});
    }

    headerButton.addEventListener("click", scrollToForm);
    heroButton.addEventListener("click", scrollToForm);