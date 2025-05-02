<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categories;
use App\Models\products;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;


class ProductsController extends Controller
{
   public function GetProducts()
   {
      return view('products');
   }

   public function AboutUs()
   {

    return view('abouts');

   }

   public function CallUs()
   {
      return view('callus');
   }


   public function MyProducts()
   {
      return view('myproducts');
   }

   public function Index(){

      $categories =DB::table('categories')->get();
      $products = products::with('categoy')->get();
      return view('products.index' ,['categoreis' => $categories , 'products' => $products ]);

   }

   public function Create(Request $request){
      $validate = $request->validate([
          'name' => 'required|string|max:255',
          'descreption' => 'nullable|string|max:255',
          'price' => 'required',
          'stocke' => 'required',
          'categories_id' => 'required',
          'image' => 'required|image|mimes:jpeg,png,jpg,pdf,gif',
      ]);
  
      $image=$request->file('image');

      $path =$image->store('images' , 'public');

  
      $arr = [
          'name' => $request->name,
          'descreption' => $request->descreption,
          'price' => $request->price,
          'stocke' => $request->stocke,
          'categories_id' => $request->categories_id,
          'image' =>Storage::url($path),
      ];
  
      $item = products::create($arr);
  
      return redirect()->route('products.index');
  }

   public function Delete($id){
      $item = products::find($id);

      if($item){
          $item -> delete();
      }

      return redirect()->route('products.index');

  }

  public function Edit($id){
   $item = products::find($id);
   $categories = Categories::All();

   return view ('products.Edit', ['products' => $item , 'categoreis' => $categories]);

}

public function Update(Request $request){

   $validate = $request->validate([
      'image' => 'nullable|image|mimes:jpeg,png,jpg,pdf,gif',
  ]);

   $data = products::find($request->id);

   $image=$request->file('image');

   $path =$image->store('images' , 'public');

   $data->update([

         'name'=>$request->name,
         'descreption'=>$request->descreption,
         'price' =>$request->price,
         'stocke' =>$request->stocke,
         'categories_id' =>$request->categories_id,
          'image' =>Storage::url($path),
  ]);
  return redirect()->route('products.index')->with('success', 'تم تحديث المنتج بنجاح!');

}
}
