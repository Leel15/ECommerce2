<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class products extends Model
{
    protected $fillable = [
        'name',
        'descreption',
        'price',
        'stocke',
        'categories_id',
        'image',
    ];

    public function categoy(){
        return $this->belongsTo(Categories::class ,'categories_id','id');
    }
}
