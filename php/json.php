<?php

# create a json on php
$data = array(
    "name" => "John Doe",
    "age" => 30,
    "city" => "New York"
);

$json_string = json_encode($data);
echo $json_string;
// Output: {"name":"John Doe","age":30,"city":"New York"}
echo "\n";
?>