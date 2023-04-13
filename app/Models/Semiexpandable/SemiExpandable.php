<?php

namespace App\Models\Semiexpandable;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SemiExpandable extends Model
{
    use HasFactory;

    protected $fillable = [
        "item_code","item_name","quantity","unit_price","total_price","description","stock","date_purchased",
    ];
}
