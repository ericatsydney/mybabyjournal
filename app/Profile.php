<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
  protected $fillable = ['first_name', 'last_name', 'date_of_birth'];

  /**
   * Each profiel could have many moments.
   *
   * @return \Illuminate\Database\Eloquent\Relations\HasMany
   */
  public function moments()
  {
    return $this->hasMany('App\Moment');
  }
}
