<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\PostRequestRequest;
use App\Models\Language;
use App\Models\Request;
use App\Models\Tag;
use Carbon\Carbon;

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
    public function store(PostRequestRequest $request)
    {
        $newRequest = new Request();

        $newRequest->user_id = $request->user()->id;
        $newRequest->title = $request->input('title');
        $newRequest->description = $request->input('description');
        $newRequest->date = $request->input('date');
        $newRequest->from_time = $request->input('time');
        $newRequest->till_time = (Carbon::createFromFormat('H:i', $request->input('time'))->addHours($request->input('duration')));
        $newRequest->from_language_id = $request->input('from_language');
        $newRequest->to_language_id = $request->input('to_language');
        $newRequest->save();

        if ($request->has('tags')) {
            foreach ($request->input('tags') as $tag => $value) {
                $newRequest->tags()->sync(Tag::find($value));
            }
        }

        return $newRequest;
    }
}
