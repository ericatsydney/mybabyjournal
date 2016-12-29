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

// Moments routes
Route::get('moments',  'MomentController@index');
Route::get('moments/{id}',   'MomentController@show');
Route::post('moments',  'MomentController@store');
Route::delete('moments/{id}',   'MomentController@destroy');
//Route::get('moments/{id}/edit',   'MomentController@edit');
//Route::put('moments/{id}',  'MomentController@update');
//Route::patch('moments/{id}',  'MomentController@update');

// Profiles routes
Route::get('profiles',  'ProfileController@index');
Route::get('profiles/{id}',   'ProfileController@show');
Route::post('profiles',  'ProfileController@store');
Route::delete('profiles/{id}',   'ProfileController@destroy');
