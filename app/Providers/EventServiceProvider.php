<?php

namespace App\Providers;

use App\Models\ClassModel;
use App\Models\Enrolment;
use App\Models\Organisation;
use App\Models\Service;
use App\Models\Session;
use App\Models\Student;
use App\Models\User;
use App\Models\Venue;
use App\Observers\ClassModelObserver;
use App\Observers\EnrolmentObserver;
use App\Observers\OrganisationObserver;
use App\Observers\ServiceObserver;
use App\Observers\SessionObserver;
use App\Observers\StudentObserver;
use App\Observers\UserObserver;
use App\Observers\VenueObserver;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event to listener mappings for the application.
     *
     * @var array<class-string, array<int, class-string>>
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        Organisation::observe(OrganisationObserver::class);
        Service::observe(ServiceObserver::class);
        Venue::observe(VenueObserver::class);
        ClassModel::observe(ClassModelObserver::class);
        Session::observe(SessionObserver::class);
        Student::observe(StudentObserver::class);
        Enrolment::observe(EnrolmentObserver::class);
        User::observe(UserObserver::class);
    }

    /**
     * Determine if events and listeners should be automatically discovered.
     *
     * @return bool
     */
    public function shouldDiscoverEvents()
    {
        return false;
    }
}
