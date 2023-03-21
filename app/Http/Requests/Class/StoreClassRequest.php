<?php

namespace App\Http\Requests\Class;

use Illuminate\Foundation\Http\FormRequest;

class StoreClassRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->user()->can("store class");
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, 
     * \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            "name" => ["required"], 
            "service_id" => ["required"], 
            "start_date" => ["required"], 
            "end_date" => ["required"], 
            "start_time" => ["required"], 
            "end_time" => ["required"], 
            "days" => ["required"], 
            "repeat" => ["required"], 
            "capacity" => ["required"], 
            "price_type" => ["required"], 
            "price" => ["required"], 
            "venue_id" => ["required"], 
            "status" => ["required"], 
            "coach_id" => ["required"], 
            "additional_coach" => ["required"], 
            "default_email" => ["required"], 
            "custom_email_text" => ["required"], 
            "custom_email_subject" => ["required"], 
            "enrolments" => ["required"], 
            "tags" => ["required"],
        ];
    }
}
