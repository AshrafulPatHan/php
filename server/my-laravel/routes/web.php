<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home');
});

Route::get('/welcome', function () {
    return view('welcome');
});

// api routes
Route::get('/api', function () {
    return [
        "hi",
        15,
        "bye"
    ];
});
