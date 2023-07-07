<?php

use App\Http\Controllers\Homepage;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [Homepage::class, 'index']);

// User Dashboard

Route::view('/dashboard/{path?}', 'user-dashboard.dashboard')->where('path', '.*');

Route::get('/register', function () {
    return view('user-dashboard.dashboard');
});

Route::get('/login', function () {
    return view('user-dashboard.dashboard');
});
