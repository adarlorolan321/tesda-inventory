<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StoreUserRequest;
use App\Http\Requests\Admin\UpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Models\Organisation;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // $permissions = [];
        // switch (auth()->user()->role_name) {
        //     case 'admin':
        //         $permissions = ['access user', 'access orgadmin', 'access coach', 'access client'];
        //         break;
        //     case 'orgadmin':
        //         $permissions = ['access orgadmin', 'access coach', 'access client'];
        //         break;
        //     case 'coach':
        //         $permissions = ['access client'];
        //         break;
        //     default:
        //         $permissions = ['access client'];
        //         break;
        // }
        // \abort_if(!\auth()->user()->can($permissions), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $perPage = $request->has('perPage') ? $request->input('perPage') : 10;

        $users = User::with(['organisation'])
            ->where(function ($query) use ($request) {
                $s = $request->input('query');
                $query->when($request->has('query'), function ($query) use (
                    $s,
                ) {
                    $query->where('name', 'like', '%' . $s . '%')
                        ->orWhere(
                            DB::raw('DATE_FORMAT(' . 'users.created_at, "%d/%c/%Y")'),
                            'LIKE',
                            '%' . $s . '%'
                        )
                        ->orWhere('email', 'like', '%' . $s . '%')
                        ->orWhere('first_name', 'like', '%' . $s . '%')
                        ->orWhere('name', 'like', '%' . $s . '%')
                        ->orWhere('status', '=', '%' . $s . '%')
                        ->orWhereHas('organisation', function ($query) use ($s) {
                            $query->where('name', 'like', '%' . $s . '%');
                        });
                });
            })
            ->when($request->has('role'), function ($query) use ($request) {
                $query->whereHas('roles', function ($query) use ($request) {
                    $query->where('name', '=', $request->input('role'));
                });
            })
            ->when(!auth()->user()->hasRole('admin'), function ($query) use ($request) {
                $query->where('organisation_id', auth()->user()->organisation_id);
            })
            ->orderBy('first_name', 'ASC')
            ->paginate($perPage);

        return UserResource::collection($users);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreUserRequest $request)
    {
        $user = User::create($request->validated());

        $user->assignRole($request->role ?? 'client');

        if ($request->hasFile('photo')) {
            $user->addMedia($request->file('photo'))->toMediaCollection('photos');
        }

        return (new UserResource($user))
            ->response()
            ->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        return new UserResource($user->load(['organisation']));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        $user->update($request->validated());
        $user->syncRoles($request->role ?? 'client');

        if ($request->hasFile('photo')) {
            $user->clearMediaCollection('photos');

            $user->addMedia(request()->file('photo'))->toMediaCollection('photos');
        }

        return (new UserResource($user))
            ->response()
            ->setStatusCode(202);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $permissions = [];
        switch (auth()->user()->role_name) {
            case 'admin':
                $permissions = ['destroy user', 'destroy orgadmin', 'destroy coach', 'destroy client'];
                break;
            case 'orgadmin':
                $permissions = ['destroy user', 'destroy orgadmin', 'destroy coach', 'destroy client'];
                break;
            case 'coach':
                $permissions = ['destroy user', 'destroy client'];
                break;
            default:
                $permissions = ['destroy user', 'destroy client'];
                break;
        }

        \abort_if(!\auth()->user()->can($permissions), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $user->delete();

        return response('user deleted')
            ->setStatusCode(204);
    }
}
