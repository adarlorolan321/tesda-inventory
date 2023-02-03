<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StoreMerchandiseRequest;
use App\Http\Requests\Admin\UpdateMerchandiseRequest;
use App\Http\Resources\MerchandiseResource;
use App\Models\Merchandise;
use App\Models\Organisation;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;

class MerchandiseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        \abort_if(!auth()->user()->can('access merchandise'), Response::HTTP_FORBIDDEN, 'Unathorized');

        $perPage = $request->has('perPage') ? $request->input('perPage') : 10;

        $merchandiseTableName = app(Merchandise::class)->getTable();
        $organisationTableName = app(Organisation::class)->getTable();

        return DB::table($merchandiseTableName)
            ->where(function ($query) use (
                $request,
                $merchandiseTableName,
                $organisationTableName
            ) {
                $s = $request->input('query');
                $query->when($request->has('query'), function ($query) use (
                    $s,
                    $merchandiseTableName,
                    $organisationTableName
                ) {
                    $query->where($merchandiseTableName . '.name', 'like', '%' . $s . '%')
                        ->orWhere($merchandiseTableName . '.description', 'like', '%' . $s . '%')
                        ->orWhere($merchandiseTableName . '.quantity', 'like', '%' . $s . '%')
                        ->orWhere($organisationTableName . '.name', 'like', '%' . $s . '%');
                });
            })
            ->leftJoin(
                $organisationTableName . ' as organisation',
                $merchandiseTableName . '.organisation_id',
                '=',
                'organisation.id'
            )->select([
                $merchandiseTableName . '.*',
                'organisation.name as organisation',
            ])
            ->orderBy($merchandiseTableName . '.name', 'ASC')
            ->paginate($perPage);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreMerchandiseRequest $request)
    {
        \abort_if(!auth()->user()->can('store merchandise'), Response::HTTP_FORBIDDEN, 'Unathorized');

        $merchandise = Merchandise::create($request->validated());

        return (new MerchandiseResource($merchandise))
            ->response()
            ->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Merchandise $merchandise)
    {
        \abort_if(!auth()->user()->can('show merchandise'), Response::HTTP_FORBIDDEN, 'Unathorized');
        return new MerchandiseResource($merchandise->load(['organisation']));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  App\Models\Merchandise $merchandise
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateMerchandiseRequest $request, Merchandise $merchandise)
    {
        \abort_if(!auth()->user()->can('update merchandise'), Response::HTTP_FORBIDDEN, 'Unathorized');

        $merchandise->update($request->validated());

        return (new MerchandiseResource($merchandise))
            ->response()
            ->setStatusCode(202);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Merchandise $merchandise)
    {
        \abort_if(!auth()->user()->can('destroy merchandise'), Response::HTTP_FORBIDDEN, 'Unathorized');
        $merchandise->delete();
        return response('merchandise deleted', 204);
    }
}
