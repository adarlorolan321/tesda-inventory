<?php

namespace Database\Seeders;

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
        User::create([
            'name' => 'Administrator',
            'email' => 'admin@admin.com',
            'password' => bcrypt('password'),
        ]);

        User::create([
            'name' => 'OrgAdmin',
            'email' => 'orgAdmin@admin.com',
            'password' => bcrypt('password'),
        ]);

        User::create([
            'name' => 'Coach',
            'email' => 'coach@email.com',
            'password' => bcrypt('password'),
        ]);
        User::create([
            'name' => 'client',
            'email' => 'client@email.com',
            'password' => bcrypt('password'),
        ]);
    }
}
