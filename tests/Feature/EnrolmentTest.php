<?php

namespace Tests\Feature;

use App\Models\Enrolment;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class EnrolmentTest extends TestCase
{
    use WithFaker;

    /**
     * API GET Enrolment Resource
     *
     * @return void
     */
    public function test_api_get_enrolment()
    {
        $user = User::role('Admin')->first();

        $response = $this->actingAs($user)
            ->get(route('api.enrolments.index'))
            ->assertStatus(200);
    }

    /**
     * API POST Enrolment store
     *
     * @return void
     */
    public function test_api_store_enrolment()
    {
        $user = User::role('Admin')->first();

        $data = Enrolment::factory()->make()->toArray();

        $response = $this->actingAs($user)
            ->post(route('api.enrolments.store'), $data)
            ->assertStatus(201);

        $mostRecentData = Enrolment::get()
            ->last()->toArray();
        $responseData = $response['data'];

        $this->assertEquals(
            $mostRecentData,
            $responseData
        );
    }

    /**
     * API PATCH Enrolment store
     *
     * @return void
     */
    public function test_api_update_enrolment()
    {
        $user = User::role('Admin')->first();

        $data = Enrolment::get()->last()->toArray();

        if ($data['status'] == 'active') {
            $data['status'] = 'inactive';
        } else {
            $data['status'] = 'active';
        }

        $response = $this->actingAs($user)
            ->patch(route('api.enrolments.update', $data['id']), $data)
            ->assertStatus(202);

        $mostRecentData = Enrolment::get()->last()->toArray();
        $responseData = $response['data'];

        $this->assertEquals($mostRecentData['status'], $responseData['status']);
    }

    /**
     * API PATCH Enrolment store
     *
     * @return void
     */
    public function test_api_destroy_enrolment()
    {
        $user = User::role('Admin')->first();

        $data = Enrolment::get()->last();

        $response = $this->actingAs($user)
            ->delete(route('api.enrolments.destroy', $data->id))
            ->assertStatus(204);

        $this->assertDatabaseMissing('enrolments', [
            'id' => $data->id,
            'uuid' => $data->uuid,
        ]);
    }
}
