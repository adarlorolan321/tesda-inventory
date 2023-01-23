<?php

namespace Database\Factories;

use App\Models\ClassModel;
use App\Models\Organisation;
use App\Models\Student;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Enrolment>
 */
class EnrolmentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'created_by' => User::count() > 0 ?  User::pluck('id')->random() : User::factory()->create()->pluck('id')->random(),
            'class_id' => ClassModel::count() > 0 ?  ClassModel::pluck('id')->random() : ClassModel::factory()->create()->pluck('id')->random(),
            'user_id' => User::count() > 0 ?  User::pluck('id')->random() : User::factory()->create()->pluck('id')->random(),
            'student_id' => Student::count() > 0 ?  Student::pluck('id')->random() : Student::factory()->create()->pluck('id')->random(),
            'organisation_id' => Organisation::count() > 0 ?  Organisation::pluck('id')->random() : Organisation::factory()->create()->pluck('id')->random(),
            'payment_status' => $this->faker->randomElement(['paid', 'pending', 'due']),
            'status' => $this->faker->randomElement(['active', 'in-active']),
            'lessons' => $this->faker->realText(rand(25, 150)),
            'cancel_date' => now()->subDays(rand(1, 31))->toDateString(),
            'cancel_on' => now()->subDays(rand(1, 31))->toDateString(),
            'cancel_reason' => $this->faker->realText(rand(10, 50)),
            'cancel_by' => User::count() > 0 ?  User::pluck('id')->random() : User::factory()->create()->pluck('id')->random(),
            'discount_type' => $this->faker->randomElement(['full', 'half']),
            'discount' => $this->faker->randomElement([25, 50, 100]),
        ];
    }
}
