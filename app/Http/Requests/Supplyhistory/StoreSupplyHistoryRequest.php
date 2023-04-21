<?php

namespace App\Http\Requests\Supplyhistory;

use Illuminate\Foundation\Http\FormRequest;

class StoreSupplyHistoryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->user()->can("store supply_history");
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            "user_id" => ["required"],"supply_id" => ["required"],
        ];
    }
}
