<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StoreStudentRequest;
use App\Http\Requests\Admin\UpdateStudentRequest;
use App\Http\Resources\StudentResource;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        \abort_if(!\auth()->user()->can('access student'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $perPage = $request->has('perPage') ? $request->input('perPage') : 10;

        $students = Student::with(['parents'])
            ->where(function ($query) use ($request) {
                if ($request->has('query')) {
                    $s = $request->input('query');

                    $query->where('first_name', 'like', '%' . $s . '%')
                        ->orWhere('last_name', 'like', '%' . $s . '%')
                        ->orWhere('email', 'like', '%' . $s . '%')
                        ->orWhere('phone', 'like', '%' . $s . '%')
                        ->orWhere('gender', 'like', '%' . $s . '%')
                        ->orWhere(DB::raw('DATE_FORMAT(students.dob, "%d/%m/Y")'), 'like', '%' . $s . '%')
                        ->orWhereHas('parents', function ($query) use ($s) {
                            $query->where('name', 'like', '%' . $s . '%');
                        });
                }
            })
            ->paginate($perPage);

        return StudentResource::collection($students);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreStudentRequest $request, Student $student)
    {
        \abort_if(!\auth()->user()->can('store student'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $student = Student::create($request->validated());

        return (new StudentResource($student))
            ->response()
            ->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Student $student)
    {
        \abort_if(!\auth()->user()->can('show student'), Response::HTTP_FORBIDDEN, 'Unauthorized');
        return new StudentResource($student);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateStudentRequest $request, Student $student)
    {
        \abort_if(!\auth()->user()->can('update student'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $student->update($request->validated());

        return (new StudentResource($student))
            ->response()
            ->setStatusCode(202);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Student $student)
    {
        \abort_if(!\auth()->user()->can('destroy student'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $student->delete();

        return response('student deleted')
            ->setStatusCode(204);
    }
}
