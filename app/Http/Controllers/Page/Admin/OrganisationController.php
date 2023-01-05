<?php

namespace App\Http\Controllers\Page\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Organisation;

class OrganisationController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('crud/Organisation/Index');
    }

    public function create()
    {
        return Inertia::render('crud/Organisation/Create');
    }

    public function edit($id)
    {
        $organisation = Organisation::find($id);
        return Inertia::render('crud/Organisation/Edit', [
            'organisation' => $organisation,
        ]);
    }

    public function show($id)
    {
        $organisation = Organisation::find($id);
        return Inertia::render('crud/Organisation/Show', [
            'organisation' => $organisation,
        ]);
    }
}
