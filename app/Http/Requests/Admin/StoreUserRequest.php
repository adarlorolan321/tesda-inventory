<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        switch ($this->role) {
            case 'coach':
                return auth()->user()->can('store coach');
                break;
            case 'orgadmin':
                return auth()->user()->can('store orgadmin');
                break;
            case 'parent':
                return auth()->user()->can('store parent');
                break;
            case 'client':
                return auth()->user()->can('store client');
                break;
            default:
                return true;
                break;
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
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'phone' => 'nullable|string',
            'role' => 'required|in:coach,orgadmin,client,parent',
            'photo' => 'nullable|image|max:2048',
            'status' => [
                Rule::requiredIf($this->role != 'client'),
                'nullable',
                'in:active,inactive',
            ],
        ];
    }
}
