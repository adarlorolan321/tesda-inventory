<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Waitlist;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class WaitlistTest extends TestCase
{
    use WithFaker;

    /**
     * API GET Waitlist Resource
     *
     * @return void
     */
    public function test_api_get_waitlist()
    {
        $user = User::role('Admin')->first();

        $response = $this->actingAs($user)
            ->get(route('api.waitlists.index'))
            ->assertStatus(200);
    }

    /**
     * API POST Waitlist store
     *
     * @return void
     */
    public function test_api_store_waitlist()
    {
        $user = User::role('Admin')->first();

        $data = Waitlist::factory()->make()->toArray();

        $response = $this->actingAs($user)
            ->post(route('api.waitlists.store'), $data)
            ->assertStatus(201);

        $mostRecentData = Waitlist::get()
            ->last()->toArray();
        $responseData = $response['data'];

        $this->assertEquals(
            $mostRecentData,
            $responseData
        );
    }

    /**
     * API PATCH Waitlist store
     *
     * @return void
     */
    public function test_api_update_waitlist()
    {
        $user = User::role('Admin')->first();

        $data = Waitlist::get()->last()->toArray();

        if ($data['status'] == 'active') {
            $data['status'] = 'inactive';
        } else {
            $data['status'] = 'active';
        }

        $response = $this->actingAs($user)
            ->patch(route('api.waitlists.update', $data['id']), $data)
            ->assertStatus(202);

        $mostRecentData = Waitlist::get()->last()->toArray();
        $responseData = $response['data'];

        $this->assertEquals($mostRecentData['status'], $responseData['status']);
    }

    /**
     * API PATCH Waitlist store
     *
     * @return void
     */
    public function test_api_destroy_waitlist()
    {
        $user = User::role('Admin')->first();

        $data = Waitlist::get()->last();

        $response = $this->actingAs($user)
            ->delete(route('api.waitlists.destroy', $data->id))
            ->assertStatus(204);

        $this->assertDatabaseMissing('waitlists', [
            'id' => $data->id,
        ]);
    }
}
