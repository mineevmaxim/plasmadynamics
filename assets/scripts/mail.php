<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

// Переменные для хранения сообщений
$response = array('success' => false, 'message' => '');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные формы
    $name = htmlspecialchars(trim($_POST["user_name"]));
    $phone = htmlspecialchars(trim($_POST["user_phone"]));
    $email = htmlspecialchars(trim($_POST["user_email"]));
    $message = htmlspecialchars(trim($_POST["user_message"]));

    // Создаем экземпляр PHPMailer
    $mail = new PHPMailer(true);
    $mail->CharSet = 'utf-8';

    try {
        // Настройка сервера
        $mail->isSMTP();
        $mail->Host = 'smtp.mail.ru';
        $mail->SMTPAuth = true;
        $mail->Username = 'goldfarbm@mail.ru'; 
        $mail->Password = 'jXK3m0U6RHwqykG9TsSs'; 
        $mail->SMTPSecure = 'ssl'; 
        $mail->Port = 465;

        $mail->setFrom('goldfarbm@mail.ru', 'Имя отправителя');
        $mail->addAddress('goldfarbm@mail.ru'); 

        $mail->isHTML(true);
        $mail->Subject = 'Новая заявка с сайта!';
        $mail->Body = '<strong>Имя: </strong>' . $name . 
                      '<br><strong>Тел: </strong>' . $phone . 
                      '<br><strong>E-mail: </strong>' . $email . 
                      '<br><strong>Сообщение: </strong>' . $message;

        // Отправляем письмо
        $mail->send();
        $response['success'] = true;
        $response['message'] = 'Сообщение успешно отправлено!';
    } catch (Exception $e) {
        $response['message'] = "Сообщение не может быть отправлено. Ошибка: {$mail->ErrorInfo}";
    }
} else {
    $response['message'] = 'Неверный запрос.';
}

// Возвращаем ответ в формате JSON
header('Content-Type: application/json');
echo json_encode($response);
