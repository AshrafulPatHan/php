<?php
// POST ডেটা রিসিভ করা
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // ইনপুট রিসিভ
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';

    // যদি name বা email খালি থাকে
    if (empty($name) || empty($email)) {
        echo "Please provide both name and email.";
        exit;
    }

    // রেসপন্স রিটার্ন করা
    echo "The mail is send by $name on this email : $email";
} else {
    echo "Only POST request is allowed!";
}
?>
