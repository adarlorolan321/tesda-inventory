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
    private $permissions = [];

    private function fillPermissions($type)
    {
        switch (auth()->user()->role_name) {
            case 'admin':
                $this->permissions = [
                    $type . ' admin',
                    $type . ' orgadmin',
                    $type . ' coach',
                    $type . ' client'
                ];
                break;
            case 'orgadmin':
                $this->permissions = [
                    $type . ' orgadmin',
                    $type . ' coach',
                    $type . ' client'
                ];
                break;
            default:
                $this->permissions = [
                    $type . ' client',
                ];
                break;
        }
    }

    /**
     * Display a listing of the resource formatted
     * by name and id only
     */

    public function getUserList(Request $request)
    {
        return User::query()
            ->when(auth()->user()->hasRole('orgadmin'), function ($query) {
                $query->where('organisation_id', auth()->user()->organisation_id);
            })
            ->when(
                $request->has('roles') && count($request->input('roles')),
                function ($query) use ($request) {
                    $query->whereHas('roles', function ($query) use ($request) {
                        $query->whereIn('name', $request->input('roles'));
                    });
                }
            )
            ->select(
                'uuid',
                'id',
                DB::raw('concat(users.first_name, " ", users.last_name) as name'),
            )
            ->get()
            ->makeHidden('role_name');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $this->fillPermissions('access');

        \abort_if(!\auth()->user()->canAny($this->permissions), Response::HTTP_FORBIDDEN, 'Unauthorized');

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
                        ->orWhere(DB::raw('concat(users.first_name, " ", users.last_name)'), 'like', '%' . $s . '%')
                        ->orWhere('last_name', 'like', '%' . $s . '%')
                        ->orWhere('name', 'like', '%' . $s . '%')
                        ->orWhere('status', '=', '%' . $s . '%')
                        ->orWhereHas('organisation', function ($query) use ($s) {
                            $query->where('name', 'like', '%' . $s . '%');
                        });
                });
            })
            ->when($request->has('roles') && count($request->input('roles')), function ($query) use ($request) {
                $query->whereHas('roles', function ($query) use ($request) {
                    $query->whereIn('name', $request->input('roles'));
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
        $this->fillPermissions('store');
        \abort_if(!\auth()->user()->canAny($this->permissions), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $user = User::create($request->validated());

        $user->syncRoles($request->role ?? 'client');

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
        $this->fillPermissions('show');

        $otherOrganisation = auth()->user()->hasRole('orgadmin') ?
            auth()->user()->organisation_id == $user->organisation_id
            : true;

        \abort_if(
            !\auth()->user()->canAny($this->permissions) ||
                !$otherOrganisation,
            Response::HTTP_FORBIDDEN,
            'Unauthorized'
        );

        // \abort_if(!\auth()->user()->canAny($this->permissions), Response::HTTP_FORBIDDEN, 'Unauthorized');

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
        $this->fillPermissions('update');
        \abort_if(!\auth()->user()->canAny($this->permissions), Response::HTTP_FORBIDDEN, 'Unauthorized');
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
        $this->fillPermissions('destroy');
        \abort_if(!\auth()->user()->canAny($this->permissions), Response::HTTP_FORBIDDEN, 'Unauthorized');
        $user->delete();
        return response('user deleted')
            ->setStatusCode(204);
    }
}
