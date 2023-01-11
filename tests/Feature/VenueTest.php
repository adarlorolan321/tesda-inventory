<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Venue;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class VenueTest extends TestCase
{
    use WithFaker;

    /**
     * API GET Venue Resource
     *
     * @return void
     */
    public function test_api_get_venues()
    {
        $user = User::role('Admin')->first();

        $response = $this->actingAs($user)
            ->get(route('api.venues.index'))
            ->assertStatus(200);
    }

    /**
     * API POST Venue store
     *
     * @return void
     */
    public function test_api_store_venue()
    {
        $user = User::role('Admin')->first();

        $venue = Venue::factory()->make()->toArray();

        $response = $this->actingAs($user)
            ->post(route('api.venues.store'), $venue)
            ->assertStatus(201);

        $mostRecentData = Venue::get()->last()->toArray();
        $responseData = $response['data'];

        $this->assertEquals($mostRecentData, $responseData);
    }

    /**
     * API PATCH Venue store
     *
     * @return void
     */
    public function test_api_update_venue()
    {
        $user = User::role('Admin')->first();

        $venue = Venue::get()->last()->toArray();

        $venue['name'] = $this->faker->word();

        $response = $this->actingAs($user)
            ->patch(route('api.venues.update', $venue['id']), $venue)
            ->assertStatus(202);

        $mostRecentData = Venue::get()->last()->toArray();
        $responseData = $response['data'];

        $this->assertEquals($mostRecentData['name'], $responseData['name']);
    }

    /**
     * API PATCH Venue store
     *
     * @return void
     */
    public function test_api_destroy_venue()
    {
        $user = User::role('Admin')->first();

        $venue = Venue::get()->last();

        $response = $this->actingAs($user)
            ->delete(route('api.venues.destroy', $venue->id))
            ->assertStatus(204);

        $this->assertDatabaseMissing('venues', [
            'id' => $venue->id,
            'name' => $venue->name,
        ]);
    }
}
