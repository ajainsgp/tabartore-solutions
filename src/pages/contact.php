<?php

header("Content-Type: application/json");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/PHPMailer.php';
require __DIR__ . '/PHPMailer/SMTP.php';
require __DIR__ . '/PHPMailer/Exception.php';

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false]);
    exit;
}

// Sanitize
$name    = trim(strip_tags($_POST["name"] ?? ""));
$email   = filter_var($_POST["email"] ?? "", FILTER_VALIDATE_EMAIL);
$company = trim(strip_tags($_POST["company"] ?? ""));
$message = trim(strip_tags($_POST["message"] ?? ""));

if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(["success" => false]);
    exit;
}

$mail = new PHPMailer(true);

try {

    // SMTP CONFIG
    $mail->isSMTP();
    $mail->Host       = 'smtp.hostinger.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'info@tabartore.com';
    $mail->Password   = 'YOUR_EMAIL_PASSWORD';   // ← change
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;

    // Sender
    $mail->setFrom('info@tabartore.com', 'Tabartore Website');

    // Receiver
    $mail->addAddress('info@tabartore.com');

    // Reply to visitor
    $mail->addReplyTo($email, $name);

    $mail->Subject = 'New Contact Form Submission - Tabartore';

    $mail->Body =
        "New enquiry from Tabartore website:\n\n" .
        "Name: $name\n" .
        "Email: $email\n" .
        "Company: $company\n\n" .
        "Message:\n$message\n";

    $mail->send();

    echo json_encode(["success" => true]);

} catch (Exception $e) {

    http_response_code(500);
    echo json_encode([
        "success" => false,
        "error" => $mail->ErrorInfo
    ]);
}