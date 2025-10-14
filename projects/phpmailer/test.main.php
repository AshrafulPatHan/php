<?php

header('Content-Type: application/json');

# Railway mysql databse

// DB_CONNECTION=mysql
// DB_HOST=gondola.proxy.rlwy.net
// DB_PORT=55940
// DB_DATABASE=railway
// DB_USERNAME=root
// DB_PASSWORD=lddUAWKWoNVzzfUciKpzXrwzGBEHLHOk

$host = "gondola.proxy.rlwy.net";
$user = "root";
$pass = "lddUAWKWoNVzzfUciKpzXrwzGBEHLHOk";
$db   = "railway";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die(json_encode(['status'=>false, 'message'=>$conn->connect_error]));
}

// GET request: সব ইউজার দেখানো
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $result = $conn->query("SELECT * FROM mails");
    $users = [];
    while($row = $result->fetch_assoc()) {
        $users[] = $row;
    }
    echo json_encode($users);
}

// POST request: নতুন ইউজার যোগ করা
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    $mail = $data['mail'];
    $user_mail = $data['user_mail'];
    $email = $data['email'];

    $sql = "INSERT INTO mails (mail,user_mail,email) VALUES ('$name',$user_mail,'$email')";
    if ($conn->query($sql)) {
        echo json_encode(['status'=>true, 'message'=>'mail is send added']);
    } else {
        echo json_encode(['status'=>false, 'message'=>$conn->error]);
    }
}

$conn->close();
?>
