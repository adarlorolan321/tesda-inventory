<?php

namespace App\Http\Controllers\Page\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Organisation;

class SettingController extends Controller
{
    public function index()
    {
        if (!auth()->user()->can('legal_edit')) {
            return abort(401);
        }
        $organisation = Organisation::find(auth()->user()->organisation_id);

        // dd($organisation);
        return Inertia::render('crud/Organisation/Tabs/Index', [
            'organisation' => $organisation

        ]);
    }
}
