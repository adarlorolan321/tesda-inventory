<?php

namespace App\Http\Controllers\Class;

use App\Http\Controllers\Controller;
use App\Http\Resources\Class\ClassListResource;
use App\Models\Class\ClassModel;
use App\Http\Requests\Class\StoreClassRequest;
use App\Http\Requests\Class\UpdateClassRequest;

use App\Models\Setting\Service;
use App\Models\Setting\Venue;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClassController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        $perPage = $request->input('perPage', 50); // default 50
        $queryString = $request->input('query', null);

        $data = ClassModel::query()
            ->with(['service','venue','coach'])
            ->where(function ($query) use ($queryString) {
                if ($queryString && $queryString != '') {
                    // filter result
                     $query->where('column', 'like', '%' . $queryString . '%')
                         ->orWhere('column', 'like', '%' . $queryString . '%');
                }
            })
            ->orderBy('name', 'ASC')
            ->paginate($perPage)
            ->withQueryString();

        $props = [
            'data' => ClassListResource::collection($data),
            'params' => $request->all(),
        ];

        if ($request->wantsJson()) {
            return json_encode($props);
        }

        return Inertia::render('Admin/Class/Index', $props);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Class/Create', [
            'services' => Service::get(['id', 'name'])
                ->map(function ($parent) {
                    return [
                        'id' => $parent->id,
                        'text' => $parent->name
                    ];
                }),
            'venues' => Venue::where('status', 1)->get(['id', 'name'])
                ->map(function ($parent) {
                    return [
                        'id' => $parent->id,
                        'text' => $parent->name
                    ];
                }),
            'coaches' => User::whereHas('roles', function ($query) {$query->where('name', 'Coach');})
                ->get(['id', 'name'])
                ->map(function ($parent) {
                    return [
                        'id' => $parent->id,
                        'text' => $parent->name
                    ];
                })
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreClassRequest $request)
    {
        $data = ClassModel::create($request->validated());
        sleep(1);

        if ($request->wantsJson()) {
            return new ClassListResource($data);
        }
        return redirect()->route('classes.index')->with('message', 'Record Saved');
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $id)
    {
        $data = ClassModel::findOrFail($id);
        if ($request->wantsJson()) {
            return new ClassListResource($data);
        }
        return Inertia::render('Admin/Class/Show', [
            'data' => $data
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, string $id)
    {
        $data = ClassModel::findOrFail($id);
        if ($request->wantsJson()) {
            return new ClassListResource($data);
        }
        return Inertia::render('Admin/Class/Edit', [
            'data' => $data,
            'services' => Service::get(['id', 'name'])
                ->map(function ($parent) {
                    return [
                        'id' => $parent->id,
                        'text' => $parent->name
                    ];
                }),
            'venues' => Venue::where('status', 1)->get(['id', 'name'])
                ->map(function ($parent) {
                    return [
                        'id' => $parent->id,
                        'text' => $parent->name
                    ];
                }),
            'coaches' => User::whereHas('roles', function ($query) {$query->where('name', 'Coach');})
                ->get(['id', 'name'])
                ->map(function ($parent) {
                    return [
                        'id' => $parent->id,
                        'text' => $parent->name
                    ];
                })
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateClassRequest $request, string $id)
    {
        $data = ClassModel::findOrFail($id);
        $data->update($request->validated());
        sleep(1);

        if ($request->wantsJson()) {
            return (new ClassListResource($data))
                ->response()
                ->setStatusCode(201);
        }

        return redirect()->route('classes.index')->with('message', 'Record Saved');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, string $id)
    {
        $data = ClassModel::findOrFail($id);
        $data->delete();
        sleep(1);

        if ($request->wantsJson()) {
            return response(null, 204);
        }
        return redirect()->route('classes.index')->with('message', 'Record Removed');
    }
}
