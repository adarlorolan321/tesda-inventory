<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StoreClassModelRequest;
use App\Http\Requests\Admin\UpdateClassModelRequest;
use App\Http\Resources\ClassModelResource;
use App\Models\ClassModel;
use App\Models\Organisation;
use App\Models\Service;
use App\Models\User;
use App\Models\Venue;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class ClassModelController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        \abort_if(!\auth()->user()->can('access class'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $perPage = $request->has('perPage') ? $request->input('perPage') : 10;

        $classTableName = app(ClassModel::class)->getTable();
        $organisationTableName = app(Organisation::class)->getTable();
        $serviceTableName = app(Service::class)->getTable();
        $venueTableName = app(Venue::class)->getTable();

        return DB::table('classes')
            ->where(function ($query) use (
                $request,
                $classTableName,
                $organisationTableName,
                $serviceTableName,
                $venueTableName
            ) {
                $s = $request->input('query');
                $query->when($request->has('query'), function ($query) use (
                    $s,
                    $classTableName,
                    $organisationTableName,
                    $serviceTableName,
                    $venueTableName
                ) {
                    $query->where($classTableName . '.name', 'like', '%' . $s . '%')
                        ->orWhere(
                            DB::raw('DATE_FORMAT(' . $classTableName  . '.start_date, "%d/%c/%Y")'),
                            'LIKE',
                            '%' . $s . '%'
                        )
                        ->orWhere(
                            DB::raw('DATE_FORMAT(' . $classTableName  . '.end_date, "%d/%c/%Y")'),
                            'LIKE',
                            '%' . $s . '%'
                        )
                        ->orWhere(
                            DB::raw('DATE_FORMAT(' . $classTableName  . '.start_time, "%h:%i")'),
                            'LIKE',
                            '%' . $s . '%'
                        )
                        ->orWhere(
                            DB::raw('DATE_FORMAT(' . $classTableName  . '.end_time, "%h:%i")'),
                            'LIKE',
                            '%' . $s . '%'
                        )
                        ->orWhere($classTableName . '.days', 'like', '%' . $s . '%')
                        ->orWhere($classTableName . '.repeat', 'like', '%' . $s . '%')
                        ->orWhere($classTableName . '.capacity', 'like', '%' . $s . '%')
                        ->orWhere($classTableName . '.price_type', 'like', '%' . $s . '%')
                        ->orWhere($classTableName . '.price', 'like', '%' . $s . '%')
                        ->orWhere($classTableName . '.status', $s)
                        ->orWhere($classTableName . '.additional_coach', 'like', '%' . $s . '%')
                        ->orWhere($classTableName . '.default_email', 'like', '%' . $s . '%')
                        ->orWhere($classTableName . '.custom_email_text', 'like', '%' . $s . '%')
                        ->orWhere($classTableName . '.custom_email_subject', 'like', '%' . $s . '%')
                        ->orWhere($classTableName . '.enrolments', 'like', '%' . $s . '%')
                        ->orWhere($classTableName . '.tags', 'like', '%' . $s . '%')
                        ->orWhere($organisationTableName . '.name', 'like', '%' . $s . '%')
                        ->orWhere($serviceTableName . '.name', 'like', '%' . $s . '%')
                        ->orWhere($venueTableName . '.name', 'like', '%' . $s . '%')
                        ->orWhere(DB::raw('concat(coach.first_name, " ", coach.last_name) as full_name'), 'like', '%' . $s . '%');
                });
            })
            ->when($request->has('status') && \in_array($request->input('status'), [
                'active',
            'closed',
            'archive',
            ]), function ($query) use ($request, $classTableName) {
                $query->where($classTableName . '.status', $request->input('status', 'active'));
            })
            ->leftJoin($organisationTableName,  $classTableName . '.organisation_id', '=', $organisationTableName . '.id')
            ->leftJoin($serviceTableName,  $classTableName . '.service_id', '=', $serviceTableName . '.id')
            ->leftJoin($venueTableName,  $classTableName . '.venue_id', '=', $venueTableName . '.id')
            ->leftJoin('users as coach',  $classTableName . '.coach_id', '=', 'coach.id')
            ->select([
                $classTableName . '.*',
                $organisationTableName . '.name as organisation',
                $serviceTableName . '.name as service',
                $venueTableName . '.name as venue',
                DB::raw('concat(coach.first_name, " ", coach.last_name) as coach'),
            ])
            ->orderBy($classTableName . '.name', 'ASC')
            ->paginate($perPage);

        // return ClassModelResource::collection($classes);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreClassModelRequest $request)
    {
        \abort_if(!\auth()->user()->can('store class'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $class = ClassModel::create($request->validated());

        return (new ClassModelResource($class))
            ->response()
            ->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(ClassModel $class)
    {
        \abort_if(!\auth()->user()->can('show class'), Response::HTTP_FORBIDDEN, 'Unauthorized');
        return new ClassModelResource($class->load(['organisation', 'service', 'venue', 'coach',]));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateClassModelRequest $request, ClassModel $class)
    {
        \abort_if(!\auth()->user()->can('store class'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $class->update($request->validated());

        return (new ClassModelResource($class))
            ->response()
            ->setStatusCode(202);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(ClassModel $class)
    {
        \abort_if(!\auth()->user()->can('update class'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $class->delete();

        return response('class deleted', 204);
    }
}
