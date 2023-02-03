<?php

namespace Database\Factories;

use App\Models\Organisation;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\EmailTemplate>
 */
class EmailTemplateFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $attachments = [];
        foreach (range(0, rand(1, 3)) as $i) {
            $attachments[$i] = $this->faker->url();
        }


        return [
            'organisation_id' => Organisation::count() > 0 ?  Organisation::pluck('id')->random() : Organisation::factory()->create()->pluck('id')->random(),
            'name' => $this->faker->name(),
            'subject' => $this->faker->words(rand(3, 12), \true),
            'body' => '<p>' . $this->faker->realText() . '</p>',
            'attachments' => $attachments,
            'default' => $this->faker->boolean(),
            'status' => $this->faker->randomElement(['active', 'inactive']),
        ];
    }
}
