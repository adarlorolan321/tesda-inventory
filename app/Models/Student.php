<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    protected $fillable = [
        'parent_id',
        'first_name',
        'last_name',
        'dob',
        'email',
        'phone',
        'gender',
    ];

    public function parents()
    {
        return $this->belongsTo(User::class, 'parent_id')->role(['Parent']);
    }
}
