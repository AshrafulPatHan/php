<?php

$db = new PDO('sqlite:mydb.sqlite');

# read user
    function ReadUser($db){
		$result = $db->query("SELECT * FROM users");

		foreach ($result as $row) {
		    echo "ID: " . $row['id'] . " | Name: " . $row['name'] . " | Email: " . $row['email'] . "\n";
		}
    }
    $userData = ReadUser($db);
    echo "$userData"

?>