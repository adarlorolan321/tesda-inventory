<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    protected $fillable = [
        'process_by',
        'user_id',
        'organisation_id',
        'refund_by',
        'status',
        'amount',
        'description',
        'date',
        'process_date',
        'refund',
        'refund_amount',
        'refund_reason',
        'credits_used',
        'transaction_id',
    ];

    protected $casts = [
        'refund' => 'boolean',
    ];

    public function processor()
    {
        return $this->belongsTo(User::class, 'process_by');
    }

    public function refunder()
    {
        return $this->belongsTo(User::class, 'refund_by');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function organisation()
    {
        return $this->belongsTo(User::class);
    }
}
