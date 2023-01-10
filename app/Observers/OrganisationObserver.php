<?php

namespace App\Observers;

use App\Models\Organisation;
use Illuminate\Support\Str;

class OrganisationObserver
{
    /**
     * Handle the Organisation "creating" event.
     *
     * @param  \App\Models\Organisation  $organisation
     * @return void
     */
    public function creating(Organisation $organisation)
    {
        $organisation->uuid = Str::uuid();
    }

    /**
     * Handle the Organisation "created" event.
     *
     * @param  \App\Models\Organisation  $organisation
     * @return void
     */
    public function created(Organisation $organisation)
    {
    }

    /**
     * Handle the Organisation "updated" event.
     *
     * @param  \App\Models\Organisation  $organisation
     * @return void
     */
    public function updated(Organisation $organisation)
    {
        //
    }

    /**
     * Handle the Organisation "deleted" event.
     *
     * @param  \App\Models\Organisation  $organisation
     * @return void
     */
    public function deleted(Organisation $organisation)
    {
        //
    }

    /**
     * Handle the Organisation "restored" event.
     *
     * @param  \App\Models\Organisation  $organisation
     * @return void
     */
    public function restored(Organisation $organisation)
    {
        //
    }

    /**
     * Handle the Organisation "force deleted" event.
     *
     * @param  \App\Models\Organisation  $organisation
     * @return void
     */
    public function forceDeleted(Organisation $organisation)
    {
        //
    }
}
