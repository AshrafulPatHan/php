<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request; # add this code for useing post method

Route::get('/', function () {
    return view('home');
});

Route::get('/welcome', function () {
    return view('welcome');
});

// api routes
Route::get('/api', function () {
    return [
        "Status"=>"the server is working",
        "Vartion"=>"1.2",
    ];
});

// get data from url
Route::get('/api/{name}',function($name){
    return "<h1> $name </h1>";
});

# --- post routes
// post route example
Route::post('/fromuser', function(Request $request){
    $fullname = $request->input("fullname");
    return "Your name is $fullname ";

});

