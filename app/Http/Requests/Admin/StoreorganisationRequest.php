<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class StoreOrganisationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        // return false;
        return auth()->user()->can('store organisation');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|unique:organisations,name',
            'logo' => 'nullable|mimes:jpeg,jpg,png|max:2048',
            'abn' => 'nullable|regex:/^[0-9]{11}$/',
            'street_address' => 'nullable',
            'street_address_2' => 'nullable',
            'suburb' => 'nullable',
            'postcode' => 'nullable',
            'state' => 'nullable',
            'country' => 'nullable',
            'phone' => 'nullable',
            'email' => 'nullable|email|unique:organisations,email',
            'privacy_link' => 'nullable',
            'terms_link' => 'nullable',
            'image' => 'nullable',
            'stripe_key' => 'nullable',
            'stripe_secret' => 'nullable',
            'from_name'  => 'required',
            'reply_to_email'  => 'required|email',
            'signature'  => 'nullable',
            'is_smtp'  => 'nullable|boolean',
            'from_email'  => 'nullable|email',
            'smtp_host'  => 'nullable',
            'smtp_username'  => 'nullable',
            'smtp_password'  => 'nullable',
            'smtp_port'  => 'nullable',
            'smtp_security'  => 'nullable|in:ssl,tls',
            'twilio_secret_id'  => 'nullable',
            'sms_from'  => 'nullable',
            'twilio_auth_token'  => 'nullable',
            'primary_user_id'  => 'required|integer|exists:users,id',
        ];
    }

    public function messages()
    {
        return [
            'email.unique' => 'This email already exist, please use a different email address'
        ];
    }
}
