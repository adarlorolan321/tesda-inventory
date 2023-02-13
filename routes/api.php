<?php

use App\Http\Controllers\Api\V1\Admin as Admin;
use App\Http\Controllers\Api\V1\Admin\AuthController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::prefix('v1')->name('api.')->group(function () {
    Route::post('/login', [Admin\AuthController::class, 'login'])->name('login');
    Route::post('/register', [Admin\AuthController::class, 'register'])->name('customer.register');
    Route::apiResources([]);

    // Route::post('forgot-password', [Admin\AuthController::class, 'sendResetLink'])->middleware('guest')->name('password.email');
    Route::post('change-password', [Admin\AuthController::class, 'changePassword'])->middleware('guest')->name('change.password');
});


Route::prefix('v1')->name('api.')->middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [Admin\AuthController::class, 'logout'])->name('logout');

    /**
     * for fetching
     * */
    Route::get('user-list', [Admin\UserController::class, 'getUserList'])->name('.user-list');
    Route::get('services-list', [Admin\ServiceController::class, 'getList'])->name('.services-list');
    Route::get('venues-list', [Admin\VenueController::class, 'getList'])->name('.venues-list');

    Route::apiResources([
        /**
         * when adding routes with CRUD functionality, that uses both id and uuid column for fetching
         * register the model in RouteServiceProvider.php, under boot() method
         */

        /** registered in RouteServiceProvider */
        'users' => Admin\UserController::class,
        'organisations' => Admin\OrganisationController::class,
        'services' => Admin\ServiceController::class,
        'classes' => Admin\ClassModelController::class,
        'venues' => Admin\VenueController::class,
        'sessions' => Admin\SessionController::class,
        'students' => Admin\StudentController::class,
        'enrolments' => Admin\EnrolmentController::class,
        'payments' => Admin\PaymentController::class,
        'failed-payments' => Admin\FailedPaymentController::class,
        'email-templates' => Admin\EmailTemplateController::class,
        'merchandises' => Admin\MerchandiseController::class,
        'trials' => Admin\TrialController::class,

        /** not registered in RouteServiceProvider */
        'waitlists' => Admin\WaitlistController::class,
    ]);
});
