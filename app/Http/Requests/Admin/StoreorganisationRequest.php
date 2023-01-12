<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class StoreorganisationRequest extends FormRequest
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
            'name' => 'required',
            'image' => 'nullable|mimes:jpeg,jpg,png|max:1000',
            'abn' => 'required',
            'street_address' => 'required',
            'street_address_2' => 'required',
            'suburb' => 'required',
            'postcode' => 'required',
            'state' => 'required',
            'country' => 'required',
            'phone' => 'required',
            'email' => 'required',
            'privacy_link' => 'required',
            'terms_link' => 'required',
            'image' => 'nullable',
            'stripe_key' => 'nullable',
            'stripe_secret' => 'nullable',
            'from_name'  => 'nullable',
            'reply_to_email'  => 'nullable',
            'signature'  => 'nullable',
            'is_smtp'  => 'nullable',
            'from_email'  => 'nullable',
            'smtp_host'  => 'nullable',
            'smtp_username'  => 'nullable',
            'smtp_password'  => 'nullable',
            'smtp_port'  => 'nullable',
            'smtp_security'  => 'nullable',
            'twilio_secret_id'  => 'nullable',
            'sms_from'  => 'nullable',
            'twilio_auth_token'  => 'nullable',
            'primary_user'  => 'nullable',
        ];
    }
}
