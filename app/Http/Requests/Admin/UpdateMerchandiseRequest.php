<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class UpdateMerchandiseRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->user()->can('update merchandise');
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
            'name' => 'required|string',
            'description' => 'nullable|string',
            'quantity' => 'required|integer|min:1',
        ];
    }
}
