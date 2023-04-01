<?php

namespace App\Models\Supplier;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Supplier extends Model
{
    use HasFactory;

    protected $fillable = [
        "full_name",
        "supplier_id_number",
        "email",
        "barangay",
        "city",
        "district",
    ];
}
