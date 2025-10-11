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



#END
echo " \n";
?>