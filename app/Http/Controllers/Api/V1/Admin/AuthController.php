<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;
use App\Mail\ForgetPasswordNotification;
use App\Models\Client;
use App\Models\Organisation;

class AuthController extends Controller
{

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|exists:users,email',
            'password' => 'required',
            'token_name' => 'required',
        ]);

        if ($request->input('token_name') == 'wyac_mobile_token') {
            $user = User::where('email', $request->email)->first();
            if (!$user) {
                throw ValidationException::withMessages(['email' => "Invalid credentials."]);
            }

            if (Hash::check($request->input('password'), $user->password)) {
                $token = $user->createToken($request->token_name);
                $user->token = $token->plainTextToken;
                return new UserResource($user);
            } else {
                throw ValidationException::withMessages(['password' => "Email and password do not match."]);
            }
        }
        return response('Authentication Failed', 401);
    }

    public function forget_password(Request $request)
    {
        $request->validate([
            'email' => 'required|exists:users,email'
        ]);
        $password = Str::random(8);
        $user = User::where('email', $request->email)->first();
        $user->password = bcrypt($password);
        $user->save();
        // Mail::to($user->email)->queue(new ForgetPasswordNotification($user, $password));
        return response('We have email your new password.', 201);
    }

    public function change_password(Request $request)
    {
        $request->validate([
            'old_password' => 'required|string',
            'password' => 'required|confirmed|string|min:8|max:255',
        ]);
        $user = User::find(auth()->user()->id);
        if ($user) {
            if (Hash::check($request->input('old_password'), $user->password)) {
                $user->password = bcrypt($request->input('password'));
                $user->save();
                return response('Password is changed successfully', 201);
            } else {
                throw ValidationException::withMessages(['old_password' => "Current password do not match our record."]);
            }
        } else {
            throw ValidationException::withMessages(['credentials' => "Token not found."]);
        }
    }

    public function register(Request $request)
    {
        $request->validate([
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|unique:users,email',
            'password' => 'required|min:4|max:256',
        ]);
        $user = User::create([
            'first_name' => $request->input('first_name'),
            'last_name' => $request->input('last_name'),
            'name' => ucfirst($request->input('first_name')) . ' ' . ucfirst($request->input('last_name')),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
        ]);

        $user->assignRole('client');

        $token = $user->createToken('wyac_mobile_token');
        $user->token = $token->plainTextToken;

        return new UserResource($user);
    }
}
