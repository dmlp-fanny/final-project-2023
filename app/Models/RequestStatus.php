<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RequestStatus extends Model
{
    use HasFactory;

    protected $table = 'request_status';

    protected $fillable = [
        'request_id',
        'translator_id',
        'status_id',
        'invitation_sent_at'
    ];

    public $timestamps = false;

    public function request() 
    {
        return $this->belongsTo(Request::class);
    }

    public function translator() 
    {
        return $this->belongsToMany(Translator::class);
    } 

    public function status() 
    {
        return $this->belongsTo(Status::class);
    } 
}
