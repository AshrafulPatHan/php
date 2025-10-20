<?php

# post requist
if ($_SERVER["REQUEST_METHOD"] === "DELETE") {
    // input reseve
    $data = json_decode(file_get_contents("php://input"), true);
    $id = $data['id'] ?? '';
    $name = $data['name'] ?? '';
    $email = $data['email'] ?? '';

    
    // if the name or email is ematy 
    if ( empty($id) ) {
        echo "Please provide both id and name and email.";
        exit;
    }
    
    
        
    # -- connect database
    function DatabaseCollection($id,$name,$email){
        # SQLite database connection
        try {
            // $db = new PDO('sqlite:user.sqlite'); < if file on root path >
            $db = new PDO('sqlite:' . __DIR__ . '/../DB/user.sqlite');
            $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            echo "✅ SQLite Database Connected Successfully! \n";


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
            
            
            # Delete user
            function DeleteUser($db,$id,$name,$email){
                $stmt = $db->prepare("DELETE FROM users WHERE id = :id");
                $stmt->bindValue(':id', $id);
                $stmt->execute();

                echo "user is deleted ! \n";
            };
            DeleteUser($db,$id,$name,$email);
            
        } catch (PDOException $e) {
            echo "❌ Connection Failed: " . $e->getMessage() . "\n";
        }
    }
    DatabaseCollection($id,$name,$email);

    echo "The mail is send by : $name , on this email : $email , his id is : $id \n";


} else {
    echo "Only POST request is allowed!";
}


?>