<?php
// database connect
class MyDB extends SQLite3{
    function __construct(){
        $this->open('db/main.sqlite');
    }
}
$db = new MyDB();
if (!$db) {
    echo $db ->lastErrorMg();
} else{
    echo "Opened database successfully\n";
}

// Create Tabil
function CreateTabil(){
    $db->exec('CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, email TEXT)');
}
// CreateTabil()

// Insert data
function AddSomeData(){
    $db->exec("INSERT INTO users (name, email) VALUES ('John Doe', 'john.doe@example.com')");
}
// AddSomeData()


// Query the database
$result = $db->query('SELECT * FROM users');

// Fetch rows as associative arrays
while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
    echo 'ID: ' . $row['id'] . ' Name: ' . $row['name'] . ' Email: ' . $row['email'] . " \n";
}

?>