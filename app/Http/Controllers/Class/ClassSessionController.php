<?php

namespace App\Http\Controllers\Class;

use App\Http\Controllers\Controller;
use App\Http\Resources\Class\ClassSessionListResource;
use App\Models\Class\ClassSession;
use App\Http\Requests\Class\StoreClassSessionRequest;
use App\Http\Requests\Class\UpdateClassSessionRequest;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ClassSessionController extends Controller
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

        $data = ClassSession::query()
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
            'data' => ClassSessionListResource::collection($data),
            'params' => $request->all(),
        ];

        if ($request->wantsJson()) {
            return json_encode($props);
        }

        if(count($data) <= 0 && $page > 1)
        {
            return redirect()->route('classes.sessions.index', ['page' => 1]);
        }

        return Inertia::render('Admin/Class/Session/Index', $props);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/ClassSession/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreClassSessionRequest $request)
    {
        $data = ClassSession::create($request->validated());
        sleep(1);

        if ($request->wantsJson()) {
            return new ClassSessionListResource($data);
        }
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $id)
    {
        $data = ClassSession::findOrFail($id);
        if ($request->wantsJson()) {
            return new ClassSessionListResource($data);
        }
        return Inertia::render('Admin/ClassSession/Show', [
            'data' => $data
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, string $id)
    {
        $data = ClassSession::findOrFail($id);
        if ($request->wantsJson()) {
            return new ClassSessionListResource($data);
        }
        return Inertia::render('Admin/ClassSession/Edit', [
            'data' => $data
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateClassSessionRequest $request, string $id)
    {
        $data = ClassSession::findOrFail($id);
        $data->update($request->validated());
        sleep(1);

        if ($request->wantsJson()) {
            return (new ClassSessionListResource($data))
                ->response()
                ->setStatusCode(201);
        }

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, string $id)
    {
        $data = ClassSession::findOrFail($id);
        $data->delete();
        sleep(1);

        if ($request->wantsJson()) {
            return response(null, 204);
        }
        return redirect()->back();
    }
}
