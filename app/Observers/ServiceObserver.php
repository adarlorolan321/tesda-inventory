<?php

namespace App\Observers;

use App\Models\Service;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class ServiceObserver
{
    /**
     * Handle the Service "creating" event.
     *
     * @param  \App\Models\Service  $service
     * @return void
     */
    public function creating(Service $service)
    {
        $service->uuid = Str::uuid();

        if (Auth::user()->hasRole('orgadmin')) {
            if (!is_null(Auth::user()->organisation_id)) {
                $service->organisation_id = Auth::user()->organisation_id;
            }
        }
    }

    /**
     * Handle the Service "created" event.
     *
     * @param  \App\Models\Service  $service
     * @return void
     */
    public function created(Service $service)
    {
    }

    /**
     * Handle the Service "updating" event.
     *
     * @param  \App\Models\Service  $service
     * @return void
     */
    public function updating(Service $service)
    {
        if (Auth::user()->hasRole('orgadmin')) {
            if (!is_null(Auth::user()->organisation_id)) {
                $service->organisation_id = Auth::user()->organisation_id;
            }
        }
    }

    /**
     * Handle the Service "updated" event.
     *
     * @param  \App\Models\Service  $service
     * @return void
     */
    public function updated(Service $service)
    {
        //
    }

    /**
     * Handle the Service "deleted" event.
     *
     * @param  \App\Models\Service  $service
     * @return void
     */
    public function deleted(Service $service)
    {
        //
    }

    /**
     * Handle the Service "restored" event.
     *
     * @param  \App\Models\Service  $service
     * @return void
     */
    public function restored(Service $service)
    {
        //
    }

    /**
     * Handle the Service "force deleted" event.
     *
     * @param  \App\Models\Service  $service
     * @return void
     */
    public function forceDeleted(Service $service)
    {
        //
    }
}
