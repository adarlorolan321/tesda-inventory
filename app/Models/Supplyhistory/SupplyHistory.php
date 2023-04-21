<?php

namespace App\Models\Supplyhistory;

use App\Models\Supply\Supply;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SupplyHistory extends Model
{
    use HasFactory;

    protected $fillable = [
        "user_id","supply_id","quantity","unit_price"
    ];

    public function supply()
    {
        return $this->belongsTo(Supply::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
