<?php

namespace App\Service;

use App\Models\Class\ClassSession;
use Carbon\Carbon;
use http\Env\Request;
use Illuminate\Support\Str;

class ClassSessionService
{
    public static function saveSession($request)
    {
        $session = ClassSession::create([
            'uuid' => Str::uuid(),
            'class_id' => $request['id'],
            'date' => $request['start_date'],
            'type' => 'Regular',
            'start_time' => $request['start_time'],
            'end_time' => $request['start_time'],
            'coach_id' => $request['coach_id'],
            'additional_coaches' => $request['additional_coach'],
            'status' => 'Scheduled'
        ]);
    }
    public static function saveMultipleSession($request)
    {
        $startDate = Carbon::parse($request['start_date']);
        $endDate = Carbon::parse($request['end_date']);
        $days = $request['days'];

        $sessionDates = collect();
        while ($startDate->lte($endDate)) {

            if (in_array($startDate->format('l'), $days)) {
                $sessionDates->push($startDate->format('Y-m-d'));
            }

            $startDate->addDay();
        }

        foreach ($sessionDates as $date) {
            $session = ClassSession::create([
                'uuid' => Str::uuid(),
                'class_id' => $request['id'],
                'date' => $date,
                'type' => 'Regular',
                'start_time' => $request['start_time'],
                'end_time' => $request['start_time'],
                'coach_id' => $request['coach_id'],
                'additional_coaches' => $request['additional_coach'],
                'status' => 'Scheduled'
            ]);
        }
    }

}
