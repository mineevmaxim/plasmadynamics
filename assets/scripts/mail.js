// document.addEventListener("DOMContentLoaded", function () {
//     document
//         .getElementById("contactForm")
//         .addEventListener("submit", function (event) {
//             event.preventDefault();

//             const formData = new FormData(this);

//             fetch("mail.php", {
//                 method: "POST",
//                 body: formData,
//             })
//                 .then((response) => response.json())
//                 .then((data) => {
//                     // Проверяем статус ответа
//                     if (data.success) {
//                         alert("Заявка принята. Спасибо что выбрали нас!");
//                     } else {
//                         alert(
//                             "Ошибка. Проверьте заполнение формы и попробуйте еще раз."
//                         );
//                     }
//                 })
//                 .catch((error) => {
//                     alert("Ошибка. Произошла ошибка при отправке.");
//                 });
//         });
// });

function showNotification() {
    const notification = document.getElementById("notification");
    notification.classList.add("show");

    setTimeout(() => {
        notification.classList.remove("show");
    }, 3000);
}

const form = document.getElementById("contactForm");
const button = document.getElementById("contactForm-button");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    button.disabled = true;
    setTimeout(() => {
        showNotification();
        form.reset();
        button.disabled = false;
    }, 1000);
});
