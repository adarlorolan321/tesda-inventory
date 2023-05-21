<?php

use App\Http\Controllers as PageController;
use App\Http\Controllers\Checkout\CheckoutController;
use App\Http\Controllers\Checkouthistory\CheckoutHistoryController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\User\UserController;
use App\Http\Controllers\User\ParentController;
use App\Http\Controllers\User\CoachController;
use App\Http\Controllers\User\StudentController;
use App\Http\Controllers\Class\ClassSessionController;
use App\Http\Controllers\Class\ClassController;
use App\Http\Controllers\Class\TabController;
use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\Department\DepartmentController;
use App\Http\Controllers\Ppe\PpeController;
use App\Http\Controllers\Semiexpandable\SemiExpandableController;
use App\Http\Controllers\Supplier\SupplierController;
use App\Http\Controllers\Supply\SupplyController;
use App\Http\Controllers\Supplyhistory\SupplyHistoryController;
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

Route::get('/dashboard', function () {
    return Inertia::render('Welcome', []);
})->name('dashboard');
Route::get('/dashboard/getLowItem',[DashboardController::class,'getLowItem'])->name('getLowItem');
Route::get('/', function () {
    return Inertia::render('Welcome', []);
})->name('home');
Route::resource('/', DashboardController::class);

Route::middleware(['auth:sanctum'])->group(function () {

    Route::middleware(['role:Admin'])->group(function () {

        Route::name('user.')->prefix('user')->group(function () {
            Route::resource('supplies', SupplyController::class);
            Route::resource('users', UserController::class);

            Route::resource('ppes', PpeController::class);
            Route::resource('suppliers', SupplierController::class);
            Route::resource('coaches', CoachController::class);
            Route::resource('parents', ParentController::class);
            Route::resource('students', StudentController::class);
            Route::resource('semi_expandables', SemiExpandableController::class);
            Route::resource('supply_histories', SupplyHistoryController::class);
            Route::resource('departments', DepartmentController::class);

            Route::resource('checkouts', CheckoutController::class);


            Route::get('validate/{type}', [UserController::class, 'validateInput'])->name('validate');

            // Profile Controller
           
            Route::patch('supplies/{id}/addStocks', [SupplyController::class, 'addStocks'])->name('supplies.addStocks');
            Route::patch('ppes/{id}/addStocks', [PpeController::class, 'addStocks'])->name('ppes.addStocks');
            Route::patch('semi_expandables/{id}/addStocks', [SemiExpandableController::class, 'addStocks'])->name('semi_expandables.addStocks');

           
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
    Route::middleware(['role:Client'])->group(function () {

        Route::resource('checkouts', CheckoutController::class);
       
    });
    Route::resource('checkout_histories', CheckoutHistoryController::class);
    Route::post('print_checkout', [CheckoutHistoryController::class, 'printCheckout'])->name('print_checkout');
    Route::post('print_supply_history', [SupplyHistoryController::class, 'printSupplyHistory'])->name('print_supply_history');
    Route::post('print_supplies', [SupplyController::class, 'print'])->name('print_supplies');
    Route::resource('user-details', ProfileController::class);
    Route::patch('profile/{id}', [UserController::class, 'update'])->name('profile.update');
    Route::get('profile', [ProfileController::class, 'index'])->name('profile.index');
    Route::get('profile/change-password', [ProfileController::class, 'changePasswordIndex'])->name('profile.change_password');
    Route::post('profile/change-password', [ProfileController::class, 'changePassword'])->name('profile.changePassword');
    

    Route::post('print_supplier', [SupplierController::class, 'print'])->name('print_supplier');
    Route::post('print_ppe', [PpeController::class, 'print'])->name('print_ppe');
    Route::post('print_semiexpendable', [SemiExpandableController::class, 'print'])->name('print_semiexpendable');
});
