<?php

namespace App\Http\Controllers\Email;

use App\Http\Controllers\Controller;
use App\Http\Resources\Email\EmailTemplateListResource;
use App\Models\Email\EmailTemplate;
use App\Http\Requests\Email\StoreEmailTemplateRequest;
use App\Http\Requests\Email\UpdateEmailTemplateRequest;

use Illuminate\Http\Request;
use Inertia\Inertia;

class EmailTemplateController extends Controller
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

        $data = EmailTemplate::query()
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
            'data' => EmailTemplateListResource::collection($data),
            'params' => $request->all(),
        ];

        if ($request->wantsJson()) {
            return json_encode($props);
        }

        if(count($data) <= 0 && $page > 1)
        {
            return redirect()->route('email_templates.index', ['page' => 1]);
        }

        return Inertia::render('Admin/EmailTemplate', $props);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/EmailTemplate/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreEmailTemplateRequest $request)
    {
        $data = EmailTemplate::create($request->validated());
        sleep(1);

        if ($request->wantsJson()) {
            return new EmailTemplateListResource($data);
        }
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $id)
    {
        $data = EmailTemplate::findOrFail($id);
        if ($request->wantsJson()) {
            return new EmailTemplateListResource($data);
        }
        return Inertia::render('Admin/EmailTemplate/Show', [
            'data' => $data
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, string $id)
    {
        $data = EmailTemplate::findOrFail($id);
        if ($request->wantsJson()) {
            return new EmailTemplateListResource($data);
        }
        return Inertia::render('Admin/EmailTemplate/Edit', [
            'data' => $data
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEmailTemplateRequest $request, string $id)
    {
        $data = EmailTemplate::findOrFail($id);
        $data->update($request->validated());
        sleep(1);

        if ($request->wantsJson()) {
            return (new EmailTemplateListResource($data))
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
        $data = EmailTemplate::findOrFail($id);
        $data->delete();
        sleep(1);

        if ($request->wantsJson()) {
            return response(null, 204);
        }
        return redirect()->back();
    }
}
