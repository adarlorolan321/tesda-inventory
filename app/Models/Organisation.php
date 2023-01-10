<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Organisation extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $hidden = ['media'];


    protected $appends = [
        'photo'
    ];

    protected $fillable = [
        'name',
        'abn',
        'street_address',
        'street_address_2',
        'suburb',
        'postcode',
        'state',
        'country',
        'phone',
        'email',
        'privacy_link',
        'stripe_key',
        'stripe_secret',
        'terms_link',
        'from_name',
        'reply_to_email',
        'signature',
        'is_smtp',
        'from_email',
        'smtp_host',
        'smtp_username',
        'smtp_password',
        'smtp_port',
        'smtp_security',
        'twilio_secret_id',
        'sms_from',
        'twilio_auth_token',
        'primary_user',
    ];

    public function getPhotoAttribute()
    {
        $media = $this->getFirstMedia('photo');
        if ($media) {
            return $media->getUrl();
        }
        return null;
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('photo');
    }

    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion('thumbnail')
            ->width(1000)
            ->height(250);
    }

    public function services()
    {
        return $this->hasMany(Service::class);
    }

    public function venues()
    {
        return $this->hasMany(Venue::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}
