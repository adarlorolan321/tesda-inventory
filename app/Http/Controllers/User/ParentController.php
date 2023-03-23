<?php

namespace App\Http\Controllers\User;

use App\Helper\StrHelper;
use App\Http\Controllers\Controller;
use App\Http\Resources\User\ParentListResource;
use App\Models\Media;
use App\Models\User;
use App\Http\Requests\User\StoreParentRequest;
use App\Http\Requests\User\UpdateParentRequest;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class ParentController extends Controller
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

        $data = User::query()
            ->whereHas('roles', function ($query)  {
                $query->where('name', 'Client');
            })
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
            'data' => ParentListResource::collection($data),
            'params' => $request->all(),
        ];

        if ($request->wantsJson()) {
            return json_encode($props);
        }
        if (count($data) <= 0 && $page > 1) {
            return redirect()->route('user.coach.index', ['page' => 1]);
        }


        return Inertia::render('Admin/User/Parent/Index', $props);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Coach/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreParentRequest $request)
    {
        $password = StrHelper::randomPassword();
        $userArr = $request->all();
        $userArr['name'] = $request['first_name'].' '.$request['last_name'];
        $userArr['password'] = Hash::make($password);
        $data = User::create($userArr);
        $data->assignRole($request['role']);
        //Upload Profile Photo
        if(isset($request->input('profile_photo', [])['id'])){
            Media::where('id', $request->input('profile_photo', [])['id'])
                ->update([
                    'model_id' => $data->id
                ]);
        }

        sleep(1);
        if ($request->wantsJson()) {
            return new ParentListResource($data);
        }
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $id)
    {
        $data = User::findOrFail($id);
        if ($request->wantsJson()) {
            return new CoachListResource($data);
        }
        return Inertia::render('Admin/Coach/Show', [
            'data' => $data
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, string $id)
    {
        $data = User::findOrFail($id);
        if ($request->wantsJson()) {
            return new CoachListResource($data);
        }
        return Inertia::render('Admin/Coach/Edit', [
            'data' => $data
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateParentRequest $request, string $id)
    {
        $data = User::findOrFail($id);
        $userArr = $request->all();
        $userArr['name'] = $request['first_name'].' '.$request['last_name'];
        $data->update($userArr);
        $data->assignRole($request['role']);
        //Upload Profile Photo
        if(isset($request->input('profile_photo', [])['id'])){
            if($request->input('profile_photo', [])['model_id'] != $data->id){
                $data->clearMediaCollection('profile_photo');
            }
            Media::where('id', $request->input('profile_photo', [])['id'])
                ->update([
                    'model_id' => $data->id
                ]);
        }

        sleep(1);

        if ($request->wantsJson()) {
            return (new CoachListResource($data))
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
        $data = User::findOrFail($id);
        $data->delete();
        sleep(1);

        if ($request->wantsJson()) {
            return response(null, 204);
        }
        return redirect()->back();
    }
}
