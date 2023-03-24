<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class StoreCoachRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->user()->can("store user");
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'first_name' => ['required','max:100'],
            'last_name' => ['required','max:100'],
            'email' => ['required','email:rfc,dns','unique:users,email'],
            'phone' => ['required','numeric','max:20'],
            'role' => ['required'],
            'status' => ['required'],
            'profile_photo' => ['nullable'],
        ];
    }
}
