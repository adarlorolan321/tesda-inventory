<?php

namespace Database\Factories;

use App\Models\Organisation;
use App\Models\Service;
use App\Models\User;
use App\Models\Venue;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ClassModel>
 */
class ClassModelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->word(),
            'service_id' => Service::count() > 0 ?  Service::pluck('id')->random() : Service::factory()->create()->pluck('id')->random(),
            'organisation_id' => Organisation::count() > 0 ?  Organisation::pluck('id')->random() : Organisation::factory()->create()->pluck('id')->random(),
            'start_date' => now()->subDays(rand(1, 31))->toDateString(),
            'end_date' => now()->addDays(rand(31, 62))->toDateString(),
            'start_time' => (string) $this->faker->numberBetween(0, 13) . ':' . (string) $this->faker->numberBetween(0, 61),
            'end_time' => (string) $this->faker->numberBetween(0, 13) . ':' . (string) $this->faker->numberBetween(0, 61),
            'days' => $this->faker->randomElement(['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']),
            'repeat' => $this->faker->boolean(),
            'capacity' => $this->faker->numberBetween(0, 100),
            'price_type' => $this->faker->randomElement(['full', 'monthly']),
            'price' => $this->faker->randomFloat(2, 0, 10000),
            'venue_id' => Venue::count() > 0 ?  Venue::pluck('id')->random() : Venue::factory()->create()->pluck('id')->random(),
            'status' => $this->faker->randomElement(['Active', 'In-active']),
            'coach_id' => User::role('coach')->count() > 0 ?  User::role('coach')->pluck('id')->random() : User::factory()->create()->each(fn ($user) => $user->assignRole('coach'))->pluck('id')->random(),
            'additional_coach' => $this->faker->word(),
            'default_email' => $this->faker->boolean(),
            'custom_email_text' => $this->faker->randomHtml(),
            'custom_email_subject' => $this->faker->words(rand(1, 5), false),
            'enrolments' => $this->faker->randomNumber,
            // 'tags' => $this->faker->,
        ];
    }
}
