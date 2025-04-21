<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categories;
class CategoriesController extends Controller
{
    public function Index()
    {
        return view ('categories.index');
    }


    public function Create(Request $request)
    {
       $arr=[
        'name'=>$request->categ_name,
        'description'=>$request->categ_descreption
       ];

       $items=Categories::Create($arr);
       $items->save();

    }
}
