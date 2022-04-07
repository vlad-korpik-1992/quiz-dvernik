<?php
$username = trim($_POST['name']);
$phone = trim($_POST['phone']);
$viber = "-";
$telegram = "-";
$whatsapp = "-";
$phoneSeparate = "-";
$question2Answer = "-";
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
$message = "Имя: $username \nТелефон: $phone \nСредство для связи: viber: $viber | telegram: $telegram | whatsapp: $whatsapp | мобильный: $phoneSeparate \nТип дверей: $question1Answer \nКоличество дверных проемов: $question2Answer \nНужна ли установка? $question3Answer \nНужны ли Вам откосы? $question4Answer \nИз какого материала нужны двери? $question5Answer \nКакая конструкция дверей нужна? $question6Answer \nВ какой тип жилья нужны двери? $question7Answer \nКуда нужно будет доставить двери? $question8Answer";

mail($to, $subject, $message);
?>