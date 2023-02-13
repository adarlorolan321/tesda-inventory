<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClassModel extends Model
{
    use HasFactory;

    protected $table = 'classes';

    protected $fillable = [
        'name',
        'service_id',
        'organisation_id',
        'start_date',
        'end_date',
        'start_time',
        'end_time',
        'days',
        'repeat',
        'capacity',
        'price_type',
        'price',
        'venue_id',
        'status',
        'coach_id',
        'additional_coach',
        'default_email',
        'custom_email_text',
        'custom_email_subject',
        'enrolments',
        'tags',
    ];

    protected $casts = [
        'days' => 'array',
        'repeat' => 'boolean',
        'additional_coach' => 'array',
        'default_email' => 'boolean',
        'tags' => 'array',
    ];

    public function organisation()
    {
        return $this->belongsTo(Organisation::class);
    }

    public function service()
    {
        return $this->belongsTo(Service::class);
    }

    public function venue()
    {
        return $this->belongsTo(Venue::class);
    }

    public function coach()
    {
        return $this->belongsTo(User::class)->role(['coach', 'Coach']);
    }

    public function sessions()
    {
        return $this->hasMany(Session::class, 'class_id');
    }
}
