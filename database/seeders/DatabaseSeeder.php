<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            OrganisationSeeder::class,
            UserSeeder::class,
            RolePermissionSeeder::class,
        ]);
        // \App\Models\User::factory(10)->create();
    }
}
