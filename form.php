<?php
$username = trim($_POST['name']);
$phone = trim($_POST['phone']);
$viber = "";
$telegram = "";
$whatsapp = "";
$phoneSeparate = "";
$viber = trim($POST['viber']);
$telegram = trim($POST['telegram']);
$whatsapp = trim($POST['whatsapp']);
$phoneSeparate = trim($POST['phoneSeparate']);
$question1Answer = implode('|',$_POST['question1Answer']);
$question2Answer = trim($_POST['question2Answer']);
$question3Answer = trim($_POST['question3Answer']);
$question4Answer = trim($_POST['question4Answer']);
$question5Answer = trim($_POST['question5Answer']);
$question6Answer = implode('|',$_POST['question6Answer']);
$question7Answer = trim($_POST['question7Answer']);
$question8Answer = trim($_POST['question8Answer']);
$to = "v.korpik2010yandex.by";
$subject = "Сообщение с сайта (dvernik-grodno). Пройден квиз";
$message = "Имя: $username \nТелефон: $phone \nЧто Вас интересует в Китае? \n$question1Answer \nЕсть ли у вас уже поставщик в Китае? $question2Answer \nРаботали ли ранее с Китаем? $question3Answer \nЕсть ли у вас готовое техническое задание на поиск, производство? $question4Answer";

mail($to, $subject, $message);
?>