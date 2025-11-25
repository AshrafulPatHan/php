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
    echo "Opened database successfully \n ";
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
    $db->exec("INSERT INTO cars (carName,brand,price) VALUES ('auto riska','tata','100000')");
};
// Addcars($db);

// Query the database
$AllCars = $db->query('SELECT * FROM cars');

$hi = "all cars";

function CarData($AllCars){
    // Fetch rows as associative arrays
    while ($row = $AllCars->fetchArray(SQLITE3_ASSOC)) {
        return 'ID: ' . $row['id'] . ' Car Name: ' . $row['carName'] . ' , Brand: ' . $row['brand'] . ' , Price: ' . $row['price'] . " \n";
    }
}
$renderCar = CarData($AllCars);


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
    <p>'.$hi.'</p>
    <p>'.$renderCar.'</p>
</body>
</html>
';

?>