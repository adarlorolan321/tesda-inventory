<?php

namespace App\Models\User;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    protected $fillable = [
        "parent_id",
        "first_name",
        "last_name",
        "dob",
        "email",
        "phone",
        "gender",
    ];
}
