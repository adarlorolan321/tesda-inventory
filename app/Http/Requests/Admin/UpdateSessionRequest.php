<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class UpdateSessionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->user()->can('update session');
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
            'date' => 'required|date_format:Y-m-d',
            'type' => 'required|string',
            'start_time' => 'required|date_format:H:i',
            'end_time' => 'required|date_format:H:i',
            'coach_id' => 'nullable|integer|exists:users,id',
            'additional_coaches' => 'nullable|array',
            'additional_coaches.*' => 'nullable|string',
            'status' => 'required',
        ];
    }
}
