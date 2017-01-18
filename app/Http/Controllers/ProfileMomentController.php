<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Moment;

class ProfileMomentController extends Controller
{
  public function __construct() {
//    $this->middleware('auth:api');
  }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($profile_id) {
      $moments = Moment::where('profile_id', $profile_id)->get();
      return $moments;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create() {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $profile_id) {
      $moment = new Moment;
      $moment->name = $request->get('name');
      $moment->photos = $request->get('photos');
      $moment->description = $request->get('description');
      $moment->profile_id = $profile_id;
      if ($moment->save()) {
        return 'succeed';
      }
      else {
	return 'fail';
      }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($profile_id, $id) {
      $moment = Moment::where('profile_id', $profile_id)
     	      ->where('id', $id)
     	      ->first();
      if ($moment !== null) {
        return $moment;
      }
      return 'fail';
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id) {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id) {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($profile_id, $id) {
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
}
