<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePaymentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->user()->can('update payment');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'process_by' => 'required|integer|exists:users,id',
            'user_id' => 'required|integer|exists:users,id',
            'organisation_id' => 'required|integer|exists:organisations,id',
            'refund_by' => 'required|integer|exists:users,id',
            'status' => 'required|string|in:paid,due', // clarify specific values 
            'amount' => 'required|numeric',
            'description' => 'required|string',
            'date' => 'required|date_format:Y-m-d',
            'process_date' => 'required|date_format:Y-m-d',
            'refund' => 'nullable|boolean',
            'refund_amount' => 'nullable|numeric',
            'refund_reason' => 'nullable|string',
            'credits_used' => 'nullable|numeric',
            // 'transaction_id' => , 
        ];
    }
}
