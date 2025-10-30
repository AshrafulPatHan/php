<?php

$json_file_path = 'user.json';
$json_string = file_get_contents($json_file_path);
$array = json_decode($json_string, true);

// print_r($array);
echo "\n";

function FindUser($array){
    # get input
    $input = "1";
    $result = "Invaled input";
    $foundUser = null;
    
    // chek the inpute type
    if (is_numeric($input)) {
        $input = (int)$input;
        foreach ($array as $user) {
            if ($user['id'] === $input) {
                $foundUser = $user;
                break;
            }
        }
        $result = $foundUser['name'];
    }
    // elseif (condition) {
    //     # code...
    // }elseif (condition) {
    //     # code...
    // }elseif (condition) {
    //     # code...
    // }
    return $result;
}
echo FindUser($array);

echo "\n";




?>