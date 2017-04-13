<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Profile;
use App\Moment;

class ProfileController extends Controller
{
  public function __construct() {
//    $this->middleware('auth:api');
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
  public function store(Request $request) {
      $profile = new Profile;
      $profile->first_name = $request->get('first_name');
      $profile->last_name = $request->get('last_name');
      $profile->avatar = $request->get('avatar');
      $profile->date_of_birth = $request->get('date_of_birth');
      $profile->gender = $request->get('gender');
      if ($profile->save()) {
        // When create profile, some moments will be created automatically
        // e.g. due date/ first date out/ start crawling/ start teething
	$moment = new Moment;
	$moment->profile_id = $profile->id;
	$moment->name = 'Promgram Insert Name';
	$moment->photos = '{}';
	$moment->description = 'yay';
	$moment->save();
        return 'succeed';
      }
      else {
	return 'fail';
      }
  }

  public function destroy($id) {
      $profile = Profile::findOrFail($id);
      if(!$profile) {
          throw new NotFoundHttpException;
      }
      if($profile->delete()) {
	// Delete the related moments as well.
        $number_of_deleted_moments = Moment::where('profile_id', $id)->delete();
        if($number_of_deleted_moments > 0) {
          // @todo pass the message to callout.
          //return 'Delete succeed and with related ' . $number_of_deleted_moments . ' moments';
	  return redirect('profiles');
	}
	else {
          // @todo pass the message to callout.
	  //return 'Delete succeed without any moments related';
	  return redirect('profiles');
	}
      }
      else {
	return 'fail';
      }
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, $id) {
      $profile = Profile::findOrFail($id);
      $result = $request->all();
      $file = $request->file('avatar');

      // If avatar is not updated
      if (!$request->hasFile('avatar')) {
        unset($result['avatar']);
      }
      else {
        //@todo this will be uncomment after testing.
        //$file_path = $file->storeAs('avatars/' . auth()->id(),  'avatar.png');
        $file_path = $file->storeAs('avatars/' . $id,  'avatar.png');
        //@todo this will be uncomment after testing.
        //$result['avatar'] = 'avatars/' . auth()->id() . '/avatar.png';
        $result['avatar'] = '/avatars/' . $id . '/avatar.png';
      }

      if ($profile->update($result)) {
	return redirect('profiles/'. $id . '/edit');
      }
      else {
	return 'Fail';
      }
  }
}
