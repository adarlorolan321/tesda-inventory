<?php

namespace Database\Factories;

use App\Models\ClassModel;
use App\Models\Organisation;
use App\Models\Student;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\WaitList>
 */
class WaitListFactory extends Factory
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
            'user_id' => User::count() > 0 ?  User::pluck('id')->random() : User::factory()->create()->pluck('id')->random(),
            'student_id' => Student::count() > 0 ?  Student::pluck('id')->random() : Student::factory()->create()->pluck('id')->random(),
            'organisation_id' => Organisation::count() > 0 ?  Organisation::pluck('id')->random() : Organisation::factory()->create()->pluck('id')->random(),
            'status' => $this->faker->randomElement(['active', 'inactive']),
        ];
    }
}
