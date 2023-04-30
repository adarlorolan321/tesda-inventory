<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class ProfileController extends Controller
{
    public function index()
    {
        $user = User::where('id', auth()->user()->id)->first();
        return Inertia::render('Admin/account-settings/Account', ['user' => $user]);
    }

    public function changePasswordIndex()
    {
        return Inertia::render('Admin/account-settings/Security');
    }

    public function changePassword(Request $request)
    {
        $user = Auth::user();
    
        $validator = Validator::make($request->all(), [
            'current_password' => 'required',
            'password' => 'required|string|min:8|confirmed',
            'password_confirmation' => 'required|same:password',
        ]);
    
        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => $validator->errors(),
            ], 422);
        }
    
        if (!password_verify($request->input('current_password'), $user->password)) {
            $validator = Validator::make([], []);
            $validator->errors()->add('current_password', 'The provided password does not match your current password.');
            return response()->json([
                'status' => 'error',
                'message' => $validator->errors(),
            ], 422);
        }
    
        $user->password = bcrypt($request->input('password'));
        $user->save();
    
        return response()->json([
            'status' => 'success',
            'message' => 'Password changed successfully!',
        ], 200);
    }
    
}
