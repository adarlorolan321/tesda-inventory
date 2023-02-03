<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Waitlist extends Model
{
    use HasFactory;

    protected $fillable = [
        'class_id',
        'user_id',
        'student_id',
        'organisation_id',
        'status',
    ];

    public function class()
    {
        return $this->belongsTo(ClassModel::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function student()
    {
        return $this->belongsTo(Student::class);
    }

    public function organisation()
    {
        return $this->belongsTo(Organisation::class);
    }
}
