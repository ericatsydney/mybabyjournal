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

      // Assign all the fields.
      $moment->name = $request->get('name');
      $photos = $request->file('photos');
      $result = $request->all();

      // If the photos not updated in the form.
      if (!$request->hasFile('photos')) {
        // Not update this field to the DB.
        $moment->photos = '';
      }
      else {
        $files = array();
        foreach($photos as $photo) {
          // Set the original name as the index.
          $file_name_array = explode('.', $photo->getClientOriginalName());
          // Set the path as the value.
          $file_path = $photo->store('photos');
          // Construct the array of the photos.
          $files[$file_name_array[0]] = $file_path;
        }
        // Serialize the result as json.
        $moment->photos = json_encode($files);
      }
      $moment->description = $request->get('description');
      $moment->profile_id = $profile_id;

      if ($moment->save()) {
	return redirect('profiles/'. $profile_id);
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
    public function update(Request $request, $profile_id, $id) {
      // @todo check the profile_id
      $moment = Moment::findOrFail($id);
      $photos = $request->file('photos');
      $result = $request->all();

      // If the photos not updated in the form.
      if (!$request->hasFile('photos')) {
        // Not update this field to the DB.
        unset($result['photos']);
      }
      else {
        $files = array();
        foreach($photos as $photo) {
          // Set the original name as the index.
          $file_name_array = explode('.', $photo->getClientOriginalName());
          // Set the path as the value.
          $file_path = $photo->store('photos');
          // Construct the array of the photos.
          $files[$file_name_array[0]] = $file_path;
        }
        // Serialize the result as json.
        $result['photos'] = json_encode($files);
      }

      if ($moment->update($result)) {
        return redirect('profiles/'. $profile_id);
      }
      else {
        return 'Fail';
      }
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
	return redirect('profiles/'. $profile_id);
      }
      else {
	return 'fail';
      }
    }
}
