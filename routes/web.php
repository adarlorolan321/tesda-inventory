<?php

use App\Http\Controllers as PageController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\User\UserController;
use App\Http\Controllers\User\ParentController;
use App\Http\Controllers\User\CoachController;
use App\Http\Controllers\User\StudentController;

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

Route::prefix('auth')->group(function () {
    Route::get('/forgot-password', function(){
        return Inertia::render('Auth/ForgotPassword');
    })->name('auth.forgotpassword');
  
});



Route::middleware(['auth:sanctum'])->group(function () {
    Route::middleware(['role:Admin'])->group(function () {
        
        Route::get('/', function () {
            return Inertia::render('Welcome', []);
        });

        Route::get('/user/profile', function(){
            return Inertia::render('Admin/Profile/Show');
        })->name('user.index');
        
        Route::name('user.')->prefix('user')->group(function (){
            Route::get('coach',[CoachController::class,'index'])->name('coach');
            Route::get('parent',[ParentController::class,'index'])->name('parent');
            Route::get('student',[StudentController::class,'index'])->name('student');
        });

        Route::get('/account', function(){
            return Inertia::render('Admin/Organisation/Create');
        })->name('account.index');

        Route::get('/account/security', function(){
            return Inertia::render('Admin/Organisation/Security');
        })->name('account.index');

        Route::get('/account-settings', function(){
            return Inertia::render('Admin/account-settings/Account');
        })->name('account.index');
        
        Route::get('/account-settings/security', function(){
            return Inertia::render('Admin/account-settings/Security');
        })->name('account.security');

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
            'venues' => PageController\Setting\VenueController::class,
        ]);
    });
});
