<?php
# find user data algrudim

$json_file_path = 'user.json';
$json_string = file_get_contents($json_file_path);
$array = json_decode($json_string, true);

// print_r($array);
echo "\n";

function FindUser($array){
    # get input
    $input = "Karim Ahmed";
    $result = "Invaled input";
    $foundUser = null;
    
    // chek the inpute type
    if (is_numeric($input) && substr($input, 0, 1) != "+" ) {
        $input = (int)$input;
        foreach ($array as $user) {
            if ($user['id'] === $input) {
                $foundUser = $user;
                break;
            }
        }
        $result = [$foundUser['id'] ,$foundUser['name'],$foundUser['email'],$foundUser['photo'],$foundUser['phone'] ];
    }elseif (is_numeric(substr($input, 3)) && (int)(substr($input, 3)) >10 && substr($input, 0, 1) === "+" ) {
        foreach ($array as $user) {
            if ($user['phone'] === $input) {
                $foundUser = $user;
                break;
            }
        }
        $result = [$foundUser['id'] ,$foundUser['name'],$foundUser['email'],$foundUser['photo'],$foundUser['phone'] ];
    }elseif (str_contains($input, '@')) {
        foreach ($array as $user) {
            if ($user['email'] === $input) {
                $foundUser = $user;
                break;
            }
        }
        $result = [$foundUser['id'] ,$foundUser['name'],$foundUser['email'],$foundUser['photo'],$foundUser['phone'] ];
    }elseif (is_string($input)) {
        foreach ($array as $user) {
            if ($user['name'] === $input) {
                $foundUser = $user;
                break;
            }
        }
        $result = [$foundUser['id'] ,$foundUser['name'],$foundUser['email'],$foundUser['photo'],$foundUser['phone'] ];
    }
    return $result;
}
print_r (FindUser($array));

echo "\n";




?>