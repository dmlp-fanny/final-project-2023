<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Request extends Model
{
    use HasFactory;

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function translator()
    {
        return $this->belongsTo(Translator::class);
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    public function from_language()
    {
        return $this->belongsTo(Language::class);
    }

    public function to_language()
    {
        return $this->belongsTo(Language::class);
    }

    public function potential_translators()
    {
        return $this->belongsToMany(Translator::class, 'request_status');
    }
}
