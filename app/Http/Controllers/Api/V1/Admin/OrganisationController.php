<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\Organisation as OrganisationResource;
use App\Models\Organisation;
use App\Http\Requests\Admin\StoreorganisationRequest;
use App\Http\Requests\Admin\UpdateorganisationRequest;
use App\Models\EmailTemplate;
use App\Models\Service;
use App\Models\User;
use App\Models\Venue;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;

class OrganisationController extends Controller
{
    public function index(Request $request)
    {
        \abort_if(!auth()->user()->can('access organisation'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $columns = ['name', 'email', 'abn', 'address',];
        $directions = ['asc', 'desc',];

        $perPage = $request->has('perPage') ? $request->input('perPage') : 10;
        $sortBy = 'name';
        $sortDirection = 'asc';

        if ($request->has('sortBy')) {
            if (\in_array($request->input('sortBy'), $columns)) {
                $sortBy = $request->input('sortBy');
            }
        }

        if ($request->has('sortDirection')) {
            if (\in_array($request->input('sortDirection'), $directions)) {
                $sortDirection = $request->input('sortDirection');
            }
        }

        // $organisationTableName = app(Organisation::class)->getTable();
        // $serviceTableName = app(Service::class)->getTable();
        // $venueTableName = app(Venue::class)->getTable();
        // $emailTemplateTableName = app(EmailTemplate::class)->getTable();

        // return DB::table($organisationTableName)
        // ->where(function($query) use(
        //     $request,
        //     $serviceTableName,
        //     $venueTableName,
        //     $emailTemplateTableName,
        // ){
        //     $s = $request->input('query');

        //     $query->when($request->has('query'), function($query) use(
        //         $s,
        //         $serviceTableName,
        //         $venueTableName,
        //         $emailTemplateTableName,
        //     ){
        //         $query->where($organisationTableName . '.name', 'like', '%' . $s . '%')
        //         ->orWhere($organisationTableName . '.primary_user', 'like', '%' . $s . '%')
        //         ->orWhere($organisationTableName . '.abn', 'like', '%' . $s . '%')
        //         ->orWhere($organisationTableName . '.street_address', 'like', '%' . $s . '%')
        //         ->orWhere($organisationTableName . '.street_address_2', 'like', '%' . $s . '%')
        //         ->orWhere($organisationTableName . '.suburb', 'like', '%' . $s . '%')
        //         ->orWhere($organisationTableName . '.postcode', 'like', '%' . $s . '%')
        //         ->orWhere($organisationTableName . '.state', 'like', '%' . $s . '%');
        //     });
        // })
        // ->leftJoin($serviceTableName . ' as service')

        $organisations = Organisation::with([])
            ->where(function ($query) use ($request) {
                if ($request->has('query')) {
                    $query_string = $request->input('query');
                    $query->where('abn', 'like', '%' . $query_string . '%')
                        ->orWhere('abn', 'like', '%' . $query_string . '%')
                        ->orWhere('street_address', 'like', '%' . $query_string . '%')
                        ->orWhere('street_address_2', 'like', '%' . $query_string . '%')
                        ->orWhere('suburb', 'like', '%' . $query_string . '%')
                        ->orWhere('postcode', 'like', '%' . $query_string . '%')
                        ->orWhere('state', 'like', '%' . $query_string . '%');
                }
            })
            ->orderBy($sortBy, $sortDirection)
            ->paginate($perPage);

        return new OrganisationResource($organisations);
    }

    public function store(StoreOrganisationRequest $request)
    {
        \abort_if(!auth()->user()->can('store organisation'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $organisation = Organisation::create($request->validated());

        if ($request->hasFile('image')) {
            $organisation->addMedia($request->file('image'))->toMediaCollection('images');
        }

        return (new OrganisationResource(
            $organisation
            // ->load([
            //     'services',
            //     'venues',
            //     'users',
            //     'email_templates',
            // ])
        ))
            ->response()
            ->setStatusCode(201);
    }

    public function show(Organisation $organisation)
    {
        \abort_if(!auth()->user()->can('show organisation'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        if (Auth::user()->hasRole('orgadmin')) {
            \abort_if($organisation->id != Auth::user()->organisation_id, Response::HTTP_FORBIDDEN, 'Unauthorized');
        }

        return new OrganisationResource($organisation->load([
            'services',
            'venues',
            'users',
            'email_templates',
        ]));
    }

    public function update(UpdateorganisationRequest $request, Organisation $organisation)
    {
        \abort_if(!auth()->user()->can('update organisation'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        if (Auth::user()->hasRole('orgadmin')) {
            \abort_if($organisation->id != Auth::user()->organisation_id, Response::HTTP_FORBIDDEN, 'Unauthorized');
        }

        $organisation->update($request->validated());

        if ($request->hasFile('logo')) {
            $organisation->clearMediaCollection('logos');
            $organisation->addMedia(request()->file('logo'))->toMediaCollection('logos');
        }

        return (new OrganisationResource($organisation->load([
            'services',
            'venues',
            'users',
            'email_templates',
        ])))
            ->response()
            ->setStatusCode(202);
    }

    public function destroy(Organisation $organisation)
    {
        \abort_if(!auth()->user()->can('destroy organisation'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $organisation->delete();

        return response('Organisation Deleted', 204);
    }

    public function updateLegalInfo(Request $request)
    {
        abort_if(Gate::denies('legal_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $organisation = Organisation::find($request->input('id'));

        $organisation->update($request->validate([
            'terms' => 'string|nullable',
            'privacy' => 'string|nullable'
        ]));

        return (new OrganisationResource($organisation))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function getAuthData()
    {
        $organisation = Organisation::find(auth()->user()->organisation_id);
        return (new OrganisationResource($organisation))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }
}
