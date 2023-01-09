<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Session extends Model
{
    use HasFactory;

    protected $table = 'session_model';

    protected $fillable = [
        'class_id',
        'date',
        'type',
        'start_time',
        'end_time',
        'coach_id',
        'additional_coaches',
        'status',
    ];

    public function coach()
    {
        return $this->belongsTo(User::class)->role('coach');
    }

    public function class()
    {
        return $this->belongsTo(ClassModel::class);
    }
}
