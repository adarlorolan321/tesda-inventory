<?php

namespace App\Observers;

use App\Models\Merchandise;
use Illuminate\Support\Str;

class MerchandiseObserver
{
    /**
     * Handle the Merchandise "creating" event.
     *
     * @param  \App\Models\Merchandise  $merchandise
     * @return void
     */
    public function creating(Merchandise $merchandise)
    {
        $merchandise->uuid = Str::uuid();
    }

    /**
     * Handle the Merchandise "created" event.
     *
     * @param  \App\Models\Merchandise  $merchandise
     * @return void
     */
    public function created(Merchandise $merchandise)
    {
        //
    }

    /**
     * Handle the Merchandise "updated" event.
     *
     * @param  \App\Models\Merchandise  $merchandise
     * @return void
     */
    public function updated(Merchandise $merchandise)
    {
        //
    }

    /**
     * Handle the Merchandise "deleted" event.
     *
     * @param  \App\Models\Merchandise  $merchandise
     * @return void
     */
    public function deleted(Merchandise $merchandise)
    {
        //
    }

    /**
     * Handle the Merchandise "restored" event.
     *
     * @param  \App\Models\Merchandise  $merchandise
     * @return void
     */
    public function restored(Merchandise $merchandise)
    {
        //
    }

    /**
     * Handle the Merchandise "force deleted" event.
     *
     * @param  \App\Models\Merchandise  $merchandise
     * @return void
     */
    public function forceDeleted(Merchandise $merchandise)
    {
        //
    }
}
