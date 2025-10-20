<?php

# -- connect database
function DatabaseCollection(){
    try {
        $db = new PDO('sqlite:' . __DIR__ . '/../DB/user.sqlite');
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        # Get all users
        $stmt = $db->query("SELECT * FROM users");
        $users = $stmt->fetchAll(PDO::FETCH_ASSOC); // fetch all data as associative array

        // Return JSON response
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode([
            "success" => true,
            "count" => count($users),
            "data" => $users
        ], JSON_PRETTY_PRINT);

    } catch (PDOException $e) {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode([
            "success" => false,
            "error" => $e->getMessage()
        ]);
    }
}

DatabaseCollection();

?>
