<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    protected $fillable = [
        'name',
        'description',
    ];

    public function products(){
        return $this->hasMany(products::class);
    }
}
