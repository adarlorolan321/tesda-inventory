<?php

namespace App\Observers;

use App\Models\Enrolment;
use Illuminate\Support\Str;

class EnrolmentObserver
{
    /**
     * Handle the Enrolment "created" event.
     *
     * @param  \App\Models\Enrolment  $enrolment
     * @return void
     */
    public function creating(Enrolment $class)
    {
        $class->uuid = Str::uuid();
    }

    /**
     * Handle the Enrolment "created" event.
     *
     * @param  \App\Models\Enrolment  $enrolment
     * @return void
     */
    public function created(Enrolment $enrolment)
    {
        //
    }

    /**
     * Handle the Enrolment "updated" event.
     *
     * @param  \App\Models\Enrolment  $enrolment
     * @return void
     */
    public function updated(Enrolment $enrolment)
    {
        //
    }

    /**
     * Handle the Enrolment "deleted" event.
     *
     * @param  \App\Models\Enrolment  $enrolment
     * @return void
     */
    public function deleted(Enrolment $enrolment)
    {
        //
    }

    /**
     * Handle the Enrolment "restored" event.
     *
     * @param  \App\Models\Enrolment  $enrolment
     * @return void
     */
    public function restored(Enrolment $enrolment)
    {
        //
    }

    /**
     * Handle the Enrolment "force deleted" event.
     *
     * @param  \App\Models\Enrolment  $enrolment
     * @return void
     */
    public function forceDeleted(Enrolment $enrolment)
    {
        //
    }
}
