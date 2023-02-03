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
        $default_templates = [
            [
                'name' => 'Customer Account Created',
                'subject' => 'Welcome to ' . $organisation->name,
                'body' => 'text to go here...',
            ],
            [
                'name' => 'Enrolment Confirmation',
                'subject' => 'Enrolment confirmed',
                'body' => 'text to go here...',
            ],
            [
                'name' => 'Payment Receipt',
                'subject' => 'Payment Receipt',
                'body' => 'text to go here...',
            ],
            [
                'name' => 'Waitlist Confirmation',
                'subject' => 'Waitlist Confirmation',
                'body' => 'text to go here...',
            ],
            [
                'name' => 'Trial Confirmation',
                'subject' => 'Trial Confirmation',
                'body' => 'text to go here...',
            ],
            [
                'name' => 'Payment Reminder',
                'subject' => 'Payment Reminder',
                'body' => 'text to go here...',
            ],
            [
                'name' => 'Failed Payment',
                'subject' => 'Failed Payment',
                'body' => 'text to go here...',
            ],
            [
                'name' => 'Enrolment Cancelled',
                'subject' => 'Enrolment Cancelled',
                'body' => 'text to go here...',
            ],
        ];

        $organisation->email_templates()->createMany($default_templates);
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
