<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\Organisation as OrganisationResource;
use App\Models\Organisation;
use App\Http\Requests\Admin\StoreorganisationRequest;
use Illuminate\Http\Response;

class SettingController extends Controller
{
    public function index(Request $request)
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

    public function update(UpdateorganisationRequest $request, $id)
    {
        $organisation = Organisation::findOrFail($id);
        $organisation->update($request->validated());

        if ($request->hasFile('image')) {
            $organisation->clearMediaCollection('photo');
            $organisation->addMedia($request->file('image'))->toMediaCollection('photo');
        }

        return (new OrganisationResource($organisation))->response()->setStatusCode(202);
    }
}


}
