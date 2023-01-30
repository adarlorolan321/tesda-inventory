<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Tests\TestCase;

class CoachTest extends TestCase
{
    use WithFaker;

    /**
     * API GET User Resource, filtered by Coach role
     *
     * @return void
     */
    public function test_api_get_waitlist()
    {
        $user = User::role('orgadmin')->first();

        $response = $this->actingAs($user)
            ->get(route('api.users.index'), [
                'role' => 'coach',
            ])
            ->assertStatus(200);
    }

    /**
     * API POST Waitlist store
     *
     * @return void
     */
    public function test_api_store_waitlist()
    {
        $user = User::role('orgadmin')->first();

        $data = [
            'first_name' => $this->faker->firstName(),
            'last_name' => $this->faker->lastName(),
            'email' => $this->faker->email(),
            'phone' => $this->faker->phoneNumber(),
            // 'role' => $this->faker->randomElement(['orgadmin', 'coach', 'client', 'parent']),
            'role' => 'coach',
            'status' => $this->faker->randomElement(['active', 'inactive']),
            'photo' => UploadedFile::fake()->create('fake-photo', 2048, 'image/png'),
        ];

        $response = $this->actingAs($user)
            ->post(route('api.users.store'), $data)
            ->assertStatus(201);

        $mostRecentData = User::get()
            ->makeHidden([
                'email_verified_at',
                'current_team_id',
                'profile_photo_path',
            ])->last();
        $responseData = $response['data'];

        $this->assertEquals(
            $mostRecentData->toArray(),
            $responseData
        );

        $this->assertEquals(
            $mostRecentData->role_name,
            'coach'
        );
    }

    /**
     * API PATCH Waitlist resource
     *
     * @return void
     */
    public function test_api_update_waitlist()
    {
        $user = User::role('orgadmin')->first();

        $data = User::role('coach')->get()->last()->toArray();

        if ($data['status'] == 'active') {
            $data['status'] = 'inactive';
        } else {
            $data['status'] = 'active';
        }

        $response = $this->actingAs($user)
            ->patch(route('api.users.update', $data['id']), $data)
            ->assertStatus(202);

        $mostRecentData = User::role('coach')->get()->last()->toArray();
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
        $user = User::role('orgadmin')->first();

        $data = User::role('coach')->get()->last();

        $response = $this->actingAs($user)
            ->delete(route('api.users.destroy', $data->id))
            ->assertStatus(204);

        $this->assertDatabaseMissing('users', [
            'id' => $data->id,
        ]);
    }
}