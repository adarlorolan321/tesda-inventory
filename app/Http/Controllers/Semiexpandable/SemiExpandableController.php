<?php

namespace App\Http\Controllers\Semiexpandable;

use App\Http\Controllers\Controller;

use App\Models\Semiexpandable\SemiExpandable;
use App\Http\Requests\Semiexpandable\StoreSemiExpandableRequest;
use App\Http\Requests\Semiexpandable\UpdateSemiExpandableRequest;
use App\Http\Requests\Supply\StoreSupplyRequest;
use App\Http\Requests\Supply\UpdateSupplyRequest;
use App\Http\Resources\Supply\SupplyListResource;
use App\Models\Supply\Supply;
use App\Models\Supplyhistory\SupplyHistory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use PDF;    

class SemiExpandableController extends Controller
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
            ->with(['supplier'])
            ->where('type', 'Semi Expendable')
            ->where(function ($query) use ($queryString) {
                if ($queryString && $queryString != '') {
                    $query->where('label', 'like', '%' . $queryString . '%')
                        ->orWhere('item_code', 'like', '%' . $queryString . '%')
                        ->orWhere('stocks', 'like', '%' . $queryString . '%')
                        ->orWhere(DB::raw("(DATE_FORMAT(date_purchased,'%Y-%m-%d'))"), 'like', '%' . $queryString . '%')

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
            return redirect()->route('semi_expandables.index', ['page' => 1]);
        }

        return Inertia::render('Admin/SemiExpandable/Index', $props);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/SemiExpandable/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSupplyRequest $request)
    {
        $data = Supply::create($request->validated());
        sleep(1);
        SupplyHistory::create(
            [
                'user_id' => auth()->user()->id,
                'supply_id' => $data->id,
                'quantity' => $data->stocks,
                'unit_price' => $data->unit_price,
            ]

        );
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
        return Inertia::render('Admin/SemiExpandable/Show', [
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
        return Inertia::render('Admin/SemiExpandable/Edit', [
            'data' => $data
        ]);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSupplyRequest $request, string $id)
    {

        $data = Supply::findOrFail($id);
        $data->update($request->validated());
        sleep(1);

        if ($request->wantsJson()) {
            return (new SupplyListResource($data))
                ->response()
                ->setStatusCode(201);
        }

        return redirect()->back();
    }

    public function addStocks(UpdateSupplyRequest $request, string $id)
    {
        $data = Supply::findOrFail($id);
        $currentStocks = $data->stocks;
        $currentUnitPrice = $data->unit_price;
        SupplyHistory::create(
            [
                'user_id' => auth()->user()->id,
                'supply_id' => $data->id,
                'quantity' => $data->stocks,
                'unit_price' => $request->unit_price,
            ]

        );


        $totalCurrentUnitPrice = ($currentStocks * $currentUnitPrice) + ($request->validated()['stocks'] * $request->validated()['unit_price']);

        $updatedStocks = $request->validated()['stocks'] + $currentStocks;

        $average = $totalCurrentUnitPrice / $updatedStocks;

        // Update the Ppe record with the new stocks value
        $data->update(['stocks' => $updatedStocks]);
        $data->update(['unit_price' => $average]);

        // Update the Ppe record again without including the stocks field
        $data->update(collect($request->validated())->except(['stocks', 'unit_price'])->toArray());
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
    public function print(Request $request)
    {


        $data = $request->input('paginatedData');
        //   dd($data[0]);
        // // Generate the PDF report
        $pdf = PDF::loadView('semiexpendible', compact('data'));
        return $pdf->stream('semiexpendible.pdf');
    }
}
