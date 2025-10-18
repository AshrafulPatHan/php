<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    $name = $data['name'] ?? '';
    $email = $data['email'] ?? '';

    echo "The mail is send by $name on this email : $email";
}
?>
