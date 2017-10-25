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


$awesomistMail = new PHPMailer();
$awesomistMail->IsSMTP();
$awesomistMail->Mailer = 'smtp';
$awesomistMail->SMTPAuth = true;
$awesomistMail->Host = 'smtp.gmail.com'; 
$awesomistMail->Port = 587;
$awesomistMail->SMTPSecure = 'tls';
// or try these settings (worked on XAMPP and WAMP):
// $codescafeMail->Port = 587;
// $codescafeMail->SMTPSecure = 'tls';
$awesomistMail->Username = "educationsmart24@gmail.com";
$awesomistMail->Password = "********";
$awesomistMail->IsHTML(true); // For HTML formatted mails
$awesomistMail->SingleTo = true; 
$awesomistMail->From = $email;
$awesomistMail->FromName = $name;
$awesomistMail->Subject = 'Awesomists Freelancer';
$awesomistMail->Body = nl2br("NAME : ". $name . "\n" . "MOBILE : " . $mobile . "\n" . "EMAIL : " . $email . "\n" . "WEBSITE : " . $website . "\n" 
	. "EXPERTISE : " . $expertise . "\n" . "DESCRIPTION :" . $desc . "\n");
$awesomistMail->AddAddress("nashah25@gmail.com", "Nasruddin shah");

 if(!$awesomistMail->Send()){
        echo "Something Wrong! Message was not send!! " . $awesomistMail->ErrorInfo;
}
else{
        echo "success";
}

?>
