<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class UserTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testLoginPage() {
      $this->visit('/login')
        ->type('eric@gmail.com', 'email')
        ->type('abc123', 'password')
        ->press('Login')
        ->seePageIs('/home');
    }

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testRegisterPage() {
      $this->visit('/register')
        ->type('eric1', 'name')
        ->type('eric1@gmail.com', 'email')
        ->type('abc123', 'password')
        ->type('abc123', 'password_confirmation')
        ->press('Register')
        ->seePageIs('/home');
    }
}
