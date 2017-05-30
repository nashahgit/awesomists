<?php
require 'PHPMailer-master/class.phpmailer.php';
require 'PHPMailer-master/class.smtp.php';
require 'PHPMailer-master/PHPMailerAutoload.php';

if(!empty($_POST["name"]) && !empty($_POST["email"]) && !empty($_POST["mobile"]) && !empty($_POST["website"]) && !empty($_POST["expertise"]) && !empty($_POST["desc"])){
        $name = $_POST["name"];
        $email = $_POST["email"];
        $mobile = $_POST["mobile"];
        $website = $_POST["website"];
        $expertise = $_POST["expertise"];
        $desc = $_POST["desc"];
}else {
        exit("What are you actually trying to do? Tell me...");
}


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
$codescafeMail->Subject = 'Awesomists Freelancer';
$codescafeMail->Body = nl2br("NAME : ". $name . "\n" . "MOBILE : " . $mobile . "\n" . "EMAIL : " . $email . "\n" . "WEBSITE : " . $website . "\n" 
	. "EXPERTISE : " . $expertise . "\n" . "DESCRIPTION :" . $desc . "\n");
$codescafeMail->AddAddress("nashah25@gmail.com", "Nasruddin shah");

 if(!$codescafeMail->Send()){
        echo "Something Wrong! Message was not send!! " . $codescafeMail->ErrorInfo;
}
else{
        echo "success";
}

?>