<?php

namespace Tests\Feature;

use App\Models\Payment;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class PaymentTest extends TestCase
{
    use WithFaker;

    /**
     * API GET Payment Resource
     *
     * @return void
     */
    public function test_api_get_payment()
    {
        $user = User::role('admin')->first();

        $response = $this->actingAs($user)
            ->get(route('api.payments.index'))
            ->assertStatus(200);
    }

    /**
     * API POST Payment Resource
     *
     * @return void
     */
    public function test_api_store_payment()
    {
        $user = User::role('admin')->first();

        $data = Payment::factory()->make()->toArray();

        $response = $this->actingAs($user)
            ->post(route('api.payments.store'), $data)
            ->assertStatus(201);

        $mostRecentData = Payment::get()
            ->last()->toArray();
        $responseData = $response['data'];

        $this->assertEquals(
            $mostRecentData,
            $responseData
        );
    }

    /**
     * API PATCH Payment Resource
     *
     * @return void
     */
    public function test_api_update_payment()
    {
        $user = User::role('admin')->first();

        $data = Payment::get()->last()->toArray();

        $data['description'] = $this->faker->realText(100);

        $response = $this->actingAs($user)
            ->patch(route('api.payments.update', $data['id']), $data)
            ->assertStatus(202);

        $mostRecentData = Payment::get()->last()->toArray();
        $responseData = $response['data'];

        $this->assertEquals($mostRecentData['description'], $responseData['description']);
    }

    /**
     * API PATCH Payment Resource
     *
     * @return void
     */
    public function test_api_destroy_payment()
    {
        $user = User::role('admin')->first();

        $data = Payment::get()->last();

        $response = $this->actingAs($user)
            ->delete(route('api.payments.destroy', $data->id))
            ->assertStatus(204);

        $this->assertDatabaseMissing('payments', [
            'id' => $data->id,
            'uuid' => $data->uuid,
        ]);
    }
}
