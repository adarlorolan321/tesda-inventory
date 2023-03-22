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

        Route::get('/auth/forgotpassword', function(){
            return Inertia::render('Auth/Profile/Show');
        })->name('auth.forgotpassword');

        Route::get('/user/profile', function(){
            return Inertia::render('Admin/Profile/Show');
        })->name('user.index');

        Route::get('/user/teams', function(){
            return Inertia::render('Admin/Profile/Teams');
        })->name('user.teams');

        Route::get('/user/projects', function(){
            return Inertia::render('Admin/Profile/Projects');
        })->name('user.projects');

        Route::get('/user/conns', function(){
            return Inertia::render('Admin/Profile/Connections');
        })->name('user.conns');

        Route::resources([
            'services' => PageController\Setting\ServiceController::class,
        ]);
    });
});
