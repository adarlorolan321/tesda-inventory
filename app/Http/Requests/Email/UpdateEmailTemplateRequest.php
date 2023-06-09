<?php

namespace App\Http\Requests\Email;

use Illuminate\Foundation\Http\FormRequest;

class UpdateEmailTemplateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->user()->can("update email_template");
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            "name" => ["required"],
            "subject" => ["required"],
            "default" => ["required"],
            "body" => ["required"],
            "attachments" => ["nullable"],
            "status" => ["required"],
        ];
    }
}
