<?php

# -- connect database
function DatabaseCollection(){
    # SQLite database connection
    try {
        // $db = new PDO('sqlite:user.sqlite'); < if file on root path >
        $db = new PDO('sqlite:' . __DIR__ . '/../DB/user.sqlite');
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "✅ SQLite Database Connected Successfully! \n";
        
        
        
    } catch (PDOException $e) {
        echo "❌ Connection Failed: " . $e->getMessage();
    }
}
DatabaseCollection();

?>