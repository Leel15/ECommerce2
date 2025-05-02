<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categories;
class CategoriesController extends Controller
{
    public function Index()
    {
        $get_items = Categories::All();
        return view ('categories.index', ['categoreis' => $get_items ]);
    }


    public function Create(Request $request)
    {
        $validate=$request->validate([
            'categ_name'=>'required|string|max:255',
            'categ_descreption'=>'nullable|string|max:255'
           ]);

       $arr=[
        'name'=>$request->categ_name,
        'description'=>$request->categ_descreption,
        'icon' => $request->icon,

       ];

       $items=Categories::Create($arr);
       $items->save();
 
       return redirect()->route('categories.index');
    }

    public function Delete($id){
        $data = Categories::find($id);

        if($data){
            $data -> delete();
        }

        return redirect()->route('categories.index');

    }

    public function Edit($id){
        $data = Categories::find($id);
        return view ('categories.edit', ['categories' => $data ]);

    }

    public function Update(Request $request){

        $data = Categories::find($request->id);

        $data->update([
            'name'=>$request->categ_name,
            'description'=>$request->categ_descreption,
             'icon' => $request->icon,
                    ]);

        return redirect()->route('categories.index');

    }
}
