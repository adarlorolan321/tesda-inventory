<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class StoreWaitlistRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->user()->can('store waitlist');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'class_id' => 'required|integer|exists:classes,id',
            'user_id' => 'required|integer|exists:users,id',
            'organisation_id' => 'required|integer|exists:organisations,id',
            'student_id' => 'nullable|integer|exists:students,id',
            'status' => 'required|in:active,inactive',
        ];
    }
}
