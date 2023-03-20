<?php

namespace App\Http\Controllers\Page\Setting;

use App\Http\Controllers\Controller;
use App\Http\Resources\Setting\ServiceListResource;
use App\Models\Setting\Service;
use App\Http\Requests\Setting\StoreServiceRequest;
use App\Http\Requests\Setting\UpdateServiceRequest;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        $perPage = $request->input('perPage', 50); // default 50
        $queryString = $request->input('query', null);

        $data = Service::query()
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
            'data' => ServiceListResource::collection($data),
            'params' => $request->all(),
        ];

        if ($request->wantsJson()) {
            return json_encode($props);
        }

        return Inertia::render('Admin/Service', $props);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Service/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreServiceRequest $request)
    {
        $data = Service::create($request->validated());
        sleep(1);

        if ($request->wantsJson()) {
            return new ServiceListResource($data);
        }
        return redirect()->route('services.index')->with('message', 'Record Saved');
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $id)
    {
        $data = Service::findOrFail($id);
        if ($request->wantsJson()) {
            return new ServiceListResource($data);
        }
        return Inertia::render('Admin/Service/Show', [
            'data' => $data
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, string $id)
    {
        $data = Service::findOrFail($id);
        if ($request->wantsJson()) {
            return new ServiceListResource($data);
        }
        return Inertia::render('Admin/Service/Edit', [
            'data' => $data
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateServiceRequest $request, string $id)
    {
        $data = Service::findOrFail($id);
        $data->update($request->validated());
        sleep(1);

        if ($request->wantsJson()) {
            return (new ServiceListResource($data))
                ->response()
                ->setStatusCode(201);
        }

        return redirect()->route('services.index')->with('message', 'Record Saved');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, string $id)
    {
        $data = Service::findOrFail($id);
        $data->delete();
        sleep(1);

        if ($request->wantsJson()) {
            return response(null, 204);
        }
        return redirect()->route('services.index')->with('message', 'Record Removed');
    }
}
