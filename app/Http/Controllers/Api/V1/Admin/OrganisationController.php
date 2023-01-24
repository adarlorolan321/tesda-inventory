<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\Organisation as OrganisationResource;
use App\Models\Organisation;
use App\Http\Requests\Admin\StoreorganisationRequest;
use App\Http\Requests\Admin\UpdateorganisationRequest;
use Illuminate\Http\Response;

class OrganisationController extends Controller
{
    public function index(Request $request)
    {
        if (!auth()->user()->can('access organisation')) return abort(401);

        $perPage = $request->has('perPage') ? $request->input('perPage') : 10;

        $ogranisations = Organisation::with([])
            ->where(function ($query) use ($request) {
                if ($request->has('query')) {
                    $query_string = $request->input('query');
                    $query->where('abn', 'like', '%' . $query_string . '%');
                    // ->orWhere('size', 'like', '%' . $query_string . '%')
                    // ->orWhere('gender', 'like', '%' . $query_string . '%')
                    // ->orWhere('weeks_to_go', 'like', '%' . $query_string . '%')
                    // ->orWhere('description', 'like', '%' . $query_string . '%');
                }
            })
            ->orderBy('name', 'ASC')
            ->paginate($perPage);

        return new OrganisationResource($ogranisations);
    }

    public function store(StoreorganisationRequest $request)
    {

        if (!auth()->user()->can('create organisation')) {
            return abort(401);
        }
        $validated = $request->validated();
        $Organisation = Organisation::create($validated);

        if ($request->hasFile('image'))
            $Organisation->addMedia($request->file('image'))->toMediaCollection('photo');

        return (new OrganisationResource($Organisation))->response()->setStatusCode(201);

        // $store = Organisation::create($request->validated());
        // return (new OrganisationResource($store))
        //     ->response()
        //     ->setStatusCode(201);
    }

    public function destroy(Organisation $organisation)
    {
        if (!auth()->user()->can('delete organisation')) return abort(401);

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

    public function show(Organisation $organisation)
    {
        if (!auth()->user()->can('view organisation')) {
            return abort(401);
        }

        return new OrganisationResource($organisation);
    }

    public function update(UpdateorganisationRequest $request, Organisation $organisation)
    {
        $organisation->update($request->validated());

        if ($request->hasFile('image')) {
            $organisation->clearMediaCollection('photo');
            $organisation->addMedia($request->file('image'))->toMediaCollection('photo');
        }

        return (new OrganisationResource($organisation))->response()->setStatusCode(202);
    }
}
