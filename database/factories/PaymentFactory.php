<?php

namespace Database\Factories;

use App\Models\Organisation;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Payment>
 */
class PaymentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'process_by' => User::count() > 0 ?  User::pluck('id')->random() : User::factory()->create()->pluck('id')->random(),
            'user_id' => User::count() > 0 ?  User::pluck('id')->random() : User::factory()->create()->pluck('id')->random(),
            'organisation_id' => Organisation::count() > 0 ?  Organisation::pluck('id')->random() : Organisation::factory()->create()->pluck('id')->random(),
            'refund_by' => User::count() > 0 ?  User::pluck('id')->random() : User::factory()->create()->pluck('id')->random(),
            'status' => $this->faker->randomElement(['paid', 'due', 'pending']),
            'amount' => $this->faker->randomFloat(2, 25, 450),
            'description' => $this->faker->realText(rand(25, 50)),
            'date' => now()->format('Y-m-d'),
            'process_date' => now()->addDays(rand(1, 7))->format('Y-m-d'),
            'refund' => $this->faker->boolean(),
            'refund_amount' => $this->faker->randomFloat(2, 25, 450),
            'refund_reason' => $this->faker->realText(rand(25, 50)),
            'credits_used' => $this->faker->randomFloat(2, 25, 450),
            // 'transaction_id' => $this->faker,
        ];
    }
}
