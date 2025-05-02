<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\products;
use Illuminate\Support\Facades\DB;


class Shooping extends Controller
{
    public function List($categories_id){

        $data = DB::table('products')
        ->where('categories_id','=',$categories_id)
        ->get();

        return view('shooping.list',['products'=>$data]);
    }

    public function Details($id)
    {
        $data=DB::table('products')
        ->where('id','=',$id)
        ->first();

      
        return view('shooping.details',['product'=>$data]);
    }

    public function GetCategories(){
        $data = DB::table('categories')
        -> get();

        return view('shooping.welcome' , ['categories' =>$data ]);
    }

    public function Add_to_cart(){
        $count = session()->get('count' , 0);
        $count++;
        session()->put('count' , $count);
        session()->put('id_product' , 5);
return redirect()->back();
    }

    public function Checkout()
{
    return view('shooping.checkout');
     
}

public function pay(Request $request)
{
    $customer = [
        'name' => $request->name,
        'phone' => $request->phone,
    ];

    session()->put('customer_name', $request->name);

    DB::table('customers')->insert($customer);

    $cart = [
        'id_product' => session()->get('id_product'),
        'id_customer' => $request->phone,
    ];

    DB::table('Cart')->insert($cart);

    return view('shooping.invoice');
}

}
