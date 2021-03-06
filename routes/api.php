<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

// Profiles routes
Route::resource('profiles', 'ProfileController',
  ['only' => ['index', 'show', 'store', 'destroy', 'update']]);

// Moments routes
Route::resource('moments', 'MomentController',
  ['only' => ['index', 'show', 'store', 'destroy']]);

// Profiles/Moments routes
Route::resource('profiles.moments', 'ProfileMomentController',
  ['only' => ['index', 'show', 'store', 'destroy', 'update']]);
