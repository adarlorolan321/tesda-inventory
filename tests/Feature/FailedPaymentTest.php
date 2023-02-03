<?php

namespace Tests\Feature;

use App\Models\FailedPayment;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class FailedPaymentTest extends TestCase
{
    use WithFaker;

    /**
     * API GET FailedPayment Resource
     *
     * @return void
     */
    public function test_api_get_failed_payment()
    {
        $user = User::role('Admin')->first();

        $response = $this->actingAs($user)
            ->get(route('api.failed-payments.index'))
            ->assertStatus(200);
    }

    /**
     * API POST FailedPayment Resource
     *
     * @return void
     */
    public function test_api_store_failed_payment()
    {
        $user = User::role('Admin')->first();

        $data = FailedPayment::factory()->make()->toArray();

        $response = $this->actingAs($user)
            ->post(route('api.failed-payments.store'), $data)
            ->assertStatus(201);

        $mostRecentData = FailedPayment::get()
            ->last()->toArray();
        $responseData = $response['data'];

        $this->assertEquals(
            $mostRecentData,
            $responseData
        );
    }

    /**
     * API PATCH FailedPayment Resource
     *
     * @return void
     */
    public function test_api_update_failed_payment()
    {
        $user = User::role('Admin')->first();

        $data = FailedPayment::get()->last()->toArray();

        $data['amount'] == $this->faker->randomFloat(2, 25, 450);

        $response = $this->actingAs($user)
            ->patch(route('api.failed-payments.update', $data['id']), $data)
            ->assertStatus(202);

        $mostRecentData = FailedPayment::get()->last()->toArray();
        $responseData = $response['data'];

        $this->assertEquals($mostRecentData['amount'], $responseData['amount']);
    }

    /**
     * API PATCH FailedPayment Resource
     *
     * @return void
     */
    public function test_api_destroy_enrolment()
    {
        $user = User::role('Admin')->first();

        $data = FailedPayment::get()->last();

        $response = $this->actingAs($user)
            ->delete(route('api.failed-payments.destroy', $data->id))
            ->assertStatus(204);

        $this->assertDatabaseMissing('failed_payments', [
            'id' => $data->id,
            'uuid' => $data->uuid,
        ]);
    }
}
