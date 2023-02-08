<?php

namespace Database\Seeders;

use App\Models\Organisation;
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
                'destroy organisation',
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

                'access failed_payment',
                'create failed_payment',
                'store failed_payment',
                'edit failed_payment',
                'update failed_payment',
                'destroy failed_payment',
                'show failed_payment',

                'access email_template',
                'create email_template',
                'store email_template',
                'edit email_template',
                'update email_template',
                'destroy email_template',
                'show email_template',

                'access merchandise',
                'create merchandise',
                'store merchandise',
                'edit merchandise',
                'update merchandise',
                'destroy merchandise',
                'show merchandise',

                'access trial',
                'create trial',
                'store trial',
                'edit trial',
                'update trial',
                'destroy trial',
                'show trial',
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
                

                'access user',
                'create user',
                'store user',
                'edit user',
                'update user',
                'destroy user',
                'show user',

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

                'access failed_payment',
                'create failed_payment',
                'store failed_payment',
                'edit failed_payment',
                'update failed_payment',
                'destroy failed_payment',
                'show failed_payment',

                'access email_template',
                'create email_template',
                'store email_template',
                'edit email_template',
                'update email_template',
                'destroy email_template',
                'show email_template',

                'access merchandise',
                'create merchandise',
                'store merchandise',
                'edit merchandise',
                'update merchandise',
                'destroy merchandise',
                'show merchandise',

                'access trial',
                'create trial',
                'store trial',
                'edit trial',
                'update trial',
                'destroy trial',
                'show trial',
            ],
            'coach' => [],
            'client' => [
                'access enrolment',
                'create enrolment',
                'store enrolment',
                'edit enrolment',
                'update enrolment',
                'destroy enrolment',
                'show enrolment',
            ],
            'parent' => [

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
        // ASSIGN admin ROLE
        $user = User::where('email', 'admin@admin.com')->first();
        $user->syncRoles('admin');
        if (is_null($user->organisation_id)) {
            $user->update([
            'organisation_id' => Organisation::count() > 0 ?  Organisation::pluck('id')->random() : Organisation::factory()->create()->pluck('id')->random(),
        ]);
        }


        // ASSIGN orgadmin ROLE
        $user = User::where('email', 'orgadmin@admin.com')->first();
        $user->syncRoles('orgadmin');
        if (is_null($user->organisation_id)) {
            $user->update([
            'organisation_id' => Organisation::count() > 0 ?  Organisation::pluck('id')->random() : Organisation::factory()->create()->pluck('id')->random(),
        ]);
        }

        // ASSIGN coach ROLE
        $user = User::where('email', 'coach@email.com')->first();
        $user->syncRoles('coach');
        if (is_null($user->organisation_id)) {
            $user->update([
            'organisation_id' => Organisation::count() > 0 ?  Organisation::pluck('id')->random() : Organisation::factory()->create()->pluck('id')->random(),
        ]);
        }

        // ASSIGN client ROLE
        $user = User::where('email', 'client@email.com')->first();
        $user->syncRoles('client');
        if (is_null($user->organisation_id)) {
            $user->update([
            'organisation_id' => Organisation::count() > 0 ?  Organisation::pluck('id')->random() : Organisation::factory()->create()->pluck('id')->random(),
        ]);
        }


    }
}
