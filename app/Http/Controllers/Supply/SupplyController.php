<?php

namespace App\Http\Controllers\Supply;

use App\Http\Controllers\Controller;
use App\Http\Resources\Supply\SupplyListResource;
use App\Models\Supply\Supply;
use App\Http\Requests\Supply\StoreSupplyRequest;
use App\Http\Requests\Supply\UpdateSupplyRequest;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SupplyController extends Controller
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

        $data = Supply::query()
            ->with([])
            ->where(function ($query) use ($queryString) {
                if ($queryString && $queryString != '') {
                    // filter result
                    $query->where('label', 'like', '%' . $queryString . '%')
                        ->orWhere('item_code', 'like', '%' . $queryString . '%')
                        ->orWhere('type', 'like', '%' . $queryString . '%');
                }
            })
            ->when(count($sort) == 1, function ($query) use ($sort, $order) {
                $query->orderBy($sort[0], $order);
            })
            ->paginate($perPage)
            ->withQueryString();

        $props = [
            'data' => SupplyListResource::collection($data),
            'params' => $request->all(),
        ];

        if ($request->wantsJson()) {
            return json_encode($props);
        }

        if (count($data) <= 0 && $page > 1) {
            return redirect()->route('supplies.index', ['page' => 1]);
        }

        return Inertia::render('Admin/Supply/Index', $props);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Supply/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSupplyRequest $request)
    {
        $data = Supply::create($request->validated());
        sleep(1);

        if ($request->wantsJson()) {
            return new SupplyListResource($data);
        }
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $id)
    {
        $data = Supply::findOrFail($id);
        if ($request->wantsJson()) {
            return new SupplyListResource($data);
        }
        return Inertia::render('Admin/Supply/Show', [
            'data' => $data
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, string $id)
    {
        $data = Supply::findOrFail($id);
        if ($request->wantsJson()) {
            return new SupplyListResource($data);
        }
        return Inertia::render('Admin/Supply/Edit', [
            'data' => $data
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSupplyRequest $request, string $id)
    {
        $data = Supply::findOrFail($id);

        // Get the current stocks
        $currentStocks = $data->stocks;

        // Add the updated stocks to the current stocks
        $updatedStocks = $request->validated()['stocks'] + $currentStocks;

       
       // Update the supply record with the new stocks value
    $data->update(['stocks' => $updatedStocks]);

    // Update the supply record again without including the stocks field
    $data->update(collect($request->validated())->except('stocks')->toArray());
        sleep(1);

        if ($request->wantsJson()) {
            return (new SupplyListResource($data))
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
        $data = Supply::findOrFail($id);
        $data->delete();
        sleep(1);

        if ($request->wantsJson()) {
            return response(null, 204);
        }
        return redirect()->back();
    }
}
