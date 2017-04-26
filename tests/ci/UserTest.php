<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class UserTest extends TestCase
{
    use DatabaseTransactions;

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testRegisterPage() {
      $this->visit('/register')
        ->type('eric3', 'name')
        ->type('eric3@gmail.com', 'email')
        ->type('abc123', 'password')
        ->type('abc123', 'password_confirmation')
        ->press('Register')
        ->seePageIs('/home');
    }

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testLoginPage() {
      $this->visit('/login')
        ->type('eric3@gmail.com', 'email')
        ->type('abc123', 'password')
        ->press('Login')
        ->seePageIs('/home');
    }
}
