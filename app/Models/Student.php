<?php

namespace App\Models;

use Carbon\Carbon;
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

    protected $casts = [
        'dob'  => 'date:Y-m-d',
    ];

    public function parents()
    {
        return $this->belongsTo(User::class, 'parent_id')->role(['Parent']);
    }


}
