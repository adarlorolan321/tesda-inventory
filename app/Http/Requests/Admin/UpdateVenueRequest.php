<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateVenueRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->user()->can('update venue');
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
                Rule::unique('venues')->where(fn ($query) => $query->where('organisation_id', $this->organisation_id))->ignore($this->route('venue')->id)
            ],
            'organisation_id' => 'nullable|integer|exists:organisations,id',
            'contact_first_name' => 'string|nullable',
            'contact_last_name' => 'string|nullable',
            'contact_email' => 'nullable|email',
            'contact_phone' => 'nullable',
            'status' => 'boolean',
        ];
    }
}
