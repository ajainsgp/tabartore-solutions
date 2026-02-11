<?php
// Only allow POST requests
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
    exit;
}

// Basic security headers
header("Content-Type: application/json");

// Sanitize input
$name    = trim(strip_tags($_POST["name"] ?? ""));
$email   = filter_var($_POST["email"] ?? "", FILTER_VALIDATE_EMAIL);
$company = trim(strip_tags($_POST["company"] ?? ""));
$message = trim(strip_tags($_POST["message"] ?? ""));

// Validate fields
if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid input"]);
    exit;
}

// Email config
$to = "info@tabartore.com";
$subject = "New Contact Form Submission - Tabartore";
$headers = [
    "From: Tabartore Website <no-reply@tabartore.com>",
    "Reply-To: $email",
    "Content-Type: text/plain; charset=UTF-8"
];

$body = "New enquiry from Tabartore website:\n\n"
      . "Name: $name\n"
      . "Email: $email\n\n"
      . "Company: $company\n\n"
      . "Message:\n$message\n";

// Send mail
if (mail($to, $subject, $body, implode("\r\n", $headers))) {
    echo json_encode(["success" => true]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Mail failed"]);
}
