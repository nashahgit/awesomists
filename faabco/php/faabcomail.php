<?php
require 'PHPMailer-master/class.phpmailer.php';
require 'PHPMailer-master/class.smtp.php';
require 'PHPMailer-master/PHPMailerAutoload.php';

$name = $_POST["name"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$subject = $_POST["subject"];
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
$codescafeMail->Username = "faabcoexims2016@gmail.com";
$codescafeMail->Password = "faisalpaichu2016";
$codescafeMail->IsHTML(true); // For HTML formatted mails
$codescafeMail->SingleTo = true; 
$codescafeMail->From = $email;
$codescafeMail->FromName = $name;
$codescafeMail->Subject = 'Awesomists Freelancer';
$codescafeMail->Body = nl2br("NAME : ". $name . "\n" . "PHONE : " . $phone . "\n" . "EMAIL : " . $email . "\n" . "SUBJECT : " . $subject . "\n" 
	. "DESCRIPTION :" . $desc . "\n");
$codescafeMail->AddAddress("nashah25@gmail.com", "Nasruddin shah");

 if(!$codescafeMail->Send()){
        echo "Something Wrong! Message was not send!! " . $codescafeMail->ErrorInfo;
}
else{
        echo "success";
}

?>