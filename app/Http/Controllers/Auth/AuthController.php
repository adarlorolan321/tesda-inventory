<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function reset(Request $request) {
        $validated = $request->validate([
            'password' => 'required',
            'password_confirmation' => 'same:password'
        ]);

        return redirect()->back();
    }
}
