<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Dashboard extends Controller
{
    public function Index()
    {
        return view('dashboard.index');
    }
}
