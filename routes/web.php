<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
| Exclude any route related to api.
|
*/

// This is for the auth scaffolding.
// @todo will be refactored later.
Auth::routes();

Route::get('/home', 'HomeController@index');

// This is the index template for react routing.
Route::get('{slug}', function() {
    return view('index');
})
->where('slug', '(?!api)([A-z\d-\/_.]+)?');
