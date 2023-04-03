<?php

namespace App\Http\Requests\Supply;

use Illuminate\Foundation\Http\FormRequest;

class StoreSupplyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->user()->can("store supply");
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
            'unit_price' => ['nullable'],
            'total_price' => ['nullable'],
            'date_purchased' => ['nullable'],
             'item_code' => ['required', 'unique:supplies,item_code'],
        ];
    }
}
