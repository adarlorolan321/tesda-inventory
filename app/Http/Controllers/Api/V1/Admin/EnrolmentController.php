<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StoreEnrolmentRequest;
use App\Http\Requests\Admin\UpdateEnrolmentRequest;
use App\Http\Resources\EnrolmentCollection;
use App\Http\Resources\EnrolmentResource;
use App\Models\ClassModel;
use App\Models\Enrolment;
use App\Models\Organisation;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class EnrolmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        \abort_if(!\auth()->user()->can('access enrolment'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $perPage = $request->has('perPage') ? $request->input('perPage') : 10;

        $enrolmentTableName = app(Enrolment::class)->getTable();
        $classTableName = app(ClassModel::class)->getTable();
        $organisationTableName = app(Organisation::class)->getTable();
        $studentTableName = app(Student::class)->getTable();

        return DB::table('enrolments')
            ->where(function ($query) use (
                $request,
                $enrolmentTableName,
                $classTableName,
                $organisationTableName,
                $studentTableName,
            ) {
                $s = $request->input('query');
                $query->when($request->has('query'), function ($query) use (
                    $s,
                    $enrolmentTableName,
                    $classTableName,
                    $organisationTableName,
                    $studentTableName,
                ) {
                    $query->orWhere(
                        DB::raw('DATE_FORMAT(' . $enrolmentTableName  . '.cancel_date, "%d/%c/%Y")'),
                        'LIKE',
                        '%' . $s . '%'
                    )
                        ->orWhere(
                            DB::raw('DATE_FORMAT(' . $enrolmentTableName  . '.cancel_on, "%d/%c/%Y")'),
                            'LIKE',
                            '%' . $s . '%'
                        )
                        ->orWhere($enrolmentTableName . '.payment_status', '=', $s)
                        ->orWhere($enrolmentTableName . '.status', '=', $s)
                        ->orWhere($enrolmentTableName . '.lessons', 'like', '%' . $s . '%')
                        ->orWhere($enrolmentTableName . '.cancel_reason', 'like', '%' . $s . '%')
                        ->orWhere($enrolmentTableName . '.discount_type', 'like', '%' . $s . '%')
                        ->orWhere($enrolmentTableName . '.discount', 'like', '%' . $s . '%')

                        ->orWhere('creator.name', 'like', '%' . $s . '%')
                        ->orWhere('user.name', 'like', '%' . $s . '%')
                        ->orWhere('canceler.name', 'like', '%' . $s . '%')

                        ->orWhere($classTableName . '.name', 'like', '%' . $s . '%')
                        ->orWhere($organisationTableName . '.name', 'like', '%' . $s . '%')
                        ->orWhere(
                            DB::raw(
                                'concat(' . $studentTableName . '.first_name," ",' . $studentTableName . '.last_name)'
                            ),
                            'like',
                            '%' . $s . '%'
                        );
                });
            })
            ->leftJoin('users as creator', $enrolmentTableName . '.created_by', '=', 'creator.id')
            ->leftJoin('users as user', $enrolmentTableName . '.user_id', '=', 'user.id')
            ->leftJoin('users as canceler', $enrolmentTableName . '.cancel_by', '=', 'canceler.id')
            ->leftJoin('users', 'enrolments.user_id', '=', 'users.id')
            ->leftJoin($classTableName, $enrolmentTableName . '.class_id', '=', $classTableName . '.id')
            ->leftJoin($organisationTableName, $enrolmentTableName . '.organisation_id', '=', $organisationTableName . '.id')
            ->leftJoin($studentTableName, $enrolmentTableName . '.student_id', '=', $studentTableName . '.id')
            ->select([
                $enrolmentTableName . '.*',
                'creator.name as creator',
                'user.name as user',
                'canceler.name as canceler',
                $organisationTableName . '.name as organisation',
                $classTableName . '.name as class',
                DB::raw('concat(' . $studentTableName . '.first_name, " ", ' . $studentTableName . '.last_name) as student'),
            ])
            ->orderBy($enrolmentTableName . '.name', 'ASC')
            ->paginate($perPage);

        // return new EnrolmentCollection($enrolments);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreEnrolmentRequest $request)
    {
        \abort_if(!\auth()->user()->can('store enrolment'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $enrolment = Enrolment::create($request->validated());

        return (new EnrolmentResource($enrolment))
            ->response()
            ->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Enrolment $enrolment)
    {
        // dd($enrolment);
        \abort_if(!\auth()->user()->can('show enrolment'), Response::HTTP_FORBIDDEN, 'Unauthorized');
        return new EnrolmentResource($enrolment->load(['creator', 'user', 'canceler', 'class', 'student', 'organisation']));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateEnrolmentRequest $request, Enrolment $enrolment)
    {
        \abort_if(!\auth()->user()->can('update enrolment'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $enrolment->update($request->validated());

        return (new EnrolmentResource($enrolment))
            ->response()
            ->setStatusCode(202);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Enrolment $enrolment)
    {
        \abort_if(!\auth()->user()->can('destroy enrolment'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $enrolment->delete();

        return response('class deleted', 204);
    }
}
