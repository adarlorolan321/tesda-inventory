<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use League\Config\Exception\ValidationException;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\User\PasswordUpdateRequest;

class PasswordUpdateController extends Controller
{
    public function __invoke(Request $request)
        {
            $user = Auth::user();

            $validator = Validator::make($request->all(), [
                'current_password' => 'required',
                'password' => 'required|string|min:8|confirmed',
                'password_confirmation' => 'required|same:password',
            ]);

            if ($validator->fails()) {
                return redirect()->back()->withErrors($validator);
            }

            if (!password_verify($request->input('current_password'), $user->password)) {
                $validator = Validator::make([], []);
                $validator->errors()->add('current_password', 'The provided password does not match your current password.');
                return redirect()->back()->withErrors($validator);
            }

            $user->password = bcrypt($request->input('password'));
            $user->save();
            return redirect()->back();
        }

}
