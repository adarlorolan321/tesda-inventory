<?php

namespace App\Models\Setting;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        "name", 
        "code", 
        "uuid",
    ];
    protected static function  booted()
    {
        static::creating(function ($service) {
            $service->uuid = Str::uuid();
        });
    }
}
