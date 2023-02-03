<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Student>
 */
class StudentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'parent_id' => User::count() > 0 ?  User::pluck('id')->random() : User::factory()->create()->pluck('id')->random(),
            'first_name' => $this->faker->firstName(),
            'last_name' => $this->faker->lastName(),
            'dob' => now()->subDecades(rand(1, 3))->subDays(rand(1, 365))->toDateString(),
            'email' => $this->faker->email(),
            'phone' => $this->faker->phoneNumber(),
            'gender' => $this->faker->randomElement(['boy', 'girl', 'pns']),
        ];
    }
}
