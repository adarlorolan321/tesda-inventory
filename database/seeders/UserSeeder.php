<?php

namespace Database\Seeders;

use App\Models\Organisation;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::factory([
            'name' => 'Administrator',
            'email' => 'admin@admin.com',
            'password' => bcrypt('password'),
            'organisation_id' => Organisation::count() > 0 ?  Organisation::pluck('id')->random() : Organisation::factory()->create()->pluck('id')->random(),
        ])->createQuietly();

        User::factory([
            'name' => 'OrgAdmin',
            'email' => 'orgadmin@admin.com',
            'password' => bcrypt('password'),
            'organisation_id' => Organisation::count() > 0 ?  Organisation::pluck('id')->random() : Organisation::factory()->create()->pluck('id')->random(),
        ])->createQuietly();

        User::factory([
            'name' => 'Coach',
            'email' => 'coach@email.com',
            'password' => bcrypt('password'),
            'organisation_id' => Organisation::count() > 0 ?  Organisation::pluck('id')->random() : Organisation::factory()->create()->pluck('id')->random(),
        ])->createQuietly();

        User::factory([
            'name' => 'client',
            'email' => 'client@email.com',
            'password' => bcrypt('password'),
            'organisation_id' => Organisation::count() > 0 ?  Organisation::pluck('id')->random() : Organisation::factory()->create()->pluck('id')->random(),
        ])->createQuietly();
    }
}
