<?php

namespace Tests\Feature;

use App\Models\Organisation;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class OrganisationTest extends TestCase
{
    use WithFaker;

    /**
     * API GET Organisation Resource
     *
     * @return void
     */
    public function test_api_get_organisation()
    {
        $user = User::role('Admin')->first();

        $response = $this->actingAs($user)
            ->get(route('api.organisations.index'))
            ->assertStatus(200);
    }

    /**
     * API POST Organisation store
     *
     * @return void
     */
    public function test_api_store_organisation()
    {
        $user = User::role('Admin')->first();

        $data = Organisation::factory()->make()->toArray();

        $response = $this->actingAs($user)
            ->post(route('api.organisations.store'), $data)
            ->assertStatus(201);

        $mostRecentData = Organisation::withCasts([
            'is_smtp' => 'boolean'
        ])
            ->get()
            ->makeHidden([
                'image',
                'xero_access_token',
                'xero_refresh_token',
                'xero_tenant_id',
                'xero_connected',
                'token_last_refreshed',
            ])
            ->last()->toArray();
        $responseData = $response['data'];

        $this->assertEquals(
            $mostRecentData,
            $responseData
        );
    }

    /**
     * API PATCH Organisation store
     *
     * @return void
     */
    public function test_api_update_organisation()
    {
        $user = User::role('Admin')->first();

        $data = Organisation::get()->last()->toArray();

        $data['name'] = $this->faker->word();

        $response = $this->actingAs($user)
            ->patch(route('api.organisations.update', $data['id']), $data)
            ->assertStatus(202);

        $mostRecentData = Organisation::get()->last()->toArray();
        $responseData = $response['data'];

        $this->assertEquals($mostRecentData['name'], $responseData['name']);
    }

    /**
     * API PATCH Organisation store
     *
     * @return void
     */
    public function test_api_destroy_organisation()
    {
        $user = User::role('Admin')->first();

        $data = Organisation::get()->last();

        $response = $this->actingAs($user)
            ->delete(route('api.organisations.destroy', $data->id))
            ->assertStatus(204);

        $this->assertDatabaseMissing('venues', [
            'id' => $data->id,
            'name' => $data->name,
        ]);
    }
}
