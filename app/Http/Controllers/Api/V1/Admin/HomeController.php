<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Carbon\Carbon;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;


class HomeController extends Controller
{
    public function index()
    {
        $currentDateTime = Carbon::now();
        $prevDateTime = Carbon::now()->subMonth(11);

        $total_users = User::whereHas('roles', function ($role) {
            $role->where('name', '=', 'Customer');
        })->count();

        $user_registrations = User::select(DB::raw('DATE_FORMAT(created_at,"%M" ) as month,DATE_FORMAT(created_at,"%Y" ) as year, count(id) as total'))
            ->whereBetween('created_at', [$prevDateTime, $currentDateTime])
            ->groupBy('month')
            ->orderBy('year')
            ->pluck('total', 'month')
            ->all();




        return Inertia::render('Dashboard', [
            'total_users' => $total_users,
            'user_registrations' => $user_registrations,
        ]);
    }
}
