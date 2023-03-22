<?php

namespace App\Models\User;
 trait UserScope
{
     public function scopeRole($query, $role)
     {
         if (in_array($role, ['client', 'admin', 'coach', 'student'])) {
             return $query->whereHas('roles', function ($query) use ($role) {
                 $query->where('name', $role);
             });
         } else {
             return $query;
         }
     }
}
