<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class UpdateServiceRequest extends FormRequest
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
                return $this->user->can('update service');
                break;
            case 'orgadmin':
                return $this->user->can('update service') && $this->user->organisation_id == $this->route('service')->organisation_id;
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
            'organisation_id' => 'nullable|integer|exists:organisations,id',
            'name' => [
                'required',
                'string',
                Rule::unique('services')->where(fn ($query) => $query->where('organisation_id', $this->organisation_id))->ignore($this->route('service')->id)
            ],
            'code' => [
                'required',
                'string',
                'unique:services,code,' . $this->route('service')->id
            ],
        ];
    }
}
