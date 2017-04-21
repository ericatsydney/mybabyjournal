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
      factory(App\Profile::class, 3)->create();
    }
}
