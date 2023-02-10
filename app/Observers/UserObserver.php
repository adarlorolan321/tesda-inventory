<?php

namespace App\Observers;

use App\Models\User;
use App\Notifications\UserCreated;
use App\Notifications\UserEmailUpdated;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class UserObserver
{
    /**
     * Handle the User "creating" event.
     *
     * @param  \App\Models\User  $user
     * @return void
     */
    public function creating(User $user)
    {
        $user->name = $user->first_name . ' ' . $user->last_name;
        $user->uuid = Str::uuid();


        if (Auth::user()->hasAnyRole([
            'admin',
            'orgadmin',
        ])) {
            if (!is_null(Auth::user()->organisation_id)) {
                $user->organisation_id = Auth::user()->organisation_id;
            }
        }

        if (!$user->password) {
            $password = Str::random(8);
            $user->notify(new UserCreated($password));
            $user->password = bcrypt($password);
        }
    }

    /**
     * Handle the User "created" event.
     *
     * @param  \App\Models\User  $user
     * @return void
     */
    public function created(User $user)
    {
        if (Auth::user()->hasAnyRole([
            'admin',
            'orgadmin',
        ])) {
            if (!is_null(Auth::user()->organisation_id)) {
                $user->organisation_id = Auth::user()->organisation_id;
            }
        }
    }

    /**
     * Handle the User "updated" event.
     *
     * @param  \App\Models\User  $user
     * @return void
     */
    public function updating(User $user)
    {
    }

    /**
     * Handle the User "updated" event.
     *
     * @param  \App\Models\User  $user
     * @return void
     */
    public function updated(User $user)
    {
        if ($user->wasChanged('email')) {
            $password = Str::random(8);
            $user->notify(new UserEmailUpdated($password));
            $user->password = bcrypt($password);
        }
    }

    /**
     * Handle the User "saving" event.
     *
     * @param  \App\Models\User  $user
     * @return void
     */
    public function saving(User $user)
    {
        $user->name = $user->first_name . ' ' . $user->last_name;
    }

    /**
     * Handle the User "saved" event.
     *
     * @param  \App\Models\User  $user
     * @return void
     */
    public function saved(User $user)
    {
        //
    }

    /**
     * Handle the User "deleted" event.
     *
     * @param  \App\Models\User  $user
     * @return void
     */
    public function deleted(User $user)
    {
        //
    }

    /**
     * Handle the User "restored" event.
     *
     * @param  \App\Models\User  $user
     * @return void
     */
    public function restored(User $user)
    {
        //
    }

    /**
     * Handle the User "force deleted" event.
     *
     * @param  \App\Models\User  $user
     * @return void
     */
    public function forceDeleted(User $user)
    {
        //
    }
}
