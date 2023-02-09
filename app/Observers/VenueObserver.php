<?php

namespace App\Observers;

use App\Models\Venue;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class VenueObserver
{
    /**
     * Handle the Venue "creating" event.
     *
     * @param  \App\Models\Venue  $venue
     * @return void
     */
    public function creating(Venue $venue)
    {
        $venue->uuid = Str::uuid();

        if (Auth::user()->hasAnyRole([
            'admin',
            'orgadmin',
        ])) {
            if (!is_null(Auth::user()->organisation_id)) {
                $venue->organisation_id = Auth::user()->organisation_id;
            }
        }
    }

    /**
     * Handle the Venue "created" event.
     *
     * @param  \App\Models\Venue  $venue
     * @return void
     */
    public function created(Venue $venue)
    {
    }

    /**
     * Handle the Venue "updating" event.
     *
     * @param  \App\Models\Venue  $venue
     * @return void
     */
    public function updating(Venue $venue)
    {
        if (Auth::user()->hasAnyRole([
            'admin',
            'orgadmin',
        ])) {
            if (!is_null(Auth::user()->organisation_id)) {
                $venue->organisation_id = Auth::user()->organisation_id;
            }
        }
    }

    /**
     * Handle the Venue "updated" event.
     *
     * @param  \App\Models\Venue  $venue
     * @return void
     */
    public function updated(Venue $venue)
    {
        //
    }

    /**
     * Handle the Venue "deleted" event.
     *
     * @param  \App\Models\Venue  $venue
     * @return void
     */
    public function deleted(Venue $venue)
    {
        //
    }


    /**
     * Handle the Venue "restored" event.
     *
     * @param  \App\Models\Venue  $venue
     * @return void
     */
    public function restored(Venue $venue)
    {
        //
    }

    /**
     * Handle the Venue "force deleted" event.
     *
     * @param  \App\Models\Venue  $venue
     * @return void
     */
    public function forceDeleted(Venue $venue)
    {
        //
    }
}
