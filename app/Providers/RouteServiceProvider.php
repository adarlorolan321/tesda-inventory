<?php

namespace App\Providers;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * The path to the "home" route for your application.
     *
     * Typically, users are redirected here after authentication.
     *
     * @var string
     */
    public const HOME = '/home';

    /**
     * Define your route model bindings, pattern filters, and other route configuration.
     *
     * @return void
     */
    public function boot()
    {
        $this->configureRateLimiting();

        $this->routes(function () {
            Route::middleware('api')
                ->prefix('api')
                ->group(base_path('routes/api.php'));

            Route::middleware('web')
                ->group(base_path('routes/web.php'));
        });

        // bind both id and slug into urls
        $models = [
            'Organisation' => 'organisation',
            'Service' => 'service',
            'ClassModel' => 'class',
            'Venue' => 'venue',
            'Session' => 'session',
            'Student' => 'student',
            'Enrolment' => 'enrolment',
            'User' => 'user',
            'Payment' => 'payment',
            'FailedPayment' => 'failed_payment',
            'EmailTemplate' => 'email_template',
        ];

        foreach ($models as $modelName => $routeBindName) {
            Route::bind($routeBindName, function ($value) use ($modelName) {
                $modelName =  'App\Models\\' . $modelName;
                return $modelName::where('id', $value)->orWhere('uuid', $value)->firstOrFail();
            });
        }
    }

    /**
     * Configure the rate limiters for the application.
     *
     * @return void
     */
    protected function configureRateLimiting()
    {
        RateLimiter::for('api', function (Request $request) {
            return Limit::perMinute(60)->by($request->user()?->id ?: $request->ip());
        });
    }
}
