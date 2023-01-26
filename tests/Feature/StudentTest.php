<?php

namespace Tests\Feature;

use App\Models\Student;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class StudentTest extends TestCase
{
    use WithFaker;

    /**
     * API GET Student Resource
     *
     * @return void
     */
    public function test_api_get_student()
    {
        $user = User::role('orgadmin')->first();

        $response = $this->actingAs($user)
            ->get(route('api.students.index'))
            ->assertStatus(200);
    }

    /**
     * API POST Student store
     *
     * @return void
     */
    public function test_api_store_student()
    {
        $user = User::role('orgadmin')->first();

        $data = Student::factory()->make()->toArray();

        $response = $this->actingAs($user)
            ->post(route('api.students.store'), $data)
            ->assertStatus(201);

        $mostRecentData = Student::get()->last()->toArray();
        $responseData = $response['data'];

        $this->assertEquals(
            $mostRecentData,
            $responseData
        );
    }

    /**
     * API PATCH Student resource
     *
     * @return void
     */
    public function test_api_update_student()
    {
        $user = User::role('orgadmin')->first();

        $data = Student::get()->last()->toArray();

        $data['first_name'] = $this->faker->firstName();

        $response = $this->actingAs($user)
            ->patch(route('api.students.update', $data['id']), $data)
            ->assertStatus(202);

        $mostRecentData = Student::get()->last()->toArray();
        $responseData = $response['data'];

        $this->assertEquals($mostRecentData['first_name'], $responseData['first_name']);
    }

    /**
     * API PATCH Student store
     *
     * @return void
     */
    public function test_api_destroy_student()
    {
        $user = User::role('orgadmin')->first();

        $data = Student::get()->last();

        $response = $this->actingAs($user)
            ->delete(route('api.students.destroy', $data->id))
            ->assertStatus(204);

        $this->assertDatabaseMissing('students', [
            'id' => $data->id,
        ]);
    }
}
