<?php
header('Content-Type: application/json');

// ✅ Railway MySQL Database credentials
$host = "gondola.proxy.rlwy.net";
$user = "root";
$pass = "lddUAWKWoNVzzfUciKpzXrwzGBEHLHOk";
$db   = "railway";
$port = 55940;

// ✅ Database connection
$conn = new mysqli($host, $user, $pass, $db, $port);
if ($conn->connect_error) {
    die(json_encode(['status' => false, 'message' => $conn->connect_error]));
}

// ✅ Handle GET request - Get all mails
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $sql = "SELECT * FROM mails";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $mails = $result->fetch_all(MYSQLI_ASSOC);
        echo json_encode(['status' => true, 'data' => $mails]);
    } else {
        echo json_encode(['status' => true, 'data' => []]);
    }
}

// ✅ Handle POST request - Insert new mail
elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    // Validation check
    if (!isset($data['mail'], $data['user_mail'], $data['email'])) {
        echo json_encode(['status' => false, 'message' => 'Missing required fields']);
        exit;
    }

    $mail = $conn->real_escape_string($data['mail']);
    $user_mail = $conn->real_escape_string($data['user_mail']);
    $email = $conn->real_escape_string($data['email']);

    $sql = "INSERT INTO mails (mail, user_mail, email) VALUES ('$mail', '$user_mail', '$email')";
    if ($conn->query($sql)) {
        echo json_encode(['status' => true, 'message' => 'Mail added successfully']);
    } else {
        echo json_encode(['status' => false, 'message' => $conn->error]);
    }
}

$conn->close();
?>
