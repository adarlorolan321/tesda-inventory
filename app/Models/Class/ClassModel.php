<?php

namespace App\Models\Class;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClassModel extends Model
{
    use HasFactory;

    protected $table = 'classes';
    protected $fillable = [
        "name", "service_id", "start_date", "end_date", "start_time", "end_time", "days", "repeat", "capacity", "price_type", "price", "venue_id", "status", "coach_id", "additional_coach", "default_email", "custom_email_text", "custom_email_subject", "enrolments", "tags",
    ];
}
