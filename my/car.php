<?php

class DataBase extends SQLite3{
    function __construct(){
        $this->open('db/main.sqlite');
    }
}
$db = new DataBase();
if (!$db) {
    echo $db->lastErrorMg();
}else{
    echo "Opened database successfully\n";
}

// Create Tabil
function CreateTabil($db){
    $db->exec('CREATE TABLE cars (id INTEGER PRIMARY KEY, 
        carName TEXT,
        brand TEXT,
        price TEXT
    )');
}
// CreateTabil($db);

// Insert Data 
function Addcars($db){
    $db->exec("INSERT INTO users (carName,brand,price) VALUE ('auto riska','tata','100000') ");
}
Addcars($db);
// html
echo '
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Care</title>
</head>
<body>
    <h2>Hello Cars</h2>
</body>
</html>
';

?>