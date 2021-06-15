<?php

$method = $_SERVER['REQUEST_METHOD'];
$message = "";
$link_thank = './';
if ( $method === 'POST' ) {
    $str_json = file_get_contents('php://input');
    $response = json_decode($str_json, true);
    $c = false;
	foreach ( $response as $key => $value ) {
    $message_value = "";
    $message_key = "";
    $message_value = $value;
    if ($key === "clientName") $message_key = "Имя клиента";
    if ($key === "clientPhone") $message_key = "Номер клиента";
    if ($key === "datePick") $message_key = "Дата брони";
    if ($key === "timePick") $message_key = "Время брони";
    //добавить ключи с новыми Input (name)
    // запуск php (+скопировать php в public) => php -S localhost:8080
    if ($c) {
      $message .= '<tr>';
      $c = true;
    } else {
      $message .= '<tr style="background-color: #f8f8f8;">';
    }
    $message .= "<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$message_key</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$message_value</td></tr>";
  }
}
$message = "<table style='width: 100%;'>$message</table>";

//Script Foreach
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './libmail/Exception.php';
require './libmail/PHPMailer.php';
require './libmail/SMTP.php';

$mail = new PHPMailer;
    //Server settings                            
    $mail->CHarSet = 'utf-8';
    $mail->XMailer = ' ';
    $mail->isSMTP();
    $mail->Host       = 'smtp.yandex.ru'; //посмотреть, как подключить smtp (@mail.ru)
    $mail->SMTPAuth   = true;
    $mail->Username   = '!!!MAIL!!!';
    $mail->Password   = '!!!PASSWORD!!!';
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;

    //Recipients
    $mail->FromName = '--';
    $mail->From ='form@coconut.by';
    $mail->addAddress('', 'Info Coconut');
    $mail->addAddress('--Заказчик - не отправлять письма со своей почты!!!', '--');


    // Content
    $mail->isHTML(true);
    $mail->Subject = '--';
    $mail->Body = $message;
    try {
      $mail->send();
      echo "Сообщение успешно отправлено";
  } catch (Exception $e) {
      echo "Mailer Error: " . $mail->ErrorInfo;
  }
?>