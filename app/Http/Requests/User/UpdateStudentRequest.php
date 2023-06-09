<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class UpdateStudentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->user()->can("update student");
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            "parent_id" => ["required"],
            "first_name" => ["required"],
            "last_name" => ["nullable"],
            "dob" => ["nullable", 'date'],
            "email" => ["nullable", 'email'],
            'phone' => ['nullable','numeric'],
            "gender" => ["nullable"],
        ];
    }
}
