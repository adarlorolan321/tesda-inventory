<?php

namespace App\Models\Class;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClassSession extends Model
{
    use HasFactory;

    protected $fillable = [
        "class_id","date","type","start_time","end_time","coach_id","additional_coaches", "status"
    ];
}
