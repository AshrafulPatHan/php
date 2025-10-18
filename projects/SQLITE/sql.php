<?php 

# SQLite database connection
try {
    $db = new PDO('sqlite:mydb.sqlite');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "✅ SQLite Database Connected Successfully! \n";
	
	# create table
    function CreateTable($db){
		
		$db->exec("CREATE TABLE IF NOT EXISTS users (
		    id INTEGER PRIMARY KEY AUTOINCREMENT,
		    name TEXT,
		    email TEXT
		)");
		echo "✅ Table created successfully! \n";
    };
    // CreateTable($db)

    # add user
    function AddUser($db){
    	$stmt = $db->prepare("INSERT INTO users (name, email) VALUES (:name, :email)");
		$stmt->bindValue(':name', 'your name');
		$stmt->bindValue(':email', 'your.name@my.com');
		$stmt->execute();

		echo "✅ New user added! \n";
    } 
    // AddUser($db);

    # read user
    function ReadUser($db){
		$result = $db->query("SELECT * FROM users");

		foreach ($result as $row) {
		    echo "ID: " . $row['id'] . " | Name: " . $row['name'] . " | Email: " . $row['email'] . "\n";
		}
    }
    ReadUser($db);

    # update user name
    function UpdateUserName($db){
    	$stmt = $db->prepare("UPDATE users SET name = :name WHERE id = :id");
		$stmt->bindValue(':name', ' Pathan');
		$stmt->bindValue(':id', 1);
		$stmt->execute();
    }
    // UpdateUserName($db);

    # Update full user
	function UpdateUser($db){
	    $stmt = $db->prepare("UPDATE users SET name = :name, email = :email WHERE id = :id");
	    $stmt->bindValue(':name', 'ashraful');
	    $stmt->bindValue(':email', 'ashraful@my.top');
	    $stmt->bindValue(':id', 1);
	    $stmt->execute();

	    echo "✅ User updated successfully!\n";
	}

	// UpdateUser($db);


    # Delete user
    function DeleteUser($db){
    	$stmt = $db->prepare("DELETE FROM users WHERE id = :id");
		$stmt->bindValue(':id', 1);
		$stmt->execute();

		echo "user is deleted ! \n"
    }
    // DeleteUser($db);

   
echo "\n";
} catch (PDOException $e) {
    echo "❌ Connection Failed: " . $e->getMessage();
}


?>