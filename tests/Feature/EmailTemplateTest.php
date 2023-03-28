<?php

namespace Tests\Unit\Models\Email;

use Tests\TestCase;
use App\Models\Email\EmailTemplate;

class EmailTemplateTest extends TestCase
{
    public function testEmailTemplateIsCreatable()
    {
        $template = EmailTemplate::create([
            'name' => 'Test Template',
            'subject' => 'Test Subject',
            'body' => 'Test Body',
            'attachments' => 'file1.pdf',
            'default' => 1,
            'status' => 1,
        ]);

        $this->assertEquals('Test Template', $template->name);
        $this->assertEquals('Test Subject', $template->subject);
        $this->assertEquals('Test Body', $template->body);
        $this->assertEquals('file1.pdf', $template->attachments);
        $this->assertEquals(1,$template->default);
        $this->assertEquals(1, $template->status);
    }

    public function testEmailTemplateIsUpdatable()
    {
        $template = EmailTemplate::create([
            'name' => 'Test Template',
            'subject' => 'Test Subject',
            'body' => 'Test Body',
            'attachments' => 'file1.pdf',
            'default' => 1,
            'status' => 0,
        ]);

        $template->update([
            'name' => 'Updated Template',
            'subject' => 'Updated Subject',
            'body' => 'Updated Body',
            'attachments' => 'file3.jpg',
            'default' => 1,
            'status' => 0,
        ]);

        $this->assertEquals('Updated Template', $template->name);
        $this->assertEquals('Updated Subject', $template->subject);
        $this->assertEquals('Updated Body', $template->body);
        $this->assertEquals('file3.jpg', $template->attachments);
        $this->assertEquals(1,$template->default);
        $this->assertEquals(0, $template->status);
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
