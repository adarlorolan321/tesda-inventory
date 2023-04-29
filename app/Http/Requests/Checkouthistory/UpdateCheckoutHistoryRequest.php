<?php

namespace App\Http\Requests\Checkouthistory;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCheckoutHistoryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->user()->can("update checkout_history");
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            
        ];
    }
}
