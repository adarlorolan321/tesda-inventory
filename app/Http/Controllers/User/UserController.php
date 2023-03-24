<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Resources\User\UserListResource;
use App\Models\User;
use App\Http\Requests\User\StoreUserRequest;
use App\Http\Requests\User\UpdateUserRequest;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request, $role = null)
    {

        $perPage = $request->input('perPage', 50); // default 50
        $queryString = $request->input('query', null);

        $data = User::query()
            ->with([])
            ->where(function ($query) use ($queryString) {
                if ($queryString && $queryString != '') {
                    // filter result
                    // $query->where('column', 'like', '%' . $queryString . '%')
                    //     ->orWhere('column', 'like', '%' . $queryString . '%');
                }
            })
            ->paginate($perPage)
            ->withQueryString();

        $props = [
            'data' => UserListResource::collection($data),
            'params' => $request->all(),
        ];

        if ($request->wantsJson()) {
            return json_encode($props);
        }

        return Inertia::render('Admin/User', $props);
    }


    public function create()
    {
        return Inertia::render('Admin/User/Create');
    }


    public function store(StoreUserRequest $request)
    {
        $data = User::create($request->validated());
        sleep(1);

        if ($request->wantsJson()) {
            return new UserListResource($data);
        }
        return redirect()->route('users.index')->with('message', 'Record Saved');
    }


    public function show(Request $request, string $id)
    {
        $data = User::findOrFail($id);
        if ($request->wantsJson()) {
            return new UserListResource($data);
        }
        return Inertia::render('Admin/User/Show', [
            'data' => $data
        ]);
    }


    public function edit(Request $request, string $id)
    {
        $data = User::findOrFail($id);
        if ($request->wantsJson()) {
            return new UserListResource($data);
        }
        return Inertia::render('Admin/User/Edit', [
            'data' => $data
        ]);
    }


    public function update(Request $request, string $id)
    {
       
      
        $data = User::findOrFail($id);
      
      $data->update($request->all());
        sleep(1);
      
       

        if ($request->wantsJson()) {
            return (new UserListResource($data))
                ->response()
                ->setStatusCode(201);
        }

        return redirect()->route('user.profile.index')->with('message', 'Record Saved');
    }


    public function destroy(Request $request, string $id)
    {
        $data = User::findOrFail($id);
        $data->delete();
        sleep(1);

        if ($request->wantsJson()) {
            return response(null, 204);
        }
        return redirect()->route('users.index')->with('message', 'Record Removed');
    }

    public function validateInput(Request $request, $type)
    {
        return $type;
        //        $rules = [
        //            'email' => 'email|unique:users,email',
        //        ];
        //        $validator = Validator::make($request->all(), $rules);
        //
        //        return $validator->passes();
    }

    public function profile()
    {
        return Inertia::render('Admin/User/Profile/Show');
    }

    public function changePassword()
    {
        return Inertia::render('Admin/User/Profile/Show');
    }
}
