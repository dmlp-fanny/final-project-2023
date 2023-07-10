<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LanguageTranslator extends Model
{
    use HasFactory;

    protected $table = 'language_translator';

    protected $fillable = [
        'translator_id',
        'from_language_id',
        'to_language_id'
    ];

    public function fromLanguage()
    {
        return $this->belongsTo(Language::class, 'from_language_id');
    }

    public function toLanguage()
    {
        return $this->belongsTo(Language::class, 'to_language_id');
    }
}
