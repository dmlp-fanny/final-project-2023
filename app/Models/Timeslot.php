<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Timeslot extends Model
{
    use HasFactory;

    protected $fillable = [
        'translator_id', 
        'weekday',
        'from_time',
        'till_time'
    ];

    public function translators()
    {
        return $this->belongsTo(Translator::class);
    }
}
