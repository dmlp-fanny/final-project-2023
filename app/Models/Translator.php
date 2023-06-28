<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Translator extends Model
{
    use HasFactory;

    public function translator()
    {
        return $this->belongsTo(User::class);
    }

    public function requests()
    {
        return $this->hasMany(Request::class);
    }

    public function potential_requests()
    {
        return $this->hasMany(Request::class, 'potential_translators');
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    public function languages()
    {
        return $this->belongsToMany(Language::class, '');
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
