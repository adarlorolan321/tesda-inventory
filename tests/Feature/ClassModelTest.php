<?php

namespace Tests\Feature;

use App\Models\ClassModel;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ClassModelTest extends TestCase
{
    use WithFaker;

    /**
     * API GET ClassModel Resource
     *
     * @return void
     */
    public function test_api_get_classes()
    {
        $user = User::role('Admin')->first();

        $response = $this->actingAs($user)
            ->get(route('api.classes.index'))
            ->assertStatus(200);
    }

    /**
     * API POST ClassModel Resource
     *
     * @return void
     */
    public function test_api_store_class()
    {
        $user = User::role('Admin')->first();

        $data = ClassModel::factory()->make()->toArray();

        $response = $this->actingAs($user)
            ->post(route('api.classes.store'), $data)
            ->assertStatus(201);

        $mostRecentData = ClassModel::get()->makeHidden('tags')->last()->toArray();
        $responseData = $response['data'];
        $responseData['start_time'] .= ':00';
        $responseData['end_time'] .= ':00';

        $this->assertEquals(
            $mostRecentData,
            $responseData
        );
    }

    /**
     * API PATCH ClassModel Resource
     *
     * @return void
     */
    public function test_api_update_class()
    {
        $user = User::role('Admin')->first();

        $data = ClassModel::get()->last()->toArray();

        $data['name'] = $this->faker->words(3, true);
        $data['start_time'] = Carbon::createFromFormat('H:i:s', $data['start_time'])->format('H:i');
        $data['end_time'] = Carbon::createFromFormat('H:i:s', $data['end_time'])->format('H:i');

        $response = $this->actingAs($user)
            ->patch(route('api.classes.update', $data['id']), $data)
            ->assertStatus(202);

        $mostRecentData = ClassModel::get()->last()->toArray();
        $responseData = $response['data'];

        $this->assertEquals($mostRecentData['name'], $responseData['name']);
    }

    /**
     * API PATCH ClassModel Resource
     *
     * @return void
     */
    public function test_api_destroy_class()
    {
        $user = User::role('Admin')->first();

        $data = ClassModel::get()->last();

        $response = $this->actingAs($user)
            ->delete(route('api.classes.destroy', $data->id))
            ->assertStatus(204);

        $this->assertDatabaseMissing('classes', [
            'id' => $data->id,
            'uuid' => $data->uuid,
        ]);
    }
}
