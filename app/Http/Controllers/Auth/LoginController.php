<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Socialite;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct() {
        $this->middleware('guest', ['except' => 'logout']);
    }

    /**
     * Redirect user to Facebook authentication page.
     */
    public function redirectToProvider() {
      return Socialite::driver('facebook')->redirect();
    }

    /**
     * Obtain user information from Facebook.
     */
    public function handleProviderCallback() {
      $user = Socialite::driver('facebook')->user();

      // OAuth Two Providers
      $token = $user->token;
      $refreshToken = $user->refreshToken; // not always provided
      $expiresIn = $user->expiresIn;
      
      // All Providers
      $user->getId();
      $user->getNickname();
      $user->getName();
      $user->getEmail();
      $user->getAvatar();

      dd($user);
    }
}
