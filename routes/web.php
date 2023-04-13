<?php

use App\Http\Controllers as PageController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\User\UserController;
use App\Http\Controllers\User\ParentController;
use App\Http\Controllers\User\CoachController;
use App\Http\Controllers\User\StudentController;
use App\Http\Controllers\Class\ClassSessionController;
use App\Http\Controllers\Class\ClassController;
use App\Http\Controllers\Class\TabController;
use App\Http\Controllers\Ppe\PpeController;
use App\Http\Controllers\Semiexpandable\SemiExpandableController;
use App\Http\Controllers\Supplier\SupplierController;
use App\Http\Controllers\Supply\SupplyController;
use App\Http\Controllers\User\ProfileController;

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
        })->name('home');
        Route::get('/dashboard', function () {
            return Inertia::render('Welcome', []);
        })->name('
        ');

        Route::name('user.')->prefix('user')->group(function () {
            Route::resource('supplies', SupplyController::class);
            Route::resource('ppes', PpeController::class);
            Route::resource('suppliers', SupplierController::class);
            Route::resource('coaches', CoachController::class);
            Route::resource('parents', ParentController::class);
            Route::resource('students', StudentController::class);
            Route::resource('semi_expandables', SemiExpandableController::class);

            

            Route::get('validate/{type}', [UserController::class, 'validateInput'])->name('validate');

            // Profile Controller

            Route::patch('profile/{id}', [UserController::class, 'update'])->name('profile.update');
            Route::get('profile', [ProfileController::class, 'index'])->name('profile.index');
            Route::get('profile/change-password', [ProfileController::class, 'changePasswordIndex'])->name('profile.change_password');
            Route::post('profile/change-password', [ProfileController::class, 'changePassword'])->name('profile.changePassword');
        });

        Route::get('classes/{id}/sessions', [TabController::class, 'sessions'])->name('classes.sessions-tab');
        Route::get('classes/{id}/update', [TabController::class, 'update'])->name('classes.update-tab');


        Route::resource('classes', ClassController::class);
        Route::resource('email_template', PageController\Email\EmailTemplateController::class);

    
        Route::resource('students', StudentController::class);

        Route::name('classes.')->prefix('classes')->group(function () {
            Route::resource('sessions', ClassSessionController::class);
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
