<?php

class Fruit {
    // properties
    public $name;
    public $color;

    // methods
    function set_name($name) {
        return $this->name = $name ;
    }
    function get_name() {
        return $this->name;
    }
}

$apple = new Fruit();
$banana = new Fruit();

$apple->set_name('Apple');
$banana->set_name('Banana');


echo $apple->get_name();
echo "\n";
echo $banana->get_name();
echo "\n";

?>