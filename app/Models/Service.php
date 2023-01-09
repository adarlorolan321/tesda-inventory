<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'organisation_id',
        'name',
        'code',
    ];

    public function organisation()
    {
        return $this->belongsTo(Organisation::class);
    }
}
