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
            'admin' => [
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

                'access session',
                'create session',
                'store session',
                'edit session',
                'update session',
                'destroy session',
                'show session',

                'access student',
                'create student',
                'store student',
                'edit student',
                'update student',
                'destroy student',
                'show student',

                'access enrolment',
                'create enrolment',
                'store enrolment',
                'edit enrolment',
                'update enrolment',
                'destroy enrolment',
                'show enrolment',

                'access orgadmin',
                'create orgadmin',
                'store orgadmin',
                'edit orgadmin',
                'update orgadmin',
                'destroy orgadmin',
                'show orgadmin',

                'access coach',
                'create coach',
                'store coach',
                'edit coach',
                'update coach',
                'destroy coach',
                'show coach',

                'access user',
                'create user',
                'store user',
                'edit user',
                'update user',
                'destroy user',
                'show user',

                'access client',
                'create client',
                'store client',
                'edit client',
                'update client',
                'destroy client',
                'show client',

                'access waitlist',
                'create waitlist',
                'store waitlist',
                'edit waitlist',
                'update waitlist',
                'destroy waitlist',
                'show waitlist',

                'access payment',
                'create payment',
                'store payment',
                'edit payment',
                'update payment',
                'destroy payment',
                'show payment',
            ],
            'orgadmin' => [
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

                'access session',
                'create session',
                'store session',
                'edit session',
                'update session',
                'destroy session',
                'show session',

                'access student',
                'create student',
                'store student',
                'edit student',
                'update student',
                'destroy student',
                'show student',

                'access enrolment',
                'create enrolment',
                'store enrolment',
                'edit enrolment',
                'update enrolment',
                'destroy enrolment',
                'show enrolment',

                'access orgadmin',
                'create orgadmin',
                'store orgadmin',
                'edit orgadmin',
                'update orgadmin',
                'destroy orgadmin',
                'show orgadmin',

                'access coach',
                'create coach',
                'store coach',
                'edit coach',
                'update coach',
                'destroy coach',
                'show coach',

                'access waitlist',
                'create waitlist',
                'store waitlist',
                'edit waitlist',
                'update waitlist',
                'destroy waitlist',
                'show waitlist',

                'access client',
                'create client',
                'store client',
                'edit client',
                'update client',
                'destroy client',
                'show client',

                'access payment',
                'create payment',
                'store payment',
                'edit payment',
                'update payment',
                'destroy payment',
                'show payment',
            ],
            'coach' => [],
            'client' => [],
            'parent' => [
                'access enrolment',
                'create enrolment',
                'store enrolment',
                'edit enrolment',
                'update enrolment',
                'destroy enrolment',
                'show enrolment',
            ],
            'student' => [],
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
        $user->assignRole('admin'); // SUPER ADMIN

        // ASSIGN OrgAdmin ROLE
        $user = User::findOrFail(2);
        $user->assignRole('orgadmin'); //  OrgAdmin
    }
}
