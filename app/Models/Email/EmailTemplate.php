<?php

namespace App\Models\Email;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmailTemplate extends Model
{
    use HasFactory;

    protected $fillable = [
        "name", 
        "subject", 
        "body", 
        "attachments", 
        "default", 
        "status",
    ];
}
