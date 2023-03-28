<?php

namespace App\Http\Controllers\Class;

use App\Http\Controllers\Controller;
use App\Http\Resources\Class\ClassListResource;
use App\Http\Resources\Class\ClassSessionListResource;
use App\Models\Class\ClassModel;
use App\Http\Requests\Class\StoreClassRequest;
use App\Http\Requests\Class\UpdateClassRequest;

use App\Models\Class\ClassSession;
use App\Models\Setting\Service;
use App\Models\Setting\Venue;
use App\Models\User;
use App\Service\ClassSessionService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClassController extends Controller
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

        $data = ClassModel::query()
            ->leftJoin('users', 'classes.coach_id', '=', 'users.id')
            ->leftJoin('services', 'classes.service_id', '=', 'services.id')
            ->select('classes.name', 'classes.days', 'services.id as service_id', 'services.name as service_name', 'users.name as coach_name', 'classes.id')
            ->where(function ($query) use ($queryString, $request) {
                if ($queryString && $queryString != '') {
                    $query->where('classes.name', 'like', '%' . $queryString . '%')
                        ->orWhere('classes.days', 'like', '%' . $queryString . '%')
                        ->orWhere('services.name', 'like', '%' . $queryString . '%')
                        ->orWhere('users.name', 'like', '%' . $queryString . '%');
                }
            })
//            ->when($request->has('coach_filter'), function ($query) use ($request) {
//                $query->where('users.id',$request['coach_filter']);
//            })
            ->where(function ($query) use ($queryString, $request) {
                $query-> when($request->has('service_filter'), function ($query) use ($request) {
                    $query->where('services.id', $request['service_filter']);
                });
            })
            ->where(function ($query) use ($queryString, $request) {
                $query-> when($request->has('coach_filter'), function ($query) use ($request) {
                    $query->where('users.id', $request['coach_filter']);
                });
            })
            ->when(count($sort) == 1, function ($query) use ($sort, $order) {
                $query->orderBy($sort[0], $order);
            })
            ->orderBy('name', 'ASC')
            ->paginate($perPage)
            ->withQueryString();

        $props = [
            'data' => ClassListResource::collection($data),
            'coaches' => User::whereHas('roles', function ($query) {
                $query->where('name', 'Coach');
            })
                ->where('status',1)
                ->orderBy('name', 'ASC')
                ->get(['id', 'name'])
                ->map(function ($parent) {
                    return [
                        'id' => $parent->id,
                        'text' => $parent->name
                    ];
                }),
            'services' => Service::orderBy('name', 'ASC')
                ->get(['id', 'name'])
                ->map(function ($parent) {
                    return [
                        'id' => $parent->id,
                        'text' => $parent->name
                    ];
                }),
            'params' => $request->all(),
        ];

        if ($request->wantsJson()) {
            return json_encode($props);
        }

        if (count($data) <= 0 && $page > 1) {
            return redirect()->route('classes.index', ['page' => 1]);
        }

        return Inertia::render('Admin/Class/Index', $props);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Class/Create', [
            'services' => Service::orderBy('name', 'ASC')
                ->get(['id', 'name'])
                ->map(function ($parent) {
                    return [
                        'id' => $parent->id,
                        'text' => $parent->name
                    ];
                }),
            'venues' => Venue::where('status', 1)->orderBy('name', 'ASC')
                ->get(['id', 'name'])
                ->map(function ($parent) {
                    return [
                        'id' => $parent->id,
                        'text' => $parent->name
                    ];
                }),
            'coaches' => User::whereHas('roles', function ($query) {
                $query->where('name', 'Coach');
            })
                ->where('status',1)
                ->orderBy('name', 'ASC')
                ->get(['id', 'name'])
                ->map(function ($parent) {
                    return [
                        'id' => $parent->id,
                        'text' => $parent->name
                    ];
                })
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreClassRequest $request)
    {
        $data = ClassModel::create($request->validated());
        sleep(1);

        $request['id'] = $data->id;
        if ($request['repeat'] && $request['days']) {
            ClassSessionService::saveMultipleSession($request->only(['id', 'start_date', 'end_date', 'days', 'additional_coach', 'start_time', 'end_time', 'coach_id']));
        } else {
            ClassSessionService::saveSession($request->only(['id', 'start_date', 'end_date', 'days', 'additional_coach', 'start_time', 'end_time', 'coach_id']));
        }

        if ($request->wantsJson()) {
            return new ClassListResource($data);
        }
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $id)
    {
        $data = ClassModel::with(['venue', 'coach'])->findOrFail($id);
        if ($request->wantsJson()) {
            return new ClassListResource($data);
        }

        $request = request()->merge(['class_id' => $id]);
        $data['additional_coach'] = User::whereIn('id', $data['additional_coach'])->get(['id', 'name'])->makeHidden(['profile_photo', 'profile_photo_url', 'role']);

        return Inertia::render('Admin/Class/Show', [
            'classModel' => $data,
            'data' => (new ClassSessionController)->index($request, true)['data'],
            'coaches' => User::whereHas('roles', function ($query) {
                $query->where('name', 'Coach');
            })
                ->orderBy('name', 'ASC')
                ->get(['id', 'name'])
                ->map(function ($parent) {
                    return [
                        'id' => $parent->id,
                        'text' => $parent->name
                    ];
                })
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, string $id)
    {
        $data = ClassModel::findOrFail($id);
        if ($request->wantsJson()) {
            return new ClassListResource($data);
        }
        return Inertia::render('Admin/Class/Edit', [
            'data' => $data,
            'services' => Service::orderBy('name', 'ASC')->get(['id', 'name'])
                ->map(function ($parent) {
                    return [
                        'id' => $parent->id,
                        'text' => $parent->name
                    ];
                }),
            'venues' => Venue::where('status', 1)->orderBy('name', 'ASC')->get(['id', 'name'])
                ->map(function ($parent) {
                    return [
                        'id' => $parent->id,
                        'text' => $parent->name
                    ];
                }),
            'coaches' => User::whereHas('roles', function ($query) {
                $query->where('name', 'Coach');
            })
                ->where('status',1)
                ->orderBy('name', 'ASC')
                ->get(['id', 'name'])
                ->map(function ($parent) {
                    return [
                        'id' => $parent->id,
                        'text' => $parent->name
                    ];
                })
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateClassRequest $request, string $id)
    {
        $data = ClassModel::findOrFail($id);
        $data->update($request->validated());
        sleep(1);

        if ($request->wantsJson()) {
            return (new ClassListResource($data))
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
        $data = ClassModel::findOrFail($id);
        $data->delete();
        sleep(1);

        if ($request->wantsJson()) {
            return response(null, 204);
        }
        return redirect()->back();
    }
}
