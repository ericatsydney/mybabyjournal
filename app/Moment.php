<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Moment extends Model
{
  protected $fillable = ['profile_id', 'name'];

  /**
   * Moment belong to one profile.
   *
   * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
   */
  public function profile()
  {
    return $this->belongsTo('App\Profile');
  }
}
