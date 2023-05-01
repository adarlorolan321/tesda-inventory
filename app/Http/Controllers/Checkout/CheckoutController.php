<?php

namespace App\Http\Controllers\Checkout;

use App\Http\Controllers\Controller;
use App\Http\Resources\Checkout\CheckoutListResource;
use App\Models\Checkout\Checkout;
use App\Http\Requests\Checkout\StoreCheckoutRequest;
use App\Http\Requests\Checkout\UpdateCheckoutRequest;
use App\Http\Resources\Supply\SupplyListResource;
use App\Models\Supply\Supply;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CheckoutController extends Controller
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
        ->where('stocks','>',0)
            ->where(function ($query) use ($queryString) {
                if ($queryString && $queryString != '') {
                    // filter result
                    $query->where('label', 'like', '%' . $queryString . '%')
                        ->orWhere('item_code', 'like', '%' . $queryString . '%')
                        ->orWhere('stocks', 'like', '%' . $queryString . '%')
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
            return redirect()->route('ppes.index', ['page' => 1]);
        }


        return Inertia::render('Admin/Checkout/Index', $props);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Checkout/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        

        $data = $request->input('data');

        foreach ($data as $item) {
            $checkout = new Checkout;
            $checkout->user_id = auth()->user()->id;
            $checkout->position = auth()->user()->position;
            $checkout->supply_id = $item['id'];
            $checkout->quantity = $item['quantity'];
            $checkout->save();

            $supply = Supply::findOrFail($item['id']);
            $supply->decrement('stocks', $item['quantity']);
        }

        return response()->json(['message' => 'Record saved']);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $id)
    {
        $data = Checkout::findOrFail($id);
        if ($request->wantsJson()) {
            return new CheckoutListResource($data);
        }
        return Inertia::render('Admin/Checkout/Show', [
            'data' => $data
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, string $id)
    {
        $data = Checkout::findOrFail($id);
        if ($request->wantsJson()) {
            return new CheckoutListResource($data);
        }
        return Inertia::render('Admin/Checkout/Edit', [
            'data' => $data
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCheckoutRequest $request, string $id)
    {
        $data = Checkout::findOrFail($id);
        $data->update($request->validated());
        sleep(1);

        if ($request->wantsJson()) {
            return (new CheckoutListResource($data))
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
}
