<?php

namespace App\Observers;

use App\Models\EmailTemplate;
use Illuminate\Support\Str;

class EmailTemplateObserver
{
    /**
     * Handle the EmailTemplate "creating" event.
     *
     * @param  \App\Models\EmailTemplate  $emailTemplate
     * @return void
     */
    public function creating(EmailTemplate $emailTemplate)
    {
        $emailTemplate->uuid = Str::uuid();
    }

    /**
     * Handle the EmailTemplate "created" event.
     *
     * @param  \App\Models\EmailTemplate  $emailTemplate
     * @return void
     */
    public function created(EmailTemplate $emailTemplate)
    {
        //
    }

    /**
     * Handle the EmailTemplate "updated" event.
     *
     * @param  \App\Models\EmailTemplate  $emailTemplate
     * @return void
     */
    public function updated(EmailTemplate $emailTemplate)
    {
        //
    }

    /**
     * Handle the EmailTemplate "deleted" event.
     *
     * @param  \App\Models\EmailTemplate  $emailTemplate
     * @return void
     */
    public function deleted(EmailTemplate $emailTemplate)
    {
        //
    }

    /**
     * Handle the EmailTemplate "restored" event.
     *
     * @param  \App\Models\EmailTemplate  $emailTemplate
     * @return void
     */
    public function restored(EmailTemplate $emailTemplate)
    {
        //
    }

    /**
     * Handle the EmailTemplate "force deleted" event.
     *
     * @param  \App\Models\EmailTemplate  $emailTemplate
     * @return void
     */
    public function forceDeleted(EmailTemplate $emailTemplate)
    {
        //
    }
}
