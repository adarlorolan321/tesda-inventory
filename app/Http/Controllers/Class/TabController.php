<?php

namespace App\Http\Controllers\Class;

use App\Http\Controllers\Controller;
use App\Http\Resources\Class\ClassListResource;
use App\Models\Class\ClassModel;
use App\Models\Setting\Service;
use App\Models\Setting\Venue;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TabController extends Controller
{

    public function sessions(Request $request,$id){
        $data = ClassModel::with(['venue','coach'])->findOrFail($id);
        if ($request->wantsJson()) {
            return new ClassListResource($data);
        }

        $request = request()->merge(['class_id' => $id]);
        $data['additional_coach_name'] = User::whereIn('id',$data['additional_coach'])->get(['id','name'])->makeHidden(['profile_photo','profile_photo_url','role'])->pluck('name');

        return Inertia::render('Admin/Class/Show', [
            'classModel' => $data,
            'data' => (new ClassSessionController)->index($request,true)['data'],
            'coaches' => User::whereHas('roles', function ($query) {
                $query->where('name', 'Coach');
            })
                ->orderBy('name','ASC')
                ->get(['id', 'name'])
                ->map(function ($parent) {
                    return [
                        'id' => $parent->id,
                        'text' => $parent->name
                    ];
                })
        ]);
    }
    public function update(Request $request, $id){
        $data = ClassModel::with(['venue','coach'])->findOrFail($id);
        if ($request->wantsJson()) {
            return new ClassListResource($data);
        }

        $request = request()->merge(['class_id' => $id]);
        $data['additional_coach_name'] = User::whereIn('id',$data['additional_coach'])->get(['id','name'])->makeHidden(['profile_photo','profile_photo_url','role'])->pluck('name');

        if ($request->wantsJson()) {
            return new ClassListResource($data);
        }
        return Inertia::render('Admin/Class/Show', [
            'classModel' => $data,
            'services' => Service::orderBy('name','ASC')->get(['id', 'name'])
                ->map(function ($parent) {
                    return [
                        'id' => $parent->id,
                        'text' => $parent->name
                    ];
                }),
            'venues' => Venue::where('status', 1)->orderBy('name','ASC')->get(['id', 'name'])
                ->map(function ($parent) {
                    return [
                        'id' => $parent->id,
                        'text' => $parent->name
                    ];
                }),
            'coaches' => User::whereHas('roles', function ($query) {
                $query->where('name', 'Coach');
            })
                ->orderBy('name','ASC')
                ->get(['id', 'name'])
                ->map(function ($parent) {
                    return [
                        'id' => $parent->id,
                        'text' => $parent->name
                    ];
                })
        ]);
    }
}
