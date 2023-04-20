<?php

namespace App\Http\Requests\Ppe;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePpeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->user()->can("update ppe");
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'label' => ['required'],
            'type' => ['required'],
            'description' => ['required'],
            'stocks' => ['nullable'],
            'quantity' => ['nullable'],
            'unit_price' => ['sometimes', 'required_if:type,Ppe', function ($attribute, $value, $fail) {
                if (request('type') === 'Ppe' && $value < 50000) {
                    $fail('You can`t enter value below 50000.');
                }
            }],
            'total_price' => ['nullable'],
            'date_purchased' => ['nullable'],
            'item_code' => ['required', 'unique:supplies,item_code'],
            'supplier_id' => ['nullable'], ];
    }
}
