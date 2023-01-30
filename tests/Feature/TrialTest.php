<?php

namespace Tests\Feature;

use App\Models\Trial;
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

    /**
     * API POST Trial Resource
     *
     * @return void
     */
    public function test_api_store_trial()
    {
        $user = User::role('Admin')->first();

        $data = Trial::factory()->make()->toArray();

        $response = $this->actingAs($user)
            ->post(route('api.trials.store'), $data)
            ->assertStatus(201);

        $mostRecentData = Trial::get()
            ->last()->toArray();
        $responseData = $response['data'];

        $this->assertEquals(
            $mostRecentData,
            $responseData
        );
    }

    /**
     * API PATCH Trial Resource
     *
     * @return void
     */
    public function test_api_update_trial()
    {
        $user = User::role('Admin')->first();

        $data = Trial::get()->last()->toArray();

        if ($data['status'] == 'active') {
            $data['status'] = 'inactive';
        } else {
            $data['status'] = 'active';
        }

        $response = $this->actingAs($user)
            ->patch(route('api.trials.update', $data['id']), $data)
            ->assertStatus(202);

        $mostRecentData = Trial::get()->last()->toArray();
        $responseData = $response['data'];

        $this->assertEquals($mostRecentData['status'], $responseData['status']);
    }

    /**
     * API PATCH Trial Resource
     *
     * @return void
     */
    public function test_api_destroy_trial()
    {
        $user = User::role('Admin')->first();

        $data = Trial::get()->last();

        $response = $this->actingAs($user)
            ->delete(route('api.trials.destroy', $data->id))
            ->assertStatus(204);

        $this->assertDatabaseMissing('trials', [
            'id' => $data->id,
            'uuid' => $data->uuid,
        ]);
    }
}
