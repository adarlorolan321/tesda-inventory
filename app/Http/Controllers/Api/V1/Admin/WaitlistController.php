<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StoreWaitlistRequest;
use App\Http\Requests\Admin\UpdateWaitlistRequest;
use App\Http\Resources\WaitlistResource;
use App\Models\ClassModel;
use App\Models\Organisation;
use App\Models\Student;
use App\Models\Waitlist;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class WaitlistController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        \abort_if(!auth()->user()->can('access waitlist'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $perPage = $request->has('perPage') ? $request->input('perPage') : 10;


        $classTableName = app(ClassModel::class)->getTable();
        $organisationTableName = app(Organisation::class)->getTable();
        $studentTableName = app(Student::class)->getTable();
        $waitlistTableName = app(Waitlist::class)->getTable();

        return DB::table('waitlists')
            ->where(function ($query) use (
                $request,
                $classTableName,
                $organisationTableName,
                $studentTableName,
            ) {
                $s = $request->input('query');
                $query->when($request->has('query'), function ($query) use (
                    $s,
                    $classTableName,
                    $organisationTableName,
                    $studentTableName,
                ) {
                    $query->where('status', '=', $s)
                        ->orWhere($classTableName . '.name', 'LIKE', '%' . $s . '%')
                        ->orWhere($organisationTableName . '.name', 'LIKE', '%' . $s . '%')
                        ->orWhere(DB::raw(
                            'concat(' .
                                $studentTableName . '.first_name, " ",'
                                . $studentTableName . '.last_name) as full_name'
                        ), 'LIKE', '%' . $s . '%')
                        ->orWhere('users.name', 'LIKE', '%' . $s . '%');
                });
            })
            ->leftJoin($classTableName,  $waitlistTableName . '.class_id', '=', $classTableName . '.id')
            ->leftJoin($organisationTableName,  $waitlistTableName . '.organisation_id', '=', $organisationTableName . '.id')
            ->leftJoin($studentTableName,  $waitlistTableName . '.student_id', '=', $studentTableName . '.id')
            ->leftJoin('users',  $waitlistTableName . '.user_id', '=', 'users.id')
            ->select([
                $waitlistTableName . '.*',
                $classTableName . '.name as class',
                $organisationTableName . '.name as organisation',
                DB::raw('concat(
                    ' . $studentTableName . '.first_name, " ",' .
                    $studentTableName . '.last_name)' . ' as student'),
                'users.name as user',
            ])
            ->orderBy($waitlistTableName . '.created_at', 'DESC')
            ->paginate($perPage);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreWaitlistRequest $request)
    {
        \abort_if(!auth()->user()->can('store waitlist'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $waitlist = Waitlist::create($request->validated());

        return (new WaitlistResource($waitlist))
            ->response()
            ->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Waitlist $waitlist)
    {
        \abort_if(!auth()->user()->can('show waitlist'), Response::HTTP_FORBIDDEN, 'Unauthorized');
        return new WaitlistResource($waitlist->load(['class', 'user', 'student', 'organisation',]));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateWaitlistRequest $request, Waitlist $waitlist)
    {
        \abort_if(!auth()->user()->can('update waitlist'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $waitlist->update($request->validated());

        return (new WaitlistResource($waitlist))
            ->response()
            ->setStatusCode(202);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Waitlist $waitlist)
    {
        \abort_if(!auth()->user()->can('update waitlist'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $waitlist->delete();

        return response('waitlist deleted', 204);
    }
}
