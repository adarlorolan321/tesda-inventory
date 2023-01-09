<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Venue extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'organisation_id',
        'contact_first_name',
        'contact_last_name',
        'contact_email',
        'contact_phone',
        'status',
    ];

    public function organisation()
    {
        return $this->belongsTo(Organisation::class);
    }
}
