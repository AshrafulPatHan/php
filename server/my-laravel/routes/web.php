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

# --- mongodb databse ---
use MongoDB\Driver\ServerApi;


$uri = env('MONGODB_DATABSE_URL');

// Set the version of the Stable API on the client
$apiVersion = new ServerApi(ServerApi::V1);

// Create a new client and connect to the server
$client = new MongoDB\Client($uri, [], ['serverApi' => $apiVersion]);

// Database and Collection 
$db = $client->laravel;  // Database name
$collection = $db->users; // Collection name

// test on existing
$furniorDB = $client->Furniro;  // Database name
$FurniorCollection = $furniorDB->user; // Collection name


try {
    // Send a ping to confirm a successful connection
    $client->selectDatabase('admin')->command(['ping' => 1]);
    echo "Pinged your deployment. You successfully connected to MongoDB!\n";

    Route::get('/furnior',function(){
       $result = $FurniorCollection->find();
       return $result; 
    });
    
} catch (Exception $e) {
    printf($e->getMessage());
}


