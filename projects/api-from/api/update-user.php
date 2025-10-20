<?php

# post requist
if ($_SERVER["REQUEST_METHOD"] === "PATCH") {
    // input reseve
    $data = json_decode(file_get_contents("php://input"), true);
    $id = $data['id'] ?? '';
    $name = $data['name'] ?? '';
    $email = $data['email'] ?? '';

    
    // if the name or email is ematy 
    if (empty($name) || empty($email) || empty($id) ) {
        echo json_encode(["error" => "Please provide both name and email."]);
        exit;
    }
        
        
    # -- connect database
    function DatabaseCollection($id,$name,$email){
        # SQLite database connection
        try {
            // $db = new PDO('sqlite:user.sqlite'); < if file on root path >
            $db = new PDO('sqlite:' . __DIR__ . '/../DB/user.sqlite');
            $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            // echo "✅ SQLite Database Connected Successfully! \n";


            function createTable(){
                // is table is not exist # this code is work
                $db->exec("CREATE TABLE IF NOT EXISTS users (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT NOT NULL,
                    email TEXT NOT NULL
                )");

                echo "✅ Table checked/created successfully! \n";
            }
            // createTable()
            
            
            # Update user
            function UpdateUser($db,$id,$name,$email){
               $stmt = $db->prepare("UPDATE users SET name = :name, email = :email WHERE id = :id");
                $stmt->bindValue(':name', "$name");
                $stmt->bindValue(':email', "$email");
                $stmt->bindValue(':id', $id);
                $stmt->execute();

                // echo "✅ User updated successfully!\n";
                echo json_encode([
                    "success" => true,
                    "message" => "User is update successfully",
                    "data" => [
                        "name" => $name,
                        "email" => $email
                    ]
                ]);
            };
            UpdateUser($db,$id,$name,$email);
            
        } catch (PDOException $e) {
            echo json_encode(["error" => "Connection Failed: " . $e->getMessage()]);
        }
    }
    DatabaseCollection($id,$name,$email);



} else {
    echo json_encode(["error" => "Only PATCH request is allowed!"]);
}


?>