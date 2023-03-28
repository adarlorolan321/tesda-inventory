<?php

namespace Database\Seeders;

use App\Models\Email\EmailTemplate as Email;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EmailTemplateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('email_templates')->insert([
            [
                'name' => 'Customer Account Created',
                'subject' => 'Enrolment confirmed',
                'body' => 'text to go here...',
            ],
            [
                'name' => 'Payment Receipt',
                'subject' => 'Payment Receipt',
                'body' => 'text to go here...',
            ],
            [
                'name' => 'Waitlist Confirmation',
                'subject' => 'Waitlist Confirmation',
                'body' => 'text to go here...',
            ],
            [
                'name' => 'Payment Reminder',
                'subject' => 'Payment Reminder',
                'body' => 'text to go here...',
            ],
            [
                'name' => 'Failed Payment',
                'subject' => 'Failed Payment',
                'body' => 'text to go here...',
            ],
            [
                'name' => 'Enrolment Cancelled',
                'subject' => 'Enrolment Cancelled',
                'body' => 'text to go here...',
            ]
        ]);
    }
}
