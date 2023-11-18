<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $contact = $_POST['contact'];
    $message = $_POST['message'];

    $to = "jk.nolasco.lrxs@gmail.com"; // Change this to your email
    $subject = "Karzhyn Message";
    $txt = "Name: $name\nContact: $contact\nMessage: $message";

    $headers = "From: lrx5.github.io/karzhyn"; // Change this to your email or domain

    mail($to, $subject, $txt, $headers);
    header("Location: message_sent.html"); // Redirect to a thank you page after sending
}
?>
