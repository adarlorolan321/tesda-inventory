<?php

namespace App\Http\Requests\Class;

use Illuminate\Foundation\Http\FormRequest;

class UpdateClassRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->user()->can("update class");
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
            "service_id" => ["required"],
            "start_date" => ["nullable"],
            "end_date" => ["nullable"],
            "start_time" => ["nullable"],
            "end_time" => ["nullable"],
            "days" => ["required_if:repeat,true"],
            "repeat" => ["nullable"],
            "capacity" => ["nullable"],
            "price_type" => ["nullable"],
            "price" => ["required_if:price_type,true"],
            "venue_id" => ["required"],
            "status" => ["required"],
            "coach_id" => ["nullable"],
            "additional_coach" => ["nullable"],
            "default_email" => ["nullable"],
            "custom_email_text" => ["nullable"],
            "custom_email_subject" => ["nullable"],
            "enrolments" => ["nullable"],
            "tags" => ["nullable"],
        ];
    }
}
