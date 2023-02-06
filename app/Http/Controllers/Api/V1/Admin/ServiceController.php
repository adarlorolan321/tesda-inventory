<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StoreServiceRequest;
use App\Http\Requests\Admin\UpdateServiceRequest;
use App\Http\Resources\ServiceResource;
use App\Models\Organisation;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = Auth::user();

        \abort_if(!$user->can('access service'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $perPage = $request->has('perPage') ? $request->input('perPage') : 10;

        $serviceTableName = app(Service::class)->getTable();
        $organisationTableName = app(Organisation::class)->getTable();

        return DB::table('services')
            ->where(function ($query) use ($request, $serviceTableName) {
                $s = $request->input('query');
                $query->when($request->has('query'), function ($query) use (
                    $s,
                    $serviceTableName,
                ) {
                    $query->where($serviceTableName . '.name', 'like', '%' . $s . '%')
                        ->orWhere($serviceTableName . '.code', 'like', '%' . $s . '%')
                        ->orWhere('organisation.name', 'like', '%' . $s . '%');
                });
            })
            ->when($user->hasRole('orgadmin'), function ($query) use ($user) {
                $query->where('organisation_id', $user->organisation_id);
            })
            ->leftJoin(
                $organisationTableName . ' as organisation',
                $serviceTableName . '.organisation_id',
                '=',
                'organisation.id',
            )
            ->select(
                $serviceTableName . '.*',
                'organisation.name as organisation'
            )
            ->orderBy($serviceTableName . '.name', 'ASC')
            ->paginate($perPage);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreServiceRequest $request)
    {
        \abort_if(!\auth()->user()->can('store service'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $service = Service::create($request->validated());

        return (new ServiceResource($service))
            ->response()
            ->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Service $service)
    {
        \abort_if(!\auth()->user()->can('show class'), Response::HTTP_FORBIDDEN, 'Unauthorized');
        return new ServiceResource($service->load(['organisation']));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateServiceRequest $request, Service $service)
    {
        \abort_if(!\auth()->user()->can('update service'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $service->update($request->validated());

        return (new ServiceResource($service))
            ->response()
            ->setStatusCode(202);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Service $service)
    {
        \abort_if(!\auth()->user()->can('destroy service'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $service->delete();

        return response('Service deleted', 204);
    }
}
