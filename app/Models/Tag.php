<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasFactory;

    public function translators()
    {
        return $this->belongsToMany(Translator::class);
    }

    public function requests()
    {
        return $this->belongsToMany(Request::class);
    }
}
