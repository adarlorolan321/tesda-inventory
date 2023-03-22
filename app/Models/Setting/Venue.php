<?php

namespace App\Models\Setting;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Venue extends Model
{
    use HasFactory;

    protected $fillable = [
        "name", "contact_first_name", "contact_last_name", "contact_email", "contact_phone", "status",
    ];
    protected static function  booted()
    {
        static::creating(function ($service) {
            $service->uuid = Str::uuid();
        });
    }
}
