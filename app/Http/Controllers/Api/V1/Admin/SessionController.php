<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StoreSessionRequest;
use App\Http\Requests\Admin\UpdateSessionRequest;
use App\Http\Resources\SessionResource;
use App\Models\Session;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class SessionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        \abort_if(!\auth()->user()->can('access service'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $perPage = $request->has('perPage') ? $request->input('perPage') : 10;

        $sessions = Session::with(['coach', 'class'])
            ->where(function ($query) use ($request) {
                if ($request->has('query')) {
                    $s = $request->input('query');

                    $query->where(DB::raw('DATE_FORMAT(session_model.date, "%d/%c/%Y")'), 'like', '%' . $s . '%')
                        ->orWhere(DB::raw('DATE_FORMAT(session_model.start_time, "%h:%i")'), 'like', '%' . $s . '%')
                        ->orWhere(DB::raw('DATE_FORMAT(session_model.end_time, "%h:%i")'), 'like', '%' . $s . '%')
                        ->orWhere('type', 'like', '%' . $s . '%')
                        ->orWhere('additional_coaches', 'like', '%' . $s . '%')
                        ->orWhere('status', $s)
                        ->orWhereHas('coach', function ($query) use ($s) {
                            $query->where('name', 'like', '%' . $s . '%');
                        })
                        ->orWhereHas('class', function ($query) use ($s) {
                            $query->where('name', 'like', '%' . $s . '%');
                        });
                }
            })
            ->paginate($perPage);

        return SessionResource::collection($sessions);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreSessionRequest $request)
    {
        \abort_if(!\auth()->user()->can('store session'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $service = Session::create($request->validated());

        return new response(
            new SessionResource($service),
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
    public function update(UpdateSessionRequest $request, Session $session)
    {
        \abort_if(!\auth()->user()->can('store session'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $session->update($request->validated());

        return new response(
            new SessionResource($session),
            201
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
        \abort_if(!\auth()->user()->can('destroy session'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        Session::destroy($id);

        return new response(
            'session deleted',
            204
        );
    }
}
