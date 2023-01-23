<?php

use App\Http\Controllers\Api\V1\Admin as Admin;
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
});

// when adding routes with CRUD functionality, that uses both id and uuid column for fetching
// register the model in RouteServiceProvider.php, under boot() method
Route::prefix('v1')->name('api.')->middleware('auth:sanctum')->group(function () {
    Route::apiResources([
        'organisations' => Admin\OrganisationController::class,
        'services' => Admin\ServiceController::class,
        'classes' => Admin\ClassModelController::class,
        'venues' => Admin\VenueController::class,
        'sessions' => Admin\SessionController::class,
        'students' => Admin\StudentController::class,
        'enrolments' => Admin\EnrolmentController::class,
    ]);
});
