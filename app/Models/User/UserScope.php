<?php

namespace App\Models\User;
use App\Mail\Notification\UpdateEmailNotification;
use App\Mail\Notification\WelcomeUserNotification;
use Illuminate\Support\Facades\Mail;

trait UserScope
{
//     public function scopeRole($query, $role)
//     {
//         if (in_array($role, ['client', 'admin', 'coach', 'student'])) {
//             return $query->whereHas('roles', function ($query) use ($role) {
//                 $query->where('name', $role);
//             });
//         } else {
//             return $query;
//         }
//     }

    public function scopeSendWelcomeMail($query,$data)
    {
        Mail::to($this->attributes['email'])->queue(new WelcomeUserNotification($data));
    }
    public function scopeSendUpdateEmailNotication($query,$data)
    {
        Mail::to($this->attributes['email'])->queue(new UpdateEmailNotification($data));
    }
}
