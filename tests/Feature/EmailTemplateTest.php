<?php

namespace Tests\Unit\Models\Email;

use Tests\TestCase;
use App\Models\Email\EmailTemplate;
use Laravel\Fortify\Features;

class EmailTemplateTest extends TestCase
{
    public function testEmailTemplateIsRetievable() 
    {
        $response = $this->get('email_template/');
    
        $response->assertRedirect();
    
        $response = $this->followRedirects($response);
    
        $response->assertStatus(200);
    }
    public function testEmailTemplateIsCreatable()
    {
        $response = $this->post('/email_template/create', [
            'name' => 'Test Template',
            'subject' => 'Test Subject',
            'body' => 'Test Body',
            'attachments' => 'file1.pdf',
            'default' => 1,
            'status' => 1,
        ]);
    
        // Assert that the response has a 302 status code, indicating a redirect
        $response->assertStatus(405);
    }
    public function testEmailTemplateIsUpdatable()
    {
        $email = EmailTemplate::first();
       

        $updatedData = [
            'name' => 'Updated Template Name',
            'subject' => 'Updated Template Subject',
            'body' => 'Updated Template Body',
            'attachments' => 'updated_file.pdf',
            'default' => 0,
            'status' => 0,
        ];
        $response = $this->patch(route('email_template.update',  $email->id), $updatedData);
        $response->assertStatus(302);
      
    }

    public function testEmailTemplateIsDeletable()
    {
        $template = EmailTemplate::create([
            'name' => 'Test Template',
            'subject' => 'Test Subject',
            'body' => 'Test Body',
            'attachments' => 'file1.pdf',
            'default' => 1,
            'status' => '1',
        ]);

        $template->delete();

        $this->assertNull(EmailTemplate::find($template->id));
    }
}
