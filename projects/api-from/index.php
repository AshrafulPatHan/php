<?php


echo '

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
    <!-- link favicon -->
    <link rel="shortcut icon" href="./assets/phplite.png" type="image/x-icon">
    <!-- link css -->
    <link rel="stylesheet" href="./style/style.css">
</head>
<body>
    <h1 class="header-text">PHP app running on vartion : 1.0</h1>

    <div class="link-div">
        <p>From routes</p>
        <a href="/pages/user.html">Get user</a>
        <a href="/pages/registration.html">Post user</a>
        <a href="/pages/update.html">Update user</a>
        <a href="/pages/delete.html">Delete user</a>
    </div>
    
    <div class="link-div">
        <p>Api route</p>
        <a href="/api/get-user.php">get user api</a>
        <a href="/api/post-user.php">post user api</a>
        <a href="/api/update-user.php">update user api</a>
        <a href="/api/delete-user.php">delete user api</a>
    </div>
    

</body>
</html>

';


# -- connect database
function DatabaseCollection(){
    # SQLite database connection
    try {
        // $db = new PDO('sqlite:user.sqlite'); < if file on root path >
        $db = new PDO('sqlite:' . __DIR__ . '/DB/user.sqlite');
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "✅ SQLite Database Connected Successfully! \n";
        
        # create table
        function CreateUserTable($db){
            $db->exec("CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL
            )");
            echo "✅ Table created successfully! \n";
        };
        // CreateUserTable($db);
        
    } catch (PDOException $e) {
        echo "❌ Connection Failed: " . $e->getMessage();
    }
}
// DatabaseCollection();




?>

