<?php
require 'PHPMailer-master/class.phpmailer.php';
require 'PHPMailer-master/class.smtp.php';
require 'PHPMailer-master/PHPMailerAutoload.php';

$name = $_POST["name"];
$email = $_POST["email"];
$mobile = $_POST["mobile"];
$website = $_POST["website"];
$expertise = $_POST["expertise"];
$fileupload = $_POST["fileupload"];
$desc = $_POST["desc"];



$codescafeMail = new PHPMailer();
$codescafeMail->IsSMTP();
$codescafeMail->Mailer = 'smtp';
$codescafeMail->SMTPAuth = true;
$codescafeMail->Host = 'smtp.gmail.com'; 
$codescafeMail->Port = 587;
$codescafeMail->SMTPSecure = 'tls';
// or try these settings (worked on XAMPP and WAMP):
// $codescafeMail->Port = 587;
// $codescafeMail->SMTPSecure = 'tls';
$codescafeMail->Username = "educationsmart24@gmail.com";
$codescafeMail->Password = "passports";

$codescafeMail->IsHTML(true); // For HTML formatted mails
$codescafeMail->SingleTo = true; 
$codescafeMail->From = $email;
$codescafeMail->FromName = $name;
$codescafeMail->Subject = $subject;
$codescafeMail->Body = nl2br("NAME : ". $name . "\n" . "COMPANY : ". $company . "\n" . "DESIGNATION : ". $designation . "\n" . 
			"MOBILE : " . $mobile . "\n" . "EMAIL : " . $email . "\n" . "COUNTRY : " . $country . "\n" . "MESSAGE : " . $message);
$codescafeMail->AddAddress("nashah25@gmail.com", "Nasruddin shah");
 if(!$codescafeMail->Send()){
        echo "Something Wrong! Message was not send!! " . $codescafeMail->ErrorInfo;
}
else{
        echo "success";
}
?>