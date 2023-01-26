<?php

namespace Database\Factories;

use App\Models\Organisation;
use App\Models\Payment;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\FailedPayment>
 */
class FailedPaymentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'payment_id' => Payment::count() > 0 ?  Payment::pluck('id')->random() : Payment::factory()->create()->pluck('id')->random(),
            'user_id' => User::count() > 0 ?  User::pluck('id')->random() : User::factory()->create()->pluck('id')->random(),
            'organisation_id' => Organisation::count() > 0 ?  Organisation::pluck('id')->random() : Organisation::factory()->create()->pluck('id')->random(),
            'status' => $this->faker->randomElement(['paid', 'pending', 'due']),
            'amount' => $this->faker->randomFloat(2, 25, 250),
            'attempt_date' => now()->addDays(rand(1, 7))->format('Y-m-d'),
        ];
    }
}
