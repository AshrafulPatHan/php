<?php

# -- connect database
function DatabaseCollection(){
    # SQLite database connection
    try {
        // $db = new PDO('sqlite:user.sqlite'); < if file on root path >
        $db = new PDO('sqlite:' . __DIR__ . '/../DB/user.sqlite');
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "✅ SQLite Database Connected Successfully! \n";
        
        # get all user
        function ReadUser($db){
            $result = $db->query("SELECT * FROM users");

            foreach ($result as $row) {
                echo "ID: " . $row['id'] . " | Name: " . $row['name'] . " | Email: " . $row['email'] . "\n";
            }
        }
        ReadUser($db);
        
    } catch (PDOException $e) {
        echo "❌ Connection Failed: " . $e->getMessage();
    }
}
DatabaseCollection();

?>