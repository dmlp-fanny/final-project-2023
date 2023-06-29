<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Request;

class RequestController extends Controller
{
    public function index()
    {
        $requests = Request::query()->with('user')->get();

        return $requests;
    }
}
