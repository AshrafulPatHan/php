<?php

# PHP Indexed Arrays
$array_ = array("hello","hi","tata","byby");
var_dump($array_);

print($array_[0]."\n");

// all array data
echo "All array data : \n";

foreach ($array_ as $x) {
  echo "$x \n";
}
echo " \n";

# PHP Associative Arrays
$car = array("brand"=>"Ford", "model"=>"Mustang", "year"=>1964);
var_dump($car);
echo $car["model"];
echo " \n";

// change the year value
$car["year"] = 2024;
var_dump($car);
echo " \n";



# PHP Create Arrays
$carsName = ["Volvo", "BMW", "Toyota"];
echo $carsName[0];
echo " \n";


#PHP Update Array Items
$fruits = ["banana","pineapple","mango"];
var_dump($fruits);

// change the 3th fruit name
$fruits[2] = "Orange";
var_dump($fruits);
echo " \n";

# PHP Delete Array Items
echo "PHP Delete Array Items : \n";
$cars_ = array("Volvo", "BMW", "Toyota");
array_splice($cars_, 1, 1);
var_dump($cars_);

echo " \n";

echo "Delete Array Items : 2 \n";
$cars_ = array("Volvo", "BMW", "Toyota");
unset($cars_[1]);
var_dump($cars_);


# PHP Sorting Arrays
echo "PHP Sorting Arrays : \n";
$numbers = array(4, 6, 2, 22, 11);

sort($numbers); // sort the array
print_r($numbers);




#END
echo " \n";
?>