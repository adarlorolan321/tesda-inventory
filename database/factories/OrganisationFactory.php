<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class OrganisationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->company(),
            'abn' => $this->faker->numerify('###########'),
            'street_address' => $this->faker->streetAddress(),
            'street_address_2' => $this->faker->streetAddress(),
            'suburb' => $this->faker->city(),
            'postcode' => $this->faker->postcode(),
            'state' => $this->faker->city(),
            'country' => $this->faker->country(),
            'phone' => $this->faker->phoneNumber(),
            'email' => $this->faker->email(),
            'privacy_link' => $this->faker->url(),
            'stripe_key' => $this->faker->uuid(),
            'stripe_secret' => $this->faker->uuid(),
            'terms_link' => $this->faker->url(),
            'from_name' => $this->faker->name(),
            'reply_to_email' => $this->faker->email(),
            'signature' => $this->faker->words(3, true),
            'is_smtp' => $this->faker->boolean(),
            'from_email' => $this->faker->email(),
            'smtp_host' => strtoupper($this->faker->word()),
            'smtp_username' => strtoupper($this->faker->word()),
            'smtp_password' => $this->faker->password(),
            'smtp_port' => $this->faker->bothify('????'),
            'smtp_security' => $this->faker->password(),
            'twilio_secret_id' => $this->faker->uuid(),
            'sms_from' => strtoupper($this->faker->word()),
            'twilio_auth_token' => $this->faker->uuid(),
            'primary_user'  => $this->faker->name(),
        ];
    }
}
