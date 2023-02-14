<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateClassModelRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->user()->can('update class');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        $tabs = [
            'confirm_email',
        ];

        return [
            'name' => [
                Rule::requiredIf(function () use ($tabs) {
                    if (!$this->tab) {
                        return true;
                    }

                    if (\in_array($this->tab, $tabs)) {
                        return false;
                    }

                    return true;
                }),
                'string',
                Rule::unique('services')->where(fn ($query) => $query->where('organisation_id', $this->organisation_id))
            ],
            'service_id' => 'nullable|integer|exists:services,id',
            'organisation_id' => 'nullable|integer|exists:organisations,id',
            'start_date' => 'nullable|date_format:Y-m-d',
            'end_date' => 'nullable|date_format:Y-m-d|after:' . $this->start_date,
            'start_time' => 'nullable|date_format:H:i',
            'end_time' => 'nullable|date_format:H:i|after:' . $this->start_time,
            'days' => 'nullable',
            'repeat' => [
                Rule::requiredIf(function () use ($tabs) {
                    if (!$this->tab) {
                        return true;
                    }

                    if (\in_array($this->tab, $tabs)) {
                        return false;
                    }

                    return true;
                }),
                'nullable',
                'boolean'
            ],
            'capacity' => 'nullable|integer',
            'price_type' => 'nullable|string',
            'price' => 'numeric',
            'venue_id' => [
                Rule::requiredIf(function () use ($tabs) {
                    if (!$this->tab) {
                        return true;
                    }

                    if (\in_array($this->tab, $tabs)) {
                        return false;
                    }

                    return true;
                }),
                'nullable',
                'integer',
                'exists:venues,id'
            ],
            'status' => 'nullable|string|in:active,closed,archive',
            'coach_id' => [
                Rule::requiredIf(function () use ($tabs) {
                    if (!$this->tab) {
                        return true;
                    }

                    if (\in_array($this->tab, $tabs)) {
                        return false;
                    }

                    return true;
                }),
                'nullable',
                'integer',
                'exists:users,id',
            ],
            'additional_coach' => 'nullable|array',
            'additional_coach.*' => 'nullable|string',
            'default_email' => 'nullable|boolean',
            'custom_email_text' => [
                Rule::requiredIf(function () use ($tabs) {
                    if ($this->default_email) {
                        return true;
                    }

                    return false;
                }),
                'nullable',
                'string'
            ],
            'custom_email_subject' => [
                Rule::requiredIf(function () use ($tabs) {
                    if ($this->default_email) {
                        return true;
                    }

                    return false;
                }),
                'nullable',
                'string'
            ],
            'enrolments' => 'nullable|integer',
            'tags' => 'nullable|array',
            'tags.*' => 'nullable|string',
        ];
    }
}
