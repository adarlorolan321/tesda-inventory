<?php

namespace App\Observers;

use App\Models\FailedPayment;
use Illuminate\Support\Str;

class FailedPaymentObserver
{
    /**
     * Handle the FailedPayment "creating" event.
     *
     * @param  \App\Models\FailedPayment  $failedPayment
     * @return void
     */
    public function creating(FailedPayment $failedPayment)
    {
        $failedPayment->uuid = Str::uuid();
    }

    /**
     * Handle the FailedPayment "created" event.
     *
     * @param  \App\Models\FailedPayment  $failedPayment
     * @return void
     */
    public function created(FailedPayment $failedPayment)
    {
        //
    }

    /**
     * Handle the FailedPayment "updated" event.
     *
     * @param  \App\Models\FailedPayment  $failedPayment
     * @return void
     */
    public function updated(FailedPayment $failedPayment)
    {
        //
    }

    /**
     * Handle the FailedPayment "deleted" event.
     *
     * @param  \App\Models\FailedPayment  $failedPayment
     * @return void
     */
    public function deleted(FailedPayment $failedPayment)
    {
        //
    }

    /**
     * Handle the FailedPayment "restored" event.
     *
     * @param  \App\Models\FailedPayment  $failedPayment
     * @return void
     */
    public function restored(FailedPayment $failedPayment)
    {
        //
    }

    /**
     * Handle the FailedPayment "force deleted" event.
     *
     * @param  \App\Models\FailedPayment  $failedPayment
     * @return void
     */
    public function forceDeleted(FailedPayment $failedPayment)
    {
        //
    }
}
