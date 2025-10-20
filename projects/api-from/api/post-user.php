<?php

# post requist
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // input reseve
    $data = json_decode(file_get_contents("php://input"), true);
    $name = $data['name'] ?? '';
    $email = $data['email'] ?? '';

    
    // if the name or email is ematy 
    if (empty($name) || empty($email)) {
        // echo "Please provide both name and email.";
        echo json_encode(["error" => "Please provide both name and email."]);
        exit;
    }
    
    
        
    # -- connect database
    function DatabaseCollection($name,$email){
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

                // echo "✅ Table checked/created successfully! \n";
                 echo json_encode(["message" => "✅ Table checked/created successfully!"]);
            }
            // createTable()
            
            
            # add user
            function AddUser($db,$name,$email){
                $stmt = $db->prepare("INSERT INTO users (name, email) VALUES (:name, :email)");
                $stmt->bindValue(':name', "$name");
                $stmt->bindValue(':email', "$email");
                $stmt->execute();

                // echo "✅ New user added! \n";
                echo json_encode([
                    "success" => true,
                    "message" => "New user added successfully",
                    "data" => [
                        "name" => $name,
                        "email" => $email
                    ]
                ]);
            };
            AddUser($db,$name,$email);
            
        } catch (PDOException $e) {
            // echo "❌ Connection Failed: " . $e->getMessage() . "\n";
            echo json_encode(["error" => "Connection Failed: " . $e->getMessage()]);
        }
    }
    DatabaseCollection($name,$email);

    // echo "The mail is send by : $name , on this email : $email \n";
    


} else {
    // echo "Only POST request is allowed!";
    echo json_encode(["error" => "Only POST request is allowed!"]);
}


?>