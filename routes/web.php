<?php

use App\Http\Controllers as PageController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\User\UserController;

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

        Route::name('user.')->prefix('user')->group(function (){
            Route::get('coach',[UserController::class,'index'])->name('coach');
            Route::get('staff',[UserController::class,'index'])->name('staff');
            Route::get('parent',[UserController::class,'index'])->name('parent');
            Route::get('student',[UserController::class,'index'])->name('student');
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
