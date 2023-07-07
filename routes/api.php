<?php

use App\Http\Controllers\Api\LanguageController;
use App\Http\Controllers\Api\RequestController;
use App\Http\Controllers\Api\TagController;
use App\Http\Controllers\Api\TranslatorController;
use App\Http\Controllers\Api\UserController;
use App\Models\User;
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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
Route::get('/user', function (Request $request) {
    $user = User::with('translator.tags')->find($request->user());
    return $user;
});

Route::get('/languages', [LanguageController::class, 'index']);

Route::get('/requests', [RequestController::class, 'index']);

Route::get('/requests/{requests_id}', [RequestController::class, 'show'])->where('requests_id', '[0-9]+');

Route::get('/requests/user/{user_id}', [RequestController::class, 'showUserRequests'])->where('user_id', '[0-9]+');

Route::post('/requests/store', [RequestController::class, 'store']);

Route::get('/tags', [TagController::class, 'index']);

Route::get('/translators', [TranslatorController::class, 'index']);

Route::get('/translators/matching/{request_id}', [TranslatorController::class, 'matching'])->where('requests_id', '[0-9]+');

Route::get('/translators/{translator_id}', [TranslatorController::class, 'show'])->where('translator_id', '[0-9]+');

Route::get('/users/{user_id}', [UserController::class, 'show'])->where('user_id', '[0-9]+');

