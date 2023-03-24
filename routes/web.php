<?php

use App\Http\Controllers as PageController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
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






Route::middleware(['auth:sanctum'])->group(function () {
    Route::middleware(['role:Admin'])->group(function () {

        Route::get('/', function () {
            return Inertia::render('Welcome', []);
        });

        Route::name('user.')->prefix('user')->group(function () {
            Route::resource('coaches', CoachController::class);
            Route::resource('parents', ParentController::class);
            Route::resource('students', StudentController::class);

            Route::get('profile', [UserController::class, 'profile'])->name('profile.index');
            Route::get('profile/change-password', [UserController::class, 'changePassword'])->name('profile.change_password');

            Route::get('validate/{type}', [UserController::class, 'validateInput'])->name('validate');
        });

        Route::name('settings.')->prefix('settings')->group(function () {
            Route::resources([
                'services' => PageController\Setting\ServiceController::class,
                'venues' => PageController\Setting\VenueController::class,
            ]);
        });

        Route::get('/players', [CoachController::class, 'index'])->name('players.index');
        Route::get('/enrolments', [CoachController::class, 'index'])->name('enrolments.index');
        Route::get('/payments', [CoachController::class, 'index'])->name('payments.index');
        Route::get('/waitlists', [CoachController::class, 'index'])->name('waitlists.index');
        Route::get('/trials', [CoachController::class, 'index'])->name('trials.index');
        Route::get('/orders', [CoachController::class, 'index'])->name('orders.index');
        Route::get('/messages', [CoachController::class, 'index'])->name('messages.index');
        Route::get('/merchandises', [CoachController::class, 'index'])->name('merchandises.index');

        Route::get('/account', function () {
            return Inertia::render('Admin/Organisation/Create');
        })->name('account.index');

        Route::get('/account/security', function () {
            return Inertia::render('Admin/Organisation/Security');
        })->name('account.security.index');

        Route::get('/account-settings', function () {
            return Inertia::render('Admin/account-settings/Account');
        })->name('account-settings.index');

        Route::get('/account-settings/security', function () {
            return Inertia::render('Admin/account-settings/Security');
        })->name('account-settings.security.index');
    });

    Route::get('test-mail', function () {
        $user = [
            'first_name' => 'Jayvee',
            'last_name' => 'Osapdin',
            'email' => 'jayvee.osapdin@gmail.com',
            'password' => '6sHsbhY8',
        ];

        return new \App\Mail\Notification\WelcomeUserNotification($user);
    });
});
