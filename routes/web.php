<?php

use Illuminate\Support\Facades\Route;
// Controllers
use App\Http\Controllers\OrderController;
use App\Http\Controllers\TripController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/trips', [TripController::class, 'index']);
Route::get('/orders', [OrderController::class, 'index']);
