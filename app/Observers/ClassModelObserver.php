<?php

namespace App\Observers;

use App\Models\ClassModel;
use App\Models\Session;
use Carbon\Carbon;
use Illuminate\Support\Str;

class ClassModelObserver
{
    /**
     * Handle the ClassModel "creating" event.
     *
     * @param  \App\Models\ClassModel  $classModel
     * @return void
     */
    public function creating(ClassModel $class)
    {
        $class->uuid = Str::uuid();
    }

    /**
     * Handle the ClassModel "created" event.
     *
     * @param  \App\Models\ClassModel  $classModel
     * @return void
     */
    public function created(ClassModel $class)
    {
        if (!$class->repeat) {
            Session::create([
                'class_id' => $class->id,
                'date' => $class->start_date,
                // 'type' => ,
                'start_time' => $class->start_time,
                'end_time' => $class->end_time,
                'coach_id' => $class->coach_id,
                'additional_coaches' => $class->additional_coach,
                'status' => 'active',
            ]);
        } else {
            $next_date = Carbon::parse($class->start_date)->addWeek();
        }
    }

    /**
     * Handle the ClassModel "updated" event.
     *
     * @param  \App\Models\ClassModel  $class
     * @return void
     */
    public function updated(ClassModel $class)
    {
        //
    }

    /**
     * Handle the ClassModel "deleted" event.
     *
     * @param  \App\Models\ClassModel  $class
     * @return void
     */
    public function deleted(ClassModel $class)
    {
        //
    }

    /**
     * Handle the ClassModel "restored" event.
     *
     * @param  \App\Models\ClassModel  $class
     * @return void
     */
    public function restored(ClassModel $class)
    {
        //
    }

    /**
     * Handle the ClassModel "force deleted" event.
     *
     * @param  \App\Models\ClassModel  $class
     * @return void
     */
    public function forceDeleted(ClassModel $class)
    {
        //
    }
}
