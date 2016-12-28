<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class ProfilesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $faker = Faker::create();
      DB::table('profiles')->insert([
          'first_name' => $faker->firstName,
          'last_name' => $faker->lastName,
          'date_of_birth' => $faker->date,
      ]);
    }
}
