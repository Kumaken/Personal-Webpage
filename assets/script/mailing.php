<?php
    if(isset($_POST['submit'])) {
        $to = "kumaken132@gmail.com";
        $subject = $_POST['purpose'] . "- Email from my Site";
        $name_field = $_POST['name'];
        $email_field = $_POST['email'];
        $message = $_POST['message'];

        $body = "From: $name_field\n E-Mail: $email_field\n Message:\n $message";

        echo "Your message has been sent to $to!";
        mail($to, $subject, $body);
    }
    else
    {
    echo "An error has occured! Probably you don't have any SMTP server configured!";
    }
?>