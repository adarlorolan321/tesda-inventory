<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StoreClassModelRequest;
use App\Http\Requests\Admin\UpdateClassModelRequest;
use App\Http\Resources\ClassModelResource;
use App\Models\ClassModel;
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

        $classes = ClassModel::with([
            'organisation',
            'service',
            'venue',
            'coach',
        ])
            ->where(function ($query) use ($request) {
                if ($request->has('query')) {
                    $s = $request->input('query');

                    $query->where('name', 'like', '%' . $s . '%')
                        ->orWhere(DB::raw('DATE_FORMAT(classes.start_date, "%d/%c/%Y")'), 'LIKE', '%' . $request->input('query') . '%')
                        ->orWhere(DB::raw('DATE_FORMAT(classes.end_date, "%d/%c/%Y")'), 'LIKE', '%' . $request->input('query') . '%')
                        ->orWhere(DB::raw('DATE_FORMAT(classes.start_time, "%h:%i")'), 'LIKE', '%' . $request->input('query') . '%')
                        ->orWhere(DB::raw('DATE_FORMAT(classes.end_time, "%h:%i")'), 'LIKE', '%' . $request->input('query') . '%')
                        ->where('days', 'like', '%' . $s . '%')
                        ->where('repeat', 'like', '%' . $s . '%')
                        ->where('capacity', 'like', '%' . $s . '%')
                        ->where('price_type', 'like', '%' . $s . '%')
                        ->where('price', 'like', '%' . $s . '%')
                        ->where('status', 'like', '%' . $s . '%')
                        ->where('additional_coach', 'like', '%' . $s . '%')
                        ->where('default_email', 'like', '%' . $s . '%')
                        ->where('custom_email_text', 'like', '%' . $s . '%')
                        ->where('custom_email_subject', 'like', '%' . $s . '%')
                        ->where('enrolments', 'like', '%' . $s . '%')
                        ->where('tags', 'like', '%' . $s . '%')
                        ->orWhereHas('coach', function ($query) use ($s) {
                            $query->where('name', 'like', '%' . $s . '%');
                        })
                        ->orWhereHas('venue', function ($query) use ($s) {
                            $query->where('name', 'like', '%' . $s . '%');
                        })
                        ->orWhereHas('service', function ($query) use ($s) {
                            $query->where('name', 'like', '%' . $s . '%');
                        })
                        ->orWhereHas('organisation', function ($query) use ($s) {
                            $query->where('name', 'like', '%' . $s . '%');
                        });
                }
            })
            ->paginate($perPage);

        return ClassModelResource::collection($classes);
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

        return new response(
            new ClassModelResource($class),
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
    public function update(UpdateClassModelRequest $request, ClassModel $class)
    {
        \abort_if(!\auth()->user()->can('store class'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $class->update($request->validated());

        return new response(
            new ClassModelResource($class),
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
        \abort_if(!\auth()->user()->can('update class'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        ClassModel::destroy($id);

        return response('class deleted', 204);
    }
}
