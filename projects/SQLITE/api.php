<?php
// ✅ CORS Headers যোগ করা
header("Access-Control-Allow-Origin: *"); // সব ডোমেইন থেকে এক্সেস অনুমতি
header("Access-Control-Allow-Methods: POST, GET, OPTIONS"); // অনুমোদিত মেথড
header("Access-Control-Allow-Headers: Content-Type"); // ক্লায়েন্টের পাঠানো হেডার অনুমতি

// যদি OPTIONS রিকোয়েস্ট হয় (preflight)
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

// ✅ POST ডেটা রিসিভ করা
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';

    // ইনপুট ভ্যালিডেশন
    if (empty($name) || empty($email)) {
        echo json_encode(["error" => "Please provide both name and email."]);
        exit;
    }

    // রেসপন্স রিটার্ন করা
    echo json_encode([
        "message" => "The mail is sent by $name on this email: $email"
    ]);
} else {
    echo json_encode(["error" => "Only POST request is allowed!"]);
}
?>
