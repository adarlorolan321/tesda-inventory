<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Resources\User\CoachListResource;
use App\Models\User;
use App\Http\Requests\User\StoreCoachRequest;
use App\Http\Requests\User\UpdateCoachRequest;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CoachController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        $page = $request->input('page', 1); // default 1
        $perPage = $request->input('perPage', 50); // default 50
        $queryString = $request->input('query', null);
        $sort = explode('.', $request->input('sort', 'id'));
        $order = $request->input('order', 'asc');

        $data = User::query()
            ->with([])
            ->where(function ($query) use ($queryString) {
                if ($queryString && $queryString != '') {
                    // filter result
                    // $query->where('column', 'like', '%' . $queryString . '%')
                    //     ->orWhere('column', 'like', '%' . $queryString . '%');
                }
            })
            ->when(count($sort) == 1, function ($query) use ($sort, $order) {
                $query->orderBy($sort[0], $order);
            })
            ->paginate($perPage)
            ->withQueryString();

        $props = [
            'data' => CoachListResource::collection($data),
            'params' => $request->all(),
        ];

        if ($request->wantsJson()) {
            return json_encode($props);
        }
        if(count($data) <= 0 && $page > 1)
        {
            return redirect()->route('user.coach', ['page' => 1]);
        }


        return Inertia::render('Admin/User/Coach', $props);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Coach/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCoachRequest $request)
    {
        $data = User::create($request->validated());
        sleep(1);

        if ($request->wantsJson()) {
            return new CoachListResource($data);
        }
        return redirect()->route('coaches.index')->with('message', 'Record Saved');
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $id)
    {
        $data = User::findOrFail($id);
        if ($request->wantsJson()) {
            return new CoachListResource($data);
        }
        return Inertia::render('Admin/Coach/Show', [
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
            return new CoachListResource($data);
        }
        return Inertia::render('Admin/Coach/Edit', [
            'data' => $data
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCoachRequest $request, string $id)
    {
        $data = User::findOrFail($id);
        $data->update($request->validated());
        sleep(1);

        if ($request->wantsJson()) {
            return (new CoachListResource($data))
                ->response()
                ->setStatusCode(201);
        }

        return redirect()->route('coaches.index')->with('message', 'Record Saved');
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
        return redirect()->route('coaches.index')->with('message', 'Record Removed');
    }
}
