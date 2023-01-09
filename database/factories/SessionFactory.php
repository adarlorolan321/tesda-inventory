<?php

namespace Database\Factories;

use App\Models\ClassModel;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Session>
 */
class SessionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'class_id' => ClassModel::count() > 0 ?  ClassModel::pluck('id')->random() : ClassModel::factory()->create()->pluck('id')->random(),
            'date' => now()->addDays(rand(1, 31))->format('Y-m-d'),
            'type' => $this->faker->randomElement(['online', 'face-to-face']),
            'start_time' => (string) $this->faker->numberBetween(0, 13) . ':' . (string) $this->faker->numberBetween(0, 61),
            'end_time' => (string) $this->faker->numberBetween(0, 13) . ':' . (string) $this->faker->numberBetween(0, 61),
            'coach_id' => User::role('coach')->count() > 0 ?  User::role('coach')->pluck('id')->random() : User::factory()->create()->each(fn ($user) => $user->assignRole('coach'))->pluck('id')->random(),
            'additional_coaches' => $this->faker->randomElement(['none', 'yes']),
            'status' => $this->faker->randomElement(['active', 'in-active']),
        ];
    }
}
