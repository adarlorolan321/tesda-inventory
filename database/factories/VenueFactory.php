<?php

namespace Database\Factories;

use App\Models\Organisation;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Venue>
 */
class VenueFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => \ucfirst($this->faker->citySuffix()),
            'organisation_id' => Organisation::count() > 0 ?  Organisation::pluck('id')->random() : Organisation::factory()->create()->pluck('id')->random(),
            'contact_first_name' => $this->faker->firstName(),
            'contact_last_name' => $this->faker->lastName(),
            'contact_email' => $this->faker->email(),
            'contact_phone' => $this->faker->phoneNumber(),
            'status' => $this->faker->boolean(),
        ];
    }
}
