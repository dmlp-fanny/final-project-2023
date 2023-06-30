<?php

use App\Http\Controllers\Api\LanguageController;
use App\Http\Controllers\Api\RequestController;
use App\Http\Controllers\Api\TagController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/languages', [LanguageController::class, 'index']);

Route::get('/tags', [TagController::class, 'index']);

Route::get('/requests', [RequestController::class, 'index']);

Route::get('/requests/{user_id}', [RequestController::class, 'show'])->where('user_id','[0-9]+');