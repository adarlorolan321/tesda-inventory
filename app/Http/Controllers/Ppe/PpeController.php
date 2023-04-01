<?php

namespace App\Http\Controllers\Ppe;

use App\Http\Controllers\Controller;
use App\Http\Resources\Ppe\PpeListResource;
use App\Models\Ppe\Ppe;
use App\Http\Requests\Ppe\StorePpeRequest;
use App\Http\Requests\Ppe\UpdatePpeRequest;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PpeController extends Controller
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

        $data = Ppe::query()
            ->with([])
            ->where(function ($query) use ($queryString) {
                if ($queryString && $queryString != '') {
                    // filter result
                    $query->where('item_name', 'like', '%' . $queryString . '%')
                    ->orWhere('description', 'like', '%' . $queryString . '%')
                    ->orWhere('item_code', 'like', '%' . $queryString . '%')
                    ->orWhere('stocks', 'like', '%' . $queryString . '%')
                    ->orWhere('unit_price', 'like', '%' . $queryString . '%')
                    ->orWhere('quantity', 'like', '%' . $queryString . '%')
                        ->orWhere('total_price', 'like', '%' . $queryString . '%');
                }
            })
            ->when(count($sort) == 1, function ($query) use ($sort, $order) {
                $query->orderBy($sort[0], $order);
            })
            ->paginate($perPage)
            ->withQueryString();

        $props = [
            'data' => PpeListResource::collection($data),
            'params' => $request->all(),
        ];

        if ($request->wantsJson()) {
            return json_encode($props);
        }

        if(count($data) <= 0 && $page > 1)
        {
            return redirect()->route('ppes.index', ['page' => 1]);
        }

        return Inertia::render('Admin/Ppe/Index', $props);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Ppe/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePpeRequest $request)
    {
        $data = Ppe::create($request->validated());
        sleep(1);

        if ($request->wantsJson()) {
            return new PpeListResource($data);
        }
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $id)
    {
        $data = Ppe::findOrFail($id);
        if ($request->wantsJson()) {
            return new PpeListResource($data);
        }
        return Inertia::render('Admin/Ppe/Show', [
            'data' => $data
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, string $id)
    {
        $data = Ppe::findOrFail($id);
        if ($request->wantsJson()) {
            return new PpeListResource($data);
        }
        return Inertia::render('Admin/Ppe/Edit', [
            'data' => $data
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePpeRequest $request, string $id)
    {
        $data = Ppe::findOrFail($id);
        $data->update($request->validated());
        sleep(1);

        if ($request->wantsJson()) {
            return (new PpeListResource($data))
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
        $data = Ppe::findOrFail($id);
        $data->delete();
        sleep(1);

        if ($request->wantsJson()) {
            return response(null, 204);
        }
        return redirect()->back();
    }
}
