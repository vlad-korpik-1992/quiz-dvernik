<?php
$username = trim($_POST['name']);
$phone = trim($_POST['phone']);
$messenger = implode('|',$_POST['messenger']);
$question1Answer = implode('|',$_POST['question1Answer']);
$question2Answer = trim($_POST['question2Answer']);
$question3Answer = trim($_POST['question3Answer']);
$question4Answer = trim($_POST['question4Answer']);
$question5Answer = trim($_POST['question5Answer']);
$question6Answer = implode('|',$_POST['question6Answer']);
$question7Answer = trim($_POST['question7Answer']);
$question8Answer = trim($_POST['question8Answer']);
$message = "<p>Имя: $username</p><p>Телефон: $phone</p><p>Средство для связи: $messenger</p><p>Тип дверей: $question1Answer</p><p>Количество дверных проемов: $question2Answer</p><p>Нужна ли установка? $question3Answer</p><p>Нужны ли Вам откосы? $question4Answer</p><p>Из какого материала нужны двери? $question5Answer</p><p>Какая конструкция дверей нужна? $question6Answer</p><p>В какой тип жилья нужны двери? $question7Answer</p><p>Куда нужно будет доставить двери? $question8Answer</p>";

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.' <'."form@dvernik-grodno.by".'>' . PHP_EOL;

$to  = "margarita@nastarte.by, " ; 
$to .= "v.korpik2010@yandex.by";
 
mail($to, "Заявка с квиза (dvernik-grodno.by)", $message, $headers );
?>