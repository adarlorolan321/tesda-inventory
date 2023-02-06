<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class UpdateVenueRequest extends FormRequest
{
    private $user;

    public function __construct()
    {
        $this->user = Auth::user();
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        switch ($this->user->role) {
            case 'admin':
                return $this->user->can('update venue');
                break;
            case 'orgadmin':
                return $this->user->can('update venue') && $this->user->organisation_id == $this->route('venue')->organisation_id;
                break;
            default:
                return false;
        }
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
