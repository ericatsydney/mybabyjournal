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
Route::get('/', function() {
  return view('welcome');
});

// Avatar routing.
Route::get('avatars/{profileId}/{filename}', function ($profileId, $filename)
{
    $path = storage_path('app') . '/avatars/' . $profileId . '/' . $filename;

    if(!File::exists($path)) abort(404);

    $file = File::get($path);
    $type = File::mimeType($path);

    $response = Response::make($file, 200);
    $response->header("Content-Type", $type);

    return $response;
});

// Photos routing.
Route::get('photos/{filename}', function ($filename)
{
    $path = storage_path('app') . '/photos/' . $filename;

    if(!File::exists($path)) abort(404);

    $file = File::get($path);
    $type = File::mimeType($path);

    $response = Response::make($file, 200);
    $response->header("Content-Type", $type);

    return $response;
});

// This is the index template for react routing.
Route::get('{slug}', function() {
    return view('index');
})
->where('slug', '(?!api)([A-z\d-\/_.]+)?');
