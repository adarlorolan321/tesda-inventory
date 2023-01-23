<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class TrialTest extends TestCase
{
    use WithFaker;

    /**
     * API GET Trial Resource
     *
     * @return void
     */
    public function test_api_get_trial()
    {
        $user = User::role('Admin')->first();

        $response = $this->actingAs($user)
            ->get(route('api.trials.index'))
            ->assertStatus(200);
    }
}
