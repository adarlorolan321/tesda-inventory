<?php

namespace App\Http\Requests\Supply;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
class UpdateSupplyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->user()->can("update supply");
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
        'item_code' => ['required'],
        'stocks' => ['nullable'],
        'quantity' => ['nullable'],
        'unit_price' => ['nullable'],
        'total_price' => ['nullable'],
        'date_purchased' => ['nullable'],

    ];
}
}
