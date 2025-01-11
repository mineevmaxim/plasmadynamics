document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(this);

        fetch('mail.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            // Проверяем статус ответа
            if (data.success) {
                alert('Заявка принята. Спасибо что выбрали нас!');
            } else {
                alert('Ошибка. Проверьте заполнение формы и попробуйте еще раз.');
            }
        })
        .catch(error => {
            alert('Ошибка. Произошла ошибка при отправке.');
        });
    });
});
