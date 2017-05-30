<?php
require 'PHPMailer-master/class.phpmailer.php';
require 'PHPMailer-master/class.smtp.php';
require 'PHPMailer-master/PHPMailerAutoload.php';

if(!empty($_POST["name"]) && !empty($_POST["email"]) && !empty($_POST["mobile"]) && !empty($_POST["company"]) && !empty($_POST["desc"]) && !empty($_POST["cms"]) 
&& !empty($_POST["ecomm"]) && !empty($_POST["graphics"]) && !empty($_POST["host"]) && !empty($_POST["domain"])){
        $name = $_POST["name"];
        $email = $_POST["email"];
        $mobile = $_POST["mobile"];
        $company = $_POST["company"];
        $desc = $_POST["desc"];
        $cms = $_POST["cms"];
        $graphics = $_POST["graphics"];
        $host = $_POST["host"];
        $domain = $_POST["domain"];
        $ecomm = $_POST["ecomm"];
}else {
        echo "What are you actually trying to do? Tell me...";
}

$name = $_POST["name"];
$email = $_POST["email"];
$mobile = $_POST["mobile"];
$company = $_POST["company"];
$desc = $_POST["desc"];
$cms = $_POST["cms"];
$graphics = $_POST["graphics"];
$host = $_POST["host"];
$domain = $_POST["domain"];
$ecomm = $_POST["ecomm"];

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
$codescafeMail->Subject = 'Required a Quote';
$codescafeMail->Body = nl2br("NAME : ". $name . "\n" . "MOBILE : " . $mobile . "\n" . "EMAIL : " . $email . "\n" . "COMPANY : " . $company . "\n" 
	 . "DESCRIPTION :" . $desc . "\n" . "CMS : " . $cms . "\n" . "GRAPHICS : " . $graphics . "\n" . "HOSTING : " . $host . "\n" . "DOMAIN : " . $domain . "\n" 
	 . "ECOMM : " . $ecomm . "\n");
$codescafeMail->AddAddress("nashah25@gmail.com", "Nasruddin shah");

 if(!$codescafeMail->Send()){
        echo "Something Wrong! Message was not send!! " . $codescafeMail->ErrorInfo;
}
else{
        echo "success";
}

?>