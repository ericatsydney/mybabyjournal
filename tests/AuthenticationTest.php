<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class AuthenticationTest extends TestCase
{

    /**
     * Test the passport authentication.
     *
     * @return void
     */
    public function testExample()
    {
      $user = factory(App\User::class)->create();

      $this->actingAs($user)
        ->withSession(['foo' => 'bar'])
        ->visit('/profiles')
        ->see('Name');
    }
}
