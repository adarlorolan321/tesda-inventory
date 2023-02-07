<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StoreVenueRequest;
use App\Http\Requests\Admin\UpdateVenueRequest;
use App\Http\Resources\VenueResource;
use App\Models\Organisation;
use App\Models\Venue;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class VenueController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = Auth::user();

        \abort_if(!$user->can('access venue'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $perPage = $request->has('perPage') ? $request->input('perPage') : 10;

        $venueTableName = app(Venue::class)->getTable();
        $organisationTableName = app(Organisation::class)->getTable();

        return DB::table('venues')
            ->where(function ($query) use ($request, $venueTableName, $organisationTableName) {
                $s = $request->input('query');
                $query->when($request->has('query'), function ($query) use (
                    $s,
                    $venueTableName,
                    $organisationTableName
                ) {
                    $query->where($venueTableName . '.name', 'like', '%' . $s . '%')
                        ->orWhere($venueTableName . '.contact_first_name', 'like', '%' . $s . '%')
                        ->orWhere($venueTableName . '.contact_last_name', 'like', '%' . $s . '%')
                        ->orWhere($venueTableName . '.contact_email', 'like', '%' . $s . '%')
                        ->orWhere($venueTableName . '.contact_phone', 'like', '%' . $s . '%')
                        ->orWhere(
                            DB::raw("CASE WHEN " .
                                $venueTableName . ".status = 1 THEN 'active' WHEN " .
                                $venueTableName . ".status = 0 THEN 'inactive' END"),
                            'like',
                            '%' . $s . '%'
                        )
                        ->orWhere('organisation.name', 'like', '%' . $s . '%');
                });
            })
            ->when($user->hasRole('orgadmin'), function ($query) use ($user) {
                $query->where('organisation_id', $user->organisation_id);
            })
            ->leftJoin(
                $organisationTableName . ' as organisation',
                $venueTableName . '.organisation_id',
                '=',
                'organisation.id',
            )
            ->select(
                $venueTableName . '.*',
                'organisation.name as organisation'
            )
            ->orderBy($venueTableName . '.name', 'ASC')
            ->paginate($perPage);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreVenueRequest $request)
    {
        \abort_if(!\auth()->user()->can('store venue'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $venue = Venue::create($request->validated());

        return (new VenueResource($venue))
            ->response()
            ->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Venue $venue)
    {
        $otherOrganisation = auth()->user()->hasRole('orgadmin') ?
            auth()->user()->organisation_id == $venue->organisation_id
            : true;

        \abort_if(
            !auth()->user()->can('show venue') ||
                !$otherOrganisation,
            Response::HTTP_FORBIDDEN,
            'Unauthorized'
        );

        return new VenueResource($venue->load(['organisation']));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateVenueRequest $request, Venue $venue)
    {
        \abort_if(!\auth()->user()->can('update venue'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $venue->update($request->validated());

        return (new VenueResource($venue))
            ->response()
            ->setStatusCode(202);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Venue $venue)
    {
        $otherOrganisation = auth()->user()->hasRole('orgadmin') ?
            auth()->user()->organisation_id == $venue->organisation_id
            : true;

        \abort_if(
            !auth()->user()->can('destroy venue') ||
                !$otherOrganisation,
            Response::HTTP_FORBIDDEN,
            'Unauthorized'
        );

        $venue->delete();

        return response('venue deleted', 204);
    }
}
