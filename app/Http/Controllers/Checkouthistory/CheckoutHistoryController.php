<?php

namespace App\Http\Controllers\Checkouthistory;

use App\Http\Controllers\Controller;
use App\Http\Resources\Checkouthistory\CheckoutHistoryListResource;
use App\Models\Checkouthistory\CheckoutHistory;
use App\Http\Requests\Checkouthistory\StoreCheckoutHistoryRequest;
use App\Http\Requests\Checkouthistory\UpdateCheckoutHistoryRequest;
use App\Http\Resources\Checkout\CheckoutListResource;
use App\Models\Checkout\Checkout;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use PDF;
use Illuminate\Support\Facades\DB;

class CheckoutHistoryController extends Controller
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
        $query_date_from = $request->input('query_date_from', null);
        $query_date_to = $request->input('query_date_to', null);
        
        if (auth()->user()->role == 'Admin') {
            $data = Checkout::query()
                ->with(['supply', 'user'])
                ->when($queryString && $queryString != '', function ($query) use ($queryString) {
                    $query->whereHas('supply', function ($subquery) use ($queryString) {
                        $subquery->where('label', 'like', '%' . $queryString . '%');
                    });
                    $query->orwhere('quantity', 'like', '%' . $queryString . '%')
                        ->orWhere('position', 'like', '%' . $queryString . '%')
                        ->orWhere(DB::raw("(DATE_FORMAT(created_at,'%d/%m/%Y'))"), 'like', '%' . $queryString . '%');
                })


                ->when(count($sort) == 1, function ($query) use ($sort, $order) {
                    $query->orderBy($sort[0], $order);
                })
                ->when($query_date_from && $query_date_to, function ($query) use ($query_date_from, $query_date_to) {
                    $query->whereBetween('created_at', [$query_date_from, $query_date_to]);
                })
                ->orderBy('created_at', 'ASC')
                ->paginate($perPage)
                ->withQueryString();
        } else {
            $data = Checkout::query()
                ->with('supply')
                ->when($queryString && $queryString != '', function ($query) use ($queryString) {
                    $query->whereHas('supply', function ($subquery) use ($queryString) {
                        $subquery->where('label', 'like', '%' . $queryString . '%');
                    });
                    $query->orwhere('quantity', 'like', '%' . $queryString . '%')
                        ->orWhere('position', 'like', '%' . $queryString . '%');
                })
                ->when(count($sort) == 1, function ($query) use ($sort, $order) {
                    $query->orderBy($sort[0], $order);
                })
                ->orderBy('created_at', 'ASC')
                ->paginate($perPage)
                ->withQueryString();
        }


        $props = [
            'user' => User::where('user_id', auth()->user()->id),
            'data' => CheckoutListResource::collection($data),
            'params' => $request->all(),
        ];

        if ($request->wantsJson()) {
            return json_encode($props);
        }

        if (count($data) <= 0 && $page > 1) {
            return redirect()->route('checkout_histories.index', ['page' => 1]);
        }

        return Inertia::render('Admin/CheckoutHistory/Index', $props);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/CheckoutHistory/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCheckoutHistoryRequest $request)
    {
        $data = CheckoutHistory::create($request->validated());
        sleep(1);

        if ($request->wantsJson()) {
            return new CheckoutHistoryListResource($data);
        }
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $id)
    {
        $data = CheckoutHistory::findOrFail($id);
        if ($request->wantsJson()) {
            return new CheckoutHistoryListResource($data);
        }
        return Inertia::render('Admin/CheckoutHistory/Show', [
            'data' => $data
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, string $id)
    {
        $data = CheckoutHistory::findOrFail($id);
        if ($request->wantsJson()) {
            return new CheckoutHistoryListResource($data);
        }
        return Inertia::render('Admin/CheckoutHistory/Edit', [
            'data' => $data
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCheckoutHistoryRequest $request, string $id)
    {
        $data = CheckoutHistory::findOrFail($id);
        $data->update($request->validated());
        sleep(1);

        if ($request->wantsJson()) {
            return (new CheckoutHistoryListResource($data))
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
        $data = Checkout::findOrFail($id);
        $data->delete();
        sleep(1);

        if ($request->wantsJson()) {
            return response(null, 204);
        }
        return redirect()->back();
    }
    public function printCheckout(Request $request)
    {

        $data = $request->input('paginatedData');
        // dd($data[0]['supply']);
        // Generate the PDF report
        $pdf = PDF::loadView('checkouthistory', compact('data'));
        return $pdf->stream('checkouthistory.pdf');
    }
}
