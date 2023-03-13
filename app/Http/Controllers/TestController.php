<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TestController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
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
            'data' => UserResource::collection($data),
            'params' => $request->all(),
        ];

        if ($request->wantsJson()) {
            return json_encode($props);
        }

        return Inertia::render('Admin/Page', $props);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Page/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        $data = User::create($request->validated());
        sleep(1);

        if ($request->wantsJson()) {
            return new UserResource($data);
        }
        return redirect()->route('users.index')->with('message', 'Record Saved');
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $id)
    {
        $data = User::findOrFail($id);
        if ($request->wantsJson()) {
            return new UserResource($data);
        }
        return Inertia::render('Admin/Page/Show', [
            'data' => $data
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, string $id)
    {
        $data = User::findOrFail($id);
        if ($request->wantsJson()) {
            return new UserResource($data);
        }
        return Inertia::render('Admin/Page/Edit', [
            'data' => $data
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, string $id)
    {
        $data = User::findOrFail($id);
        $data->update($request->validated());
        sleep(1);

        if ($request->wantsJson()) {
            return (new UserResource($data))
                ->response()
                ->setStatusCode(201);
        }

        return redirect()->route('users.index')->with('message', 'Record Saved');
    }

    /**
     * Remove the specified resource from storage.
     */
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
}
