<?php

namespace App\Http\Requests\Supplier;

use Illuminate\Foundation\Http\FormRequest;

class StoreSupplierRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->user()->can("store supplier");
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            "full_name" => ["required"],
            "supplier_id_number" => ["required"],
            "email" => ["required","email"],
            "barangay" => ["required"],
            "city" => ["required"],
            "district" => ["required"],
        ];
    }
}
