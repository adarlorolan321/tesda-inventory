<?php

namespace Database\Factories;

use App\Models\Organisation;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Service>
 */
class ServiceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'organisation_id' => Organisation::count() > 0 ?  Organisation::pluck('id')->random() : Organisation::factory()->create()->pluck('id')->random(),
            'name' => $this->faker->word(),
            'code' => \strtoupper($this->faker->bothify('###')) . $this->faker->bothify('???'),
        ];
    }
}
