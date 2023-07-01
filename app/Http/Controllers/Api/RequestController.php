<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Request;
use Illuminate\Http\Request as HttpRequest;

class RequestController extends Controller
{
    public function index()
    {
        $requests = Request::query()->with('user')->get();

        return $requests;
    }

    public function show($translator_id)
    {
        $requests = Request::query()->where('translator_id', $translator_id)->with('user')->get();

        return $requests;
    }

    public function store(HttpRequest $request)
    {
        $newRequest = new Request();

        return $newRequest;
    }
}
