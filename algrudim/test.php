<?php

$users = [
    ['id' => 1, 'name' => 'Alice', 'email' => 'alice@example.com'],
    ['id' => 2, 'name' => 'Bob', 'email' => 'bob@example.com'],
    ['id' => 3, 'name' => 'Charlie', 'email' => 'charlie@example.com'],
];

$userIdToFind = 2;
$foundUser = null;

foreach ($users as $user) {
    if ($user['id'] === $userIdToFind) {
        $foundUser = $user;
        break; // Stop iterating once the user is found
    }
}

if ($foundUser) {
    echo "User found: " . $foundUser['name'] . " (" . $foundUser['email'] . ")";
} else {
    echo "User with ID " . $userIdToFind . " not found.";
}

?>