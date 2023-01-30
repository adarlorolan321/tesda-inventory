<?php

namespace Tests\Feature;

use App\Models\Merchandise;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class MerchandiseTest extends TestCase
{
    use WithFaker;

    /**
     * API GET Merchandise Resource
     *
     * @return void
     */
    public function test_api_get_merchandise()
    {
        $user = User::role('Admin')->first();

        $response = $this->actingAs($user)
            ->get(route('api.merchandises.index'))
            ->assertStatus(200);
    }

    /**
     * API POST Merchandise Resource
     *
     * @return void
     */
    public function test_api_store_merchandise()
    {
        $user = User::role('Admin')->first();

        $data = Merchandise::factory()->make()->toArray();

        $response = $this->actingAs($user)
            ->post(route('api.merchandises.store'), $data)
            ->assertStatus(201);

        $mostRecentData = Merchandise::get()
            ->last()->toArray();
        $responseData = $response['data'];

        $this->assertEquals(
            $mostRecentData,
            $responseData
        );
    }

    /**
     * API PATCH Merchandise Resource
     *
     * @return void
     */
    public function test_api_update_merchandise()
    {
        $user = User::role('Admin')->first();

        $data = Merchandise::get()->last()->toArray();

        $data['name'] = $this->faker->name();

        $response = $this->actingAs($user)
            ->patch(route('api.merchandises.update', $data['id']), $data)
            ->assertStatus(202);

        $mostRecentData = Merchandise::get()->last()->toArray();
        $responseData = $response['data'];

        $this->assertEquals($mostRecentData['name'], $responseData['name']);
    }

    /**
     * API PATCH Merchandise Resource
     *
     * @return void
     */
    public function test_api_destroy_merchandise()
    {
        $user = User::role('Admin')->first();

        $data = Merchandise::get()->last();

        $response = $this->actingAs($user)
            ->delete(route('api.merchandises.destroy', $data->id))
            ->assertStatus(204);

        $this->assertDatabaseMissing('merchandises', [
            'id' => $data->id,
            'uuid' => $data->uuid,
        ]);
    }
}
