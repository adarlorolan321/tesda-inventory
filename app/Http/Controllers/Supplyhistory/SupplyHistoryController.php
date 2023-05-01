<?php

namespace App\Http\Controllers\Supplyhistory;

use App\Http\Controllers\Controller;
use App\Http\Resources\Supplyhistory\SupplyHistoryListResource;
use App\Models\Supplyhistory\SupplyHistory;
use App\Http\Requests\Supplyhistory\StoreSupplyHistoryRequest;
use App\Http\Requests\Supplyhistory\UpdateSupplyHistoryRequest;

use Illuminate\Http\Request;
use Inertia\Inertia;
use PDF;
use Illuminate\Support\Facades\DB;

class SupplyHistoryController extends Controller
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

        $data = SupplyHistory::query()
            ->with(['supply', 'user'])
            ->when($queryString && $queryString != '', function ($query) use ($queryString) {
                $query->whereHas('supply', function ($subquery) use ($queryString) {
                    $subquery->where('label', 'like', '%' . $queryString . '%');
                });
                $query->whereHas('user', function ($subquery) use ($queryString) {
                    $subquery->where('name', 'like', '%' . $queryString . '%');
                });
                $query->orwhere('quantity', 'like', '%' . $queryString . '%');
                $query->orWhere('unit_price', 'like', '%' . $queryString . '%');
                $query ->orWhere(DB::raw("(DATE_FORMAT(created_at,'%d/%m/%Y'))"), 'like', '%' . $queryString . '%');
            })
            ->when(count($sort) == 1, function ($query) use ($sort, $order) {
                $query->orderBy($sort[0], $order);
            })
            ->paginate($perPage)
            ->withQueryString();

        $props = [
            'data' => SupplyHistoryListResource::collection($data),
            'params' => $request->all(),
        ];

        if ($request->wantsJson()) {
            return json_encode($props);
        }

        if (count($data) <= 0 && $page > 1) {
            return redirect()->route('supply_histories.index', ['page' => 1]);
        }




        return Inertia::render('Admin/SupplyHistory/Index', $props);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/SupplyHistory/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSupplyHistoryRequest $request)
    {
        $data = SupplyHistory::create($request->validated());
        sleep(1);

        if ($request->wantsJson()) {
            return new SupplyHistoryListResource($data);
        }
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $id)
    {
        $data = SupplyHistory::findOrFail($id);
        if ($request->wantsJson()) {
            return new SupplyHistoryListResource($data);
        }
        return Inertia::render('Admin/SupplyHistory/Show', [
            'data' => $data
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, string $id)
    {
        $data = SupplyHistory::findOrFail($id);
        if ($request->wantsJson()) {
            return new SupplyHistoryListResource($data);
        }
        return Inertia::render('Admin/SupplyHistory/Edit', [
            'data' => $data
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSupplyHistoryRequest $request, string $id)
    {
        $data = SupplyHistory::findOrFail($id);
        $data->update($request->validated());
        sleep(1);

        if ($request->wantsJson()) {
            return (new SupplyHistoryListResource($data))
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
        $data = SupplyHistory::findOrFail($id);
        $data->delete();
        sleep(1);

        if ($request->wantsJson()) {
            return response(null, 204);
        }
        return redirect()->back();
    }
    public function printSupplyHistory(Request $request)
    {

       
        $data = $request->input('paginatedData');
        //   dd($data[0]);
        // // Generate the PDF report
        $pdf = PDF::loadView('supplyhistory', compact('data'));
        return $pdf->stream('supplyhistory.pdf');
    }
}
