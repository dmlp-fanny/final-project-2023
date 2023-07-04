<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Translator extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function requests()
    {
        return $this->hasMany(Request::class);
    }

    public function potential_requests()
    {
        return $this->belongsToMany(Request::class, 'request_status');
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    public function languages()
    {
        return $this->belongsToMany(Language::class,'language_translator', 'translator_id', 'from_language_id');
    }

    public function fromLanguages()
    {
        return $this->belongsToMany(Language::class, 'language_translator', 'translator_id', 'from_language_id');
    }

    public function toLanguages()
    {
        return $this->belongsToMany(Language::class, 'language_translator', 'translator_id', 'to_language_id');
    }

    public function timeslots()
    {
        return $this->belongsToMany(Timeslot::class);
    }
}
