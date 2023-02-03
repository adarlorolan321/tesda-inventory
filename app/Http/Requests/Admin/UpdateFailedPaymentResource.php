<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class UpdateFailedPaymentResource extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->user()->can('update failed_payment');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'payment_id' => 'required|integer|exists:payments,id',
            'user_id' => 'required|integer|exists:users,id',
            'organisation_id' => 'required|integer|exists:organisations,id',
            'status' => 'required|string',
            'amount' => 'required|numeric',
            'attempt_date' => 'required|date_format:Y-m-d',

        ];
    }
}
