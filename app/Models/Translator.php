<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Translator extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'experience'
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
        return $this->hasMany(RequestStatus::class);
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    public function languages()
    {
        return $this->belongsToMany(Language::class, 'language_translator', 'translator_id', 'from_language_id');
    }

    public function timeslots()
    {
        return $this->hasMany(Timeslot::class);
    }

    public function languageTranslators()
    {
        return $this->hasMany(LanguageTranslator::class);
    }
}
