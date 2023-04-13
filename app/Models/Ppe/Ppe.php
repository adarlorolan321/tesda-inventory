<?php

namespace App\Models\Ppe;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ppe extends Model
{
    use HasFactory;

    protected $fillable = [
        "item_code", "quantity", "item_name", "unit_price", "total_price", "stock", "date_purchased", "description",
    ];
}
