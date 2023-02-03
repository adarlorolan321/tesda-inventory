<?php

namespace App\Observers;

use App\Models\Trial;
use Illuminate\Support\Str;

class TrialObserver
{
    /**
     * Handle the Trial "creating" event.
     *
     * @param  \App\Models\Trial  $trial
     * @return void
     */
    public function creating(Trial $trial)
    {
        $trial->uuid = Str::uuid();
    }

    /**
     * Handle the Trial "created" event.
     *
     * @param  \App\Models\Trial  $trial
     * @return void
     */
    public function created(Trial $trial)
    {
        //
    }

    /**
     * Handle the Trial "updated" event.
     *
     * @param  \App\Models\Trial  $trial
     * @return void
     */
    public function updated(Trial $trial)
    {
        //
    }

    /**
     * Handle the Trial "deleted" event.
     *
     * @param  \App\Models\Trial  $trial
     * @return void
     */
    public function deleted(Trial $trial)
    {
        //
    }

    /**
     * Handle the Trial "restored" event.
     *
     * @param  \App\Models\Trial  $trial
     * @return void
     */
    public function restored(Trial $trial)
    {
        //
    }

    /**
     * Handle the Trial "force deleted" event.
     *
     * @param  \App\Models\Trial  $trial
     * @return void
     */
    public function forceDeleted(Trial $trial)
    {
        //
    }
}
