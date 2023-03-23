<?php

namespace App\Http\Controllers\Setting;

use App\Http\Controllers\Controller;
use App\Http\Resources\Setting\VenueListResource;
use App\Models\Setting\Venue;
use App\Http\Requests\Setting\StoreVenueRequest;
use App\Http\Requests\Setting\UpdateVenueRequest;

use Illuminate\Http\Request;
use Inertia\Inertia;

class VenueController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        $page = $request->input('page', 1); // default 50
        $perPage = $request->input('perPage', 50); // default 50
        $queryString = $request->input('query', null);
        $sort = explode('.', $request->input('sort', 'name'));
        $order = $request->input('order', 'asc');
        $data = Venue::query()
            ->with([])
            ->where(function ($query) use ($queryString) {
                if ($queryString && $queryString != '') {
                    // filter result
                    $query->where('name', 'like', '%' . $queryString . '%')
                        ->orWhere('contact_last_name', 'like', '%' . $queryString . '%')
                        ->orWhere('contact_first_name', 'like', '%' . $queryString . '%')
                        ->orWhere('contact_email', 'like', '%' . $queryString . '%')
                        ->orWhere('contact_phone', 'like', '%' . $queryString . '%');
                }
            })
            ->when(count($sort) == 1, function ($query) use ($sort, $order) {
                $query->orderBy($sort[0], $order);
            })
            ->paginate($perPage)
            ->withQueryString();

        $props = [
            'data' => VenueListResource::collection($data),
            'params' => $request->all(),
        ];

        if ($request->wantsJson()) {
            return json_encode($props);
        }

        return Inertia::render('Admin/Venue/Index', $props);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Venue/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreVenueRequest $request)
    {

        $data = Venue::create($request->validated());
        sleep(1);

        if ($request->wantsJson()) {
            return new VenueListResource($data);
        }
        return redirect()->route('settings.venues.index')->with('message', 'Record Saved');
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $id)
    {
        $data = Venue::findOrFail($id);
        if ($request->wantsJson()) {
            return new VenueListResource($data);
        }
        return Inertia::render('Admin/Venue/Show', [
            'data' => $data
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, string $id)
    {
        $data = Venue::findOrFail($id);
        if ($request->wantsJson()) {
            return new VenueListResource($data);
        }
        return Inertia::render('Admin/Venue/Edit', [
            'data' => $data
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateVenueRequest $request, string $id)
    {
        $data = Venue::findOrFail($id);
        $data->update($request->validated());
        sleep(1);

        if ($request->wantsJson()) {
            return (new VenueListResource($data))
                ->response()
                ->setStatusCode(201);
        }

        return redirect()->route('settings.venues.index')->with('message', 'Record Saved');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, string $id)
    {
        $data = Venue::findOrFail($id);
        $data->delete();
        sleep(1);

        if ($request->wantsJson()) {
            return response(null, 204);
        }
        return redirect()->route('settings.venues.index')->with('message', 'Record Removed');
    }
}
