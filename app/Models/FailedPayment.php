<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FailedPayment extends Model
{
    use HasFactory;

    protected $fillable = [
        'payment_id',
        'user_id',
        'organisation_id',
        'status',
        'amount',
        'attempt_date',
    ];

    public function payment()
    {
        return $this->belongsTo(Payment::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function organisation()
    {
        return $this->belongsTo(Organisation::class);
    }
}
