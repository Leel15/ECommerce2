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
}
