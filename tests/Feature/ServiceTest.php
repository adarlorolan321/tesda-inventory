<?php

namespace Tests\Feature;

use App\Models\Service;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ServiceTest extends TestCase
{
    use WithFaker;

    /**
     * API GET Service Resource
     *
     * @return void
     */
    public function test_api_get_service()
    {
        $user = User::role('Admin')->first();

        $response = $this->actingAs($user)
            ->get(route('api.services.index'))
            ->assertStatus(200);
    }

    /**
     * API POST Service Resource
     *
     * @return void
     */
    public function test_api_store_service()
    {
        $user = User::role('Admin')->first();

        $data = Service::factory()->make()->toArray();

        $response = $this->actingAs($user)
            ->post(route('api.services.store'), $data)
            ->assertStatus(201);

        $mostRecentData = Service::get()
            ->last()->toArray();
        $responseData = $response['data'];

        $this->assertEquals(
            $mostRecentData,
            $responseData
        );
    }

    /**
     * API PATCH Service Resource
     *
     * @return void
     */
    public function test_api_update_service()
    {
        $user = User::role('Admin')->first();

        $data = Service::get()->last()->toArray();

        $data['name'] = $this->faker->words(3, true);

        $response = $this->actingAs($user)
            ->patch(route('api.services.update', $data['id']), $data)
            ->assertStatus(202);

        $mostRecentData = Service::get()->last()->toArray();
        $responseData = $response['data'];

        $this->assertEquals($mostRecentData['name'], $responseData['name']);
    }

    /**
     * API PATCH service Resource
     *
     * @return void
     */
    public function test_api_destroy_service()
    {
        $user = User::role('Admin')->first();

        $data = Service::get()->last();

        $response = $this->actingAs($user)
            ->delete(route('api.services.destroy', $data->id))
            ->assertStatus(204);

        $this->assertDatabaseMissing('services', [
            'id' => $data->id,
            'uuid' => $data->uuid,
        ]);
    }
}
