<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Products;
use App\Http\Controllers\Dashboard;
use App\Http\Controllers\CategoriesController;
Route::get('/', function () {
    return view('welcome');
})->name('index');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/products',[Products::class,'GetProducts']);

Route::get('/aboutus',[Products::class,'AboutUs'])->name('AboutUs');

Route::get('/callus',[Products::class,'CallUs'])->name('callus');

Route::get('/myprod',[Products::class,'MyProducts'])->name('myprod');


Route::get('/dashboard',[Dashboard::class,'Index'])->name('dashboard');

Route::get('/categories',[CategoriesController::class,'Index'])->name('categories.index');

Route::post('/addcategories',[CategoriesController::class,'Create'])->name('categories.create');


