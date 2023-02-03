<?php

namespace Tests\Feature;

use App\Models\EmailTemplate;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class EmailTemplateTest extends TestCase
{
    use WithFaker;

    /**
     * API GET EmailTemplate Resource
     *
     * @return void
     */
    public function test_api_get_email_templates()
    {
        $user = User::role('Admin')->first();

        $response = $this->actingAs($user)
            ->get(route('api.email-templates.index'))
            ->assertStatus(200);
    }

    /**
     * API POST EmailTemplate Resource
     *
     * @return void
     */
    public function test_api_store_email_template()
    {
        $user = User::role('Admin')->first();

        $data = EmailTemplate::factory()->make()->toArray();

        $response = $this->actingAs($user)
            ->post(route('api.email-templates.store'), $data)
            ->assertStatus(201);

        $mostRecentData = EmailTemplate::get()
            ->last()->toArray();
        $responseData = $response['data'];

        $this->assertEquals(
            $mostRecentData,
            $responseData
        );
    }

    /**
     * API PATCH EmailTemplate Resource
     *
     * @return void
     */
    public function test_api_update_email_template()
    {
        $user = User::role('Admin')->first();

        $data = EmailTemplate::get()->last()->toArray();

        if ($data['status'] == 'active') {
            $data['status'] = 'inactive';
        } else {
            $data['status'] = 'active';
        }

        $response = $this->actingAs($user)
            ->patch(route('api.email-templates.update', $data['id']), $data)
            ->assertStatus(202);

        $mostRecentData = EmailTemplate::get()->last()->toArray();
        $responseData = $response['data'];

        $this->assertEquals($mostRecentData['status'], $responseData['status']);
    }

    /**
     * API PATCH EmailTemplate Resource
     *
     * @return void
     */
    public function test_api_destroy_email_template()
    {
        $user = User::role('Admin')->first();

        $data = EmailTemplate::get()->last();

        $response = $this->actingAs($user)
            ->delete(route('api.email-templates.destroy', $data->id))
            ->assertStatus(204);

        $this->assertDatabaseMissing('email_templates', [
            'id' => $data->id,
            'uuid' => $data->uuid,
        ]);
    }
}
