<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class UpdateEnrolmentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->user()->can('update enrolment');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'created_by' => 'required|integer|exists:users,id',
            'class_id' => 'required|integer|exists:classes,id',
            'user_id' => 'required|integer|exists:users,id',
            'student_id' => 'nullable|integer|exists:students,id',
            'organisation_id' => 'required|integer|exists:organisations,id',
            'payment_status' => 'nullable|string',
            'status' => 'required|string',
            'lessons' => 'nullable|string',
            'cancel_date' => 'nullable|date_format:Y-m-d',
            'cancel_on' => 'nullable|date_format:Y-m-d',
            'cancel_reason' => 'nullable|string',
            'cancel_by' => 'nullable|integer|exists:users,id',
            'discount_type' => 'nullable|string',
            'discount' => 'nullable|integer',
        ];
    }
}
