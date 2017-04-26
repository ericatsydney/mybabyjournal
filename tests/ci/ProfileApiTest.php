<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ProfileApiTest extends TestCase
{
    use WithoutMiddleware;

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testProfileList()
    {
      // Assert that each user in the list has at least an id, name and email attribute.
      $this->get('/api/profiles')
        ->seeJsonStructure([
          '*' => [
            'id', 'first_name', 'last_name', 'gender', 'date_of_birth'
          ]
        ]); 
    }

    public function testProfile()
    {
      // Assert that each user in the list has at least an id, name and email attribute.
      $this->get('/api/profiles/1')
        ->seeJsonStructure([
          'id', 'first_name', 'last_name', 'gender', 'date_of_birth'
        ]); 
    }
}
