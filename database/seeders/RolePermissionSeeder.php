<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Models\User;

class RolePermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $roles = [
            'Admin' => [
                'access organisation',
                'create organisation',
                'store organisation',
                'edit organisation',
                'update organisation',
                'delete organisation',
                'view organisation',

                'access service',
                'create service',
                'store service',
                'edit service',
                'update service',
                'destroy service',
                'show service',

                'access venue',
                'create venue',
                'store venue',
                'edit venue',
                'update venue',
                'destroy venue',
                'show venue',

                'access class',
                'create class',
                'store class',
                'edit class',
                'update class',
                'destroy class',
                'show class',
            ],
            'OrgAdmin' => [
                'access organisation',
                'create organisation',
                'store organisation',
                'edit organisation',
                'update organisation',
                'delete organisation',
                'view organisation',

                'legal_edit'
            ],

            'Coach' => [],

            'Client' => [],
        ];

        foreach ($roles as $role => $permissions) {
            $db_role = Role::where('name', $role)->first();
            if (!$db_role) {
                // CREATE NEW ROLE
                $db_role = Role::create(['name' => $role]);
            }
            // ADD PERMISSION
            foreach ($permissions as  $permission) {
                $new_permission = Permission::where('name', $permission)->first();
                if (!$new_permission) {
                    $new_permission = Permission::create([
                        'name' => $permission
                    ]);
                }
                if (!$db_role->hasPermissionTo($permission)) {
                    $db_role->givePermissionTo($permission);
                }
            }
        }
        // ASSIGN SUPER ADMIN ROLE
        $user = User::findOrFail(1);
        $user->assignRole('Admin'); // SUPER ADMIN

        // ASSIGN SUPER OrgAdmin ROLE
        $user = User::findOrFail(2);
        $user->assignRole('OrgAdmin'); //  OrgAdmin

        // ASSIGN SUPER Coach ROLE
        $user = User::findOrFail(3);
        $user->assignRole('Coach'); //  Coach

        // ASSIGN SUPER Client ROLE
        $user = User::findOrFail(4);
        $user->assignRole('Client'); //  Client
    }
}
