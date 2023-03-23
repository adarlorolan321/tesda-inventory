<?php

namespace App\Http\Requests\Setting;

use Illuminate\Foundation\Http\FormRequest;

class UpdateVenueRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->user()->can("update venue");
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            "name" => ["required"], 
            "contact_first_name" => ["nullable"], 
            "contact_last_name" => ["nullable"], 
            "contact_email" => ["nullable","email"], 
            "contact_phone" => ["nullable"], 
            "status" => ["nullable"],
        ];
    }
}
