<?php

namespace Database\Factories;

use App\Models\Organisation;
use App\Models\Service;
use App\Models\User;
use App\Models\Venue;
use Carbon\Carbon;
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

        $randomTime = Carbon::createFromTime(rand(0, 12), rand(0, 59), 0);
        $startTime = $randomTime->format('H:i');
        $endTime = $randomTime->addHours(4)->format('H:i');

        return [
            'name' => $this->faker->word(),
            'service_id' => Service::count() > 0 ?  Service::pluck('id')->random() : Service::factory()->create()->pluck('id')->random(),
            'organisation_id' => Organisation::count() > 0 ?  Organisation::pluck('id')->random() : Organisation::factory()->create()->pluck('id')->random(),
            'start_date' => now()->subDays(rand(1, 31))->toDateString(),
            'end_date' => now()->addDays(rand(31, 62))->toDateString(),
            'start_time' => $startTime,
            'end_time' => $endTime,
            'days' => $this->faker->randomElements(['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'], rand(1, 7)),
            'repeat' => $this->faker->boolean(),
            'capacity' => $this->faker->numberBetween(0, 100),
            'price_type' => $this->faker->randomElement(['full', 'monthly']),
            'price' => $this->faker->randomFloat(2, 0, 10000),
            'venue_id' => Venue::count() > 0 ?  Venue::pluck('id')->random() : Venue::factory()->create()->pluck('id')->random(),
            'status' => $this->faker->randomElement(['active', 'closed', 'archive']),
            'coach_id' => User::role('coach')->count() > 0 ?  User::role('coach')->pluck('id')->random() : User::factory()->create()->each(fn ($user) => $user->assignRole('coach'))->pluck('id')->random(),
            'additional_coach' => User::role('coach')->pluck('id'),
            'default_email' => $this->faker->boolean(),
            'custom_email_text' => $this->faker->randomHtml(),
            'custom_email_subject' => $this->faker->words(rand(1, 5), true),
            'enrolments' => $this->faker->randomNumber,
            // 'tags' => $this->faker->randomElements($this->faker->words(rand(5, 10))),
        ];
    }
}
