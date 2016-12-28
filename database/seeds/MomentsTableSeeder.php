<?php

use Illuminate\Database\Seeder;

class MomentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      factory(App\Moment::class, 3)->create();
    }
}
