<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
// use Laravel\Fortify\TwoFactorAuthenticatable;
// use Laravel\Jetstream\HasProfilePhoto;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable implements HasMedia
{
    use HasApiTokens;
    use HasFactory;
    use Notifiable;
    use InteractsWithMedia;
    use Notifiable;
    use HasRoles;
    // use HasProfilePhoto;
    // use TwoFactorAuthenticatable;

    protected $dates = ['created_at'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'organisation_id',
        'name',
        'email',
        'password',
        'first_name',
        'last_name',
        'phone',
        'status',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
        'two_factor_recovery_codes',
        'two_factor_secret',
        'roles',
        'media',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'role_name',
        'role',
        'photo_url',
    ];

    public function getRoleNameAttribute()
    {
        return $this->getRoleNames()->implode(', ');;
    }

    public function getRoleAttribute()
    {
        return $this->getRoleNames()->implode(', ');;
    }

    public function organisation()
    {
        return $this->belongsTo(Organisation::class);
    }

    public function organisations()
    {
        return $this->belongsToMany(Organisation::class);
    }

    public function getPhotoUrlAttribute()
    {
        // $media = $this->getMedia('photos')->first();
        // if ($media) {
        //     return $this->getMedia('photos')->first()->getTemporaryUrl(now()->addMinutes(30));
        // }

        $media = $this->getFirstMedia('photos');

        if ($media) {
            return $media->getUrl();
        }

        return null;
    }
}
