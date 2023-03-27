<?php

namespace App\Http\Requests\Class;

use Illuminate\Foundation\Http\FormRequest;

class UpdateClassSessionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->user()->can("update class");
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            "class_id" => ["required"],
            "date" => ["required"],
            "type" => ["required"],
            "start_time" => ["required"],
            "end_time" => ["required"],
            "coach_id" => ["required"],
            "additional_coaches" => ["required"],
            "status" => ["required"],        ];
    }
}
