<?php

use App\Http\Controllers as PageController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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



Route::middleware(['auth:sanctum'])->group(function () {
    Route::middleware(['role:Admin'])->group(function () {
        Route::get('/', function () {
            return Inertia::render('Welcome', []);
        });

        Route::get('/account', function(){
            return Inertia::render('Admin/Organisation/Create');
        })->name('account.index');
        
        Route::get('/account/security', function(){
            return Inertia::render('Admin/Organisation/Security');
        })->name('account.security');


        Route::resources([
            'services' => PageController\Setting\ServiceController::class,
        ]);
    });
});
