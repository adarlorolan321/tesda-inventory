<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class StoreEmailTemplateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->user()->can('store email_template');
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
            'name' => 'nullable|string',
            'subject' => 'required|string',
            'body' => 'required|string',
            'attachments' => 'nullable|array',
            'attachments.*' => 'required|url',
            'default' => 'nullable|boolean',
            'status' => 'nullable|in:active,inactive',
        ];
    }
}
