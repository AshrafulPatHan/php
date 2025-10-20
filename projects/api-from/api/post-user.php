<?php

# post requist
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // input reseve
    $data = json_decode(file_get_contents("php://input"), true);
    $name = $data['name'] ?? '';
    $email = $data['email'] ?? '';

    
    // if the name or email is ematy 
    if (empty($name) || empty($email)) {
        echo "Please provide both name and email.";
        exit;
    }
    
    
        
    # -- connect database
    function DatabaseCollection($name,$email){
        # SQLite database connection
        try {
            // $db = new PDO('sqlite:user.sqlite'); < if file on root path >
            $db = new PDO('sqlite:' . __DIR__ . '/../DB/user.sqlite');
            $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            echo "✅ SQLite Database Connected Successfully! \n";
            
            # add user
            function AddUser($db,$name,$email){
                $stmt = $db->prepare("INSERT INTO users (name, email) VALUES (:name, :email)");
                $stmt->bindValue(':name', "$name");
                $stmt->bindValue(':email', "$email");
                $stmt->execute();

                echo "✅ New user added! \n";
            };
            AddUser($db,$name,$email);
            
        } catch (PDOException $e) {
            echo "❌ Connection Failed: " . $e->getMessage() . "\n";
        }
    }
    DatabaseCollection($name,$email);

    echo "The mail is send by : $name , on this email : $email \n";


} else {
    echo "Only POST request is allowed!";
}


?>