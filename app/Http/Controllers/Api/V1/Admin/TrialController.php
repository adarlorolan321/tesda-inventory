<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StoreTrialRequest;
use App\Http\Requests\Admin\UpdateTrialRequest;
use App\Http\Resources\TrialResource;
use App\Models\ClassModel;
use App\Models\Organisation;
use App\Models\Session;
use App\Models\Student;
use App\Models\Trial;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class TrialController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        \abort_if(!auth()->user()->can('access trial'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $perPage = $request->has('perPage') ? $request->input('perPage') : 10;

        $trialTableName = app(Trial::class)->getTable();
        $classTableName = app(ClassModel::class)->getTable();
        $studentTableName = app(Student::class)->getTable();
        $organisationTableName = app(Organisation::class)->getTable();
        $sessionTableName = app(Session::class)->getTable();

        return DB::table('trials')
            ->where(function ($query) use ($request, $trialTableName,) {
                $s = $request->input('query');
                $query->when($request->has('query'), function ($query) use (
                    $s,
                    $trialTableName,
                ) {
                    $query->where($trialTableName . '.status', '=', $s)
                        ->orWhere(DB::raw('concat(user.first_name, " ", user.last_name)'), 'like', '%' . $s . '%')
                        ->orWhere(DB::raw('concat(student.first_name, " ", student.last_name)'), 'like', '%' . $s . '%')
                        ->orWhere('class.name', 'like', '%' . $s . '%')
                        ->orWhere('organisation.name',  'like', '%' . $s . '%');
                });
            })
            ->leftJoin('users as user', $trialTableName . '.user_id', '=', 'user.id')
            ->leftJoin($classTableName . ' as class', $trialTableName . '.class_id', '=', 'class.id')
            ->leftJoin($studentTableName . ' as student', $trialTableName . '.student_id', '=', 'student.id')
            ->leftJoin($organisationTableName . ' as organisation', $trialTableName . '.organisation_id', '=', 'organisation.id')
            ->leftJoin($sessionTableName . ' as lesson', $trialTableName . '.lesson_id', '=', 'lesson.id')
            ->select([
                $trialTableName . '.*',
                'class.name as class',
                DB::raw('concat(user.first_name, " ", user.last_name) as user'),
                DB::raw('concat(student.first_name, " ", student.last_name) as student'),
                'organisation.name as organisation',
                'lesson.uuid as lesson',
            ])
            ->orderBy(DB::raw('concat(user.first_name , " ", user.last_name)'), 'ASC')
            ->paginate($perPage);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreTrialRequest $request)
    {
        \abort_if(!auth()->user()->can('store trial'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $trial = Trial::create($request->validated());

        return (new TrialResource($trial))
            ->response()
            ->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Trial $trial)
    {
        \abort_if(!auth()->user()->can('show trial'), Response::HTTP_FORBIDDEN, 'Unauthorized');
        return new TrialResource($trial->load([
            'class',
            'user',
            'student',
            'organisation',
            'lesson',
        ]));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateTrialRequest $request, Trial $trial)
    {
        \abort_if(!auth()->user()->can('update trial'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $trial = Trial::create($request->validated());

        return (new TrialResource($trial))
            ->response()
            ->setStatusCode(202);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Trial $trial)
    {
        \abort_if(!auth()->user()->can('destroy trial'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $trial->delete();

        return response('trial deleted', 204);
    }
}
