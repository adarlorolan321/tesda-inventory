<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class StoreStudentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->user()->can('store student');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'parent_id' => 'required|integer|exists:users,id',
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'dob' => 'nullable|date_format:d-m-Y',
            'email' => 'nullable|email|unique:students,email',
            'phone' => 'nullable|string',
            'gender' => 'nullable|string|in:boy,girl,pns',
        ];
    }
}
