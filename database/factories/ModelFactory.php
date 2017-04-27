<?php

use Faker\Generator as Faker;
use App\User;
use App\Profile;
use App\Moment;
/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(User::class, function (Faker $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
    ];
});

$factory->define(Profile::class, function (Faker $faker) {
  return [
    'first_name' => $faker->firstName,
    'last_name' => $faker->lastName,
    'gender' => 'girl',
    'avatar' => '\/avatars\/1\/avatar.png',
    'date_of_birth' => $faker->date,
  ];
});

$factory->define(Moment::class, function (Faker $faker) {
  return [
    'name' => $faker->sentence($nbWords = 5, $variableNbWords = true),
    'profile_id' => function() {
       return factory(App\Profile::class)->create()->id;
    },
    'description' => 'description goes here',
    'photos' => '{\"title\":\"file\\\/path.png\"}',
  ];
});

