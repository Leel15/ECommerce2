<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categories;
use App\Models\products;


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

      $categories = Categories::All();
      $products = products::All();
      return view('products.index' ,['categoreis' => $categories , 'products' => $products ]);

   }

   public function Create(Request $request){

      $validate=$request->validate([
         'name'=>'required|string|max:255',
         'descreption'=>'nullable|string|max:255',
         'price'=>'required',
         'stocke'=>'required',
         'categories_id'=>'required',
         'image'=>'nullable',
        ]);

      $arr=[
         'name'=>$request->name,
         'descreption'=>$request->descreption,
         'price' =>$request->price,
         'stocke' =>$request->stocke,
         'categories_id' =>$request->categories_id,
         'image' =>$request->image,
        ];

        
       $items=products::Create($arr);
       $items->save();
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
   return view ('products.Edit', ['products' => $item ]);

}
}
