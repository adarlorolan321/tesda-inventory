<?php

namespace App\Models\Checkout;

use App\Models\Supply\Supply;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Checkout extends Model
{
    use HasFactory;

    protected $fillable = [
        "user_id","supply_id","quantity",
    ];
    public function supply()
    {
        return $this->belongsTo(Supply::class);
    }
    
}
