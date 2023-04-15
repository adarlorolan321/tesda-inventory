<?php

namespace App\Models\Supply;

use App\Models\Supplier\Supplier;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Supply extends Model
{
    use HasFactory;

    protected $fillable = [
        "label",
        "type",
        "description",
        "item_code",
        "stocks",
        "quantity",
        "unit_price",
        "total_price",
        "date_purchased",
        "supplier_id"
    ];

    public function supplier()
    {
        return $this->belongsTo(Supplier::class);
    }
}
