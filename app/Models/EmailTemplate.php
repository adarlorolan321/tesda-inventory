<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmailTemplate extends Model
{
    use HasFactory;

    protected $fillable = [
        'organisation_id',
        'name',
        'subject',
        'body',
        'attachments',
        'default',
        'status',
    ];

    protected $casts = [
        'default' => 'boolean',
        'attachments' => 'array',
    ];

    public function organisation()
    {
        return $this->belongsTo(Organisation::class);
    }
}
