<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StoreVenueRequest;
use App\Http\Requests\Admin\UpdateVenueRequest;
use App\Http\Resources\VenueResource;
use App\Models\Venue;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
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
        \abort_if(!\auth()->user()->can('access venue'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $perPage = $request->has('perPage') ? $request->input('perPage') : 10;

        $venues = Venue::with(['organisation'])
            ->where(function ($query) use ($request) {
                if ($request->has('query')) {
                    $s = $request->input('query');

                    $query->where('name', 'like', '%' . $s . '%')
                        ->orWhere('contact_first_name', 'like', '%' . $s . '%')
                        ->orWhere('contact_last_name', 'like', '%' . $s . '%')
                        ->orWhere('contact_email', 'like', '%' . $s . '%')
                        ->orWhere('contact_phone', 'like', '%' . $s . '%')
                        ->orWhere(DB::raw("CASE WHEN status = 1 THEN 'active' WHEN status = 0 THEN 'in-active' END"), 'like', '%' . $s . '%')
                        ->orWhereHas('organisation', function ($query) use ($s) {
                            $query->where('name', 'like', '%' . $s . '%');
                        });
                }
            })
            ->paginate($perPage);

        return VenueResource::collection($venues);
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

        return new response(
            new VenueResource($venue),
            201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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

        return new response(
            new VenueResource($venue),
            202
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        \abort_if(!\auth()->user()->can('destroy venue'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        Venue::destroy($id);

        return new response('venue deleted', 204);
    }
}
