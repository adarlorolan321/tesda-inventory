<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreServiceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->user()->can('store service');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'organisation_id' => 'required|integer|exists:organisations,id',
            'name' => [
                'required',
                'string',
                Rule::unique('services')->where(fn ($query) => $query->where('organisation_id', $this->organisation_id))
            ],
            'code' => [
                'required',
                'string',
                Rule::unique('services')->where(fn ($query) => $query->where('organisation_id', $this->organisation_id))
            ],
        ];
    }
}
