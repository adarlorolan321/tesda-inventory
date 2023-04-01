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
            "item_code" => ["required"],"item_name" => ["required"],"description" => ["required"],"quantity" => ["required"],"unit_price" => ["required"],"total_price" => ["required"],"date_purchased" => ["required"],"stocks" => ["required"],
        ];
    }
}
