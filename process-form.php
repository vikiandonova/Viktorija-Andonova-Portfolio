<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Откривање на податоците од JSON барањето
    $data = json_decode(file_get_contents("php://input"));

    // Податоците од формата
    $email = $data->email;
    $phone = $data->phone;
    $message = $data->message;

    // Параметри за е-пошта
    $to = "andonovaviktorija27@gmail.com"; // Вашата адреса за примање на е-пошта
    $subject = "Нова порака од контакт формата";
    $messageBody = "Email: $email\nPhone: $phone\nMessage: $message";

    // Испрати ги податоците на вашата е-пошта
    $result = mail($to, $subject, $messageBody);

    if ($result) {
        echo "Пораката беше успешно испратена.";
    } else {
        echo "Настана грешка при испраќањето на пораката.";
    }
} else {
    echo "Погрешен метод за барање.";
}
?>