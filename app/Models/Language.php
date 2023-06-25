<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
    use HasFactory;

    public function translators()
    {
        return $this->belongsToMany(Translator::class);
    }

    public function request_from_languages()
    {
        return $this->hasMany(Request::class);
    }
    
    public function request_to_languages()
    {
        return $this->hasMany(Request::class);
    }
}
