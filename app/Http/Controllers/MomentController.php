<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Moment;

class MomentController extends Controller
{ 
  public function __construct() {
//    $this->middleware('auth:api');
  }
  public function index() {
	  // @todo add checking the user authorization.
    $moments = Moment::all();
    return $moments;
  }

  public function show($id) {
    $moment = Moment::findOrFail($id);
    return $moment;
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request) {
      $moment = new Moment;
      $moment->name = $request->get('name');
      if ($moment->save()) {
        return 'succeed';
      }
      else {
	return 'fail';
      }
  }

  public function destroy($id) {
      $moment = Moment::findOrFail($id);
      if(!$moment) {
          throw new NotFoundHttpException;
      }
      if($moment->delete()) {
        return 'succeed';
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
      $moment = Moment::findOrFail($id);
      $file = $request->file('avatar');
      //@todo refactor this for security reason.
      $file_path = $file->storeAs('avatars/' . $id,  'avatar.png');
      $result = $request->all();
      $result['avatar'] = '/avatars/' . $id . '/avatar.png';

      if ($moment->update($result)) {
	return redirect('profiles/'. $moment->profileId . '/edit');
      }
      else {
	return 'Fail';
      }
  }
}
