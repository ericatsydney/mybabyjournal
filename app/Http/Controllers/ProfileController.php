<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Profile;

class ProfileController extends Controller
{
  public function __construct() {
    $this->middleware('auth:api');
  }

  public function index() {
    $profiles = Profile::all();
    return $profiles;
  }

  public function show($id) {
    $profile = Profile::findOrFail($id);
    return $profile;
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
      // When create profile, some moments will be created automatically
      // e.g. due date/ first date out/ start crawling/ start teething
      $profile = new Profile;
      $profile->first_name = $request->get('first_name');
      $profile->last_name = $request->get('last_name');
      $profile->date_of_birth = $request->get('date_of_birth');
      if ($profile->save()) {
        return 'succeed';
      }
      else {
	return 'fail';
      }
  }

  public function destroy($id)
  {
      $profile = Profile::findOrFail($id);
      if(!$profile) {
          throw new NotFoundHttpException;
      }
      if($profile->delete()) {
        return 'succeed';
      }
      else {
	return 'fail';
      }
   }
}
