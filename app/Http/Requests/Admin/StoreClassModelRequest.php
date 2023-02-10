<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreClassModelRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->user()->can('store class');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => [
                'required',
                'string',
                Rule::unique('services')->where(fn ($query) => $query->where('organisation_id', $this->organisation_id))
            ],
            'service_id' => 'nullable|integer|exists:services,id',
            'organisation_id' => 'nullable|integer|exists:organisations,id',
            'start_date' => 'nullable|date_format:Y-m-d',
            'end_date' => 'nullable|date_format:Y-m-d|after:' . $this->start_date,
            'start_time' => 'nullable|date_format:H:i',
            'end_time' => 'nullable|date_format:H:i|after:' . $this->start_time,
            'days' => 'required_if:repeat,true|nullable|array',
            'days.*' => 'in:sunday,monday,tuesday,wednesday,thursday,friday,saturday',
            'repeat' => 'required|boolean',
            'capacity' => 'nullable|integer',
            'price_type' => 'nullable|string',
            'price' => 'nullable|numeric',
            'venue_id' => 'required|integer|exists:venues,id',
            'status' => 'nullable|string|in:active,closed,archive',
            'coach_id' => 'required|integer|exists:users,id',
            'additional_coach' => 'nullable|string',
            'default_email' => 'nullable|boolean',
            'custom_email_text' => 'nullable|string',
            'custom_email_subject' => 'nullable|string',
            'enrolments' => 'nullable|integer',
            'tags' => 'nullable|string',
        ];
    }
}
