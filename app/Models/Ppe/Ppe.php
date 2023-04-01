<?php

namespace App\Models\Ppe;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ppe extends Model
{
    use HasFactory;

    protected $fillable = [
        "item_code",
        "item_name",
        "description",
        "quantity",
        "unit_price",
        "total_price",
        "date_purchased",
        "stocks",
    ];
}
