<?php

namespace App\Models\Class\Relationship;

use App\Models\Setting\Service;
use App\Models\Setting\Venue;
use App\Models\User;

trait ClassRelationship
{
    public function service(){
        return $this->belongsTo(Service::class,'service_id','id');
    }
    public function venue(){
        return $this->belongsTo(Venue::class);
    }
    public function coach(){
        return $this->belongsTo(User::class);
    }
    public function tags(){
        return $this->belongsTo(T::class);
    }
}
