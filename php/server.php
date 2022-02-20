<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// The regular expression is set to a variable.
$regex = "/^[\w\d!#$%&'*+-\/=?^`{|}~]+(\.[\w\d!#$%&'*+-\/=?^`{|}~]+)*@([a-z\d][-a-z\d]*[a-z\d]\.)+[a-z][-a-z\d]*[a-z]$/";

$email = trim(htmlentities($_POST["email"]));
$name = trim(htmlentities($_POST["name"]));
$description = trim(htmlentities($_POST["description"]));

if(isset($name) && is_string($name) && !empty($name)){
    if(isset($email) && preg_match($regex,$email) && !empty($email)){
        if(isset($description) && is_string($description) && !empty($description)){
            //send mail
            $to = "defttouchinfo@gmail.com,oguelui@gmail.com";
            $from = "website@defttouchservices.com.ng";
            $cc = "website@defttouchservices.com.ng";
            $subject = "DeftTouch Website Visitors Consultations/Enquiry";
            $headers  = 'MIME-Version: 1.0' . "\r\n";
            $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

            // Create email headers
            $headers .= 'From: '.$from."\r\n".
                'Reply-To: '.$email."\r\n" .
                'X-Mailer: PHP/' . phpversion();

            // Compose a simple HTML email message
            $message = '<html><body>';
            $message .= "<h1 style='color:#f40;'>$name</h1>";
            $message .= "<p style='color:#080;font-size:18px;'>Sender's Email Address: $email</p>";
            $message .= "<p style='color:#080;font-size:18px;'>$description</p>";
            $message .= '</body></html>';
            if(mail($to, $subject, $message, $headers)){
                 echo "thank you for contacting us we'll get back to you";
            }else{
                 echo "oops! some error occured try again later";
            }
           
        }else{
            echo 'please fill in the message box';
        }
    }else{
        echo 'please enter a valid email';
    }
}else{
    echo 'please enter a valid name';
}