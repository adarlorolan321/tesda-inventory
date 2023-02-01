<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Tests\TestCase;

class ClientTest extends TestCase
{
    use WithFaker;

    /**
     * API GET User Resource, filtered by client role
     *
     * @return void
     */
    public function test_api_get_client()
    {
        $user = User::role('orgadmin')->first();

        $response = $this->actingAs($user)
            ->get(route('api.users.index'), [
                'role' => 'client',
            ])
            ->assertStatus(200);
    }

    /**
     * API POST User with role 'client' store
     *
     * @return void
     */
    public function test_api_store_client()
    {
        $user = User::role('orgadmin')->first();

        $data = [
            'first_name' => $this->faker->firstName(),
            'last_name' => $this->faker->lastName(),
            'email' => $this->faker->email(),
            'phone' => $this->faker->phoneNumber(),
            'role' => 'client',
        ];

        $response = $this->actingAs($user)
            ->post(route('api.users.store'), $data)
            ->assertStatus(201);

        $mostRecentData = User::get()
            ->makeHidden([
                'status',
                'email_verified_at',
                'current_team_id',
                'profile_photo_path',
            ])->last()->toArray();
        $responseData = $response['data'];

        $this->assertEquals(
            $mostRecentData,
            $responseData
        );
    }

    /**
     * API PATCH User with role 'client' resource
     *
     * @return void
     */
    public function test_api_update_client()
    {
        $user = User::role('orgadmin')->first();

        $data = User::role('client')->get()->last()->toArray();

        if ($data['status'] == 'active') {
            $data['status'] = 'inactive';
        } else {
            $data['status'] = 'active';
        }

        $response = $this->actingAs($user)
            ->patch(route('api.users.update', $data['id']), $data)
            ->assertStatus(202);

        $mostRecentData = User::role('client')->get()->last()->toArray();
        $responseData = $response['data'];

        $this->assertEquals($mostRecentData['status'], $responseData['status']);
    }

    /**
     * API PATCH User with role 'client' store
     *
     * @return void
     */
    public function test_api_destroy_client()
    {
        $user = User::role('orgadmin')->first();

        $data = User::role('client')->get()->last();

        $response = $this->actingAs($user)
            ->delete(route('api.users.destroy', $data->id))
            ->assertStatus(204);

        $this->assertDatabaseMissing('users', [
            'id' => $data->id,
        ]);
    }
}
