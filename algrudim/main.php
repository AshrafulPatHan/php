<?php

$json_file_path = 'user.json';
$json_string = file_get_contents($json_file_path);
$array = json_decode($json_string, true);

// $array = '/..DB/user.json'; 

function FindUser($array){
    # get input
    $input = "1";
    $result = "Invaled input";
    
    // chek the inpute type
    if (is_numeric($input)) {
        
    }elseif (condition) {
        # code...
    }elseif (condition) {
        # code...
    }elseif (condition) {
        # code...
    }
}
FindUser($array);

echo "\n"




?>