<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ProductsController;
use App\Http\Controllers\Dashboard;
use App\Http\Controllers\CategoriesController;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

Route::post('/logout', function (Request $request) {
    Auth::logout();
    $request->session()->invalidate();
    $request->session()->regenerateToken();
    return redirect('/'); 
})->name('logout');

Route::get('/', function () {
    return view('welcome');
})->name('index');

Auth::routes();

Route::prefix('dashboard')->middleware('auth')->group(function(){

    Route::get('/dashboard',[Dashboard::class,'Index'])->name('dashboard');

    Route::prefix('categories')->group(function(){
        Route::get('/categories',[CategoriesController::class,'Index'])->name('categories.index');
        Route::post('/addcategories',[CategoriesController::class,'Create'])->name('categories.create');
        Route::get('/deleteitemcategories/{id}',[CategoriesController::class,'Delete'])->name('categories.Delete');
        Route::get('/edititemcategories/{id}',[CategoriesController::class,'Edit'])->name('categories.edit');
        Route::post('/updateitemcategories',[CategoriesController::class,'Update'])->name('categories.Update');
    });

    Route::prefix('products')->group(function(){

        Route::get('/products',[ProductsController::class,'Index'])->name('products.index');
        Route::post('/createproducts',[ProductsController::class,'Create'])->name('products.create');
        Route::get('/deleteitemproduct/{id}',[ProductsController::class,'Delete'])->name('products.Delete');
        Route::get('/edititemproduct/{id}',[ProductsController::class,'Edit'])->name('products.Edit');
        Route::post('/updateproduct',[ProductsController::class,'Update'])->name('products.Update');
    });
});
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/products',[Products::class,'GetProducts']);

Route::get('/aboutus',[Products::class,'AboutUs'])->name('AboutUs');

Route::get('/callus',[Products::class,'CallUs'])->name('callus');

Route::get('/myprod',[Products::class,'MyProducts'])->name('myprod');




