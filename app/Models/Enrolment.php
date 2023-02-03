<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Enrolment extends Model
{
    use HasFactory;

    protected $fillable = [
        'created_by',
        'class_id',
        'user_id',
        'student_id',
        'organisation_id',
        'payment_status',
        'status',
        'lessons',
        'cancel_date',
        'cancel_on',
        'cancel_reason',
        'cancel_by',
        'discount_type',
        'discount',
    ];

    protected $casts = [];

    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function canceler()
    {
        return $this->belongsTo(User::class, 'cancel_by');
    }

    public function class()
    {
        return $this->belongsTo(ClassModel::class);
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
