<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class StoreVenueRequest extends FormRequest
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
        return $this->user->can('store venue');
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
                Rule::unique('venues')->where(function ($query) {
                    return $query->where(
                        'organisation_id',
                        $this->user->hasRole('orgadmin') ?
                            $this->user->organisation_id :
                            $this->organisation_id
                    );
                })
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
