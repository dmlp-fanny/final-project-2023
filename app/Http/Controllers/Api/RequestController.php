<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\PostRequestRequest;
use App\Models\Language;
use App\Models\Request;
use App\Models\RequestStatus;
use App\Models\Tag;
use Carbon\Carbon;
use Illuminate\Support\Facades\Redis;

class RequestController extends Controller
{
    public function index()
    {
        $requests = Request::query()->with(['user','from_language','to_language', 'tags'])->get();

        return $requests;
    }

    public function show($request_id)
    {
        $request = Request::with(['from_language', 'to_language', 'tags'])->find($request_id);

        return $request;
    }

    public function showUserRequests($user_id) // users
    {
        $requests = Request::query()->where('user_id', $user_id)->with(['from_language', 'to_language', 'translator.user', 'potential_translators', 'potential_translators.status', 'potential_translators.translator', 'potential_translators.translator.user'])->get();

        return $requests;
    }

    public function showUserPendingRequests($user_id) // users
    {
        $requests = RequestStatus::with(['request', 'status'])->whereHas('request', function ($query) use ($user_id) {
            $query->where('requests.user_id', $user_id)->where('requests.status', null);
        })->get();

        return $requests;
    }

    public function storeOrUpdate(PostRequestRequest $request, $request_id = null) //users 
    {
        // $newRequest = new Request();

        // $newRequest->user_id = $request->user()->id;
        // $newRequest->title = $request->input('title');
        // $newRequest->description = $request->input('description');
        // $newRequest->date = $request->input('date');
        // $newRequest->from_time = $request->input('time');
        // $newRequest->till_time = (Carbon::createFromFormat('H:i', $request->input('time'))->addHours($request->input('duration')));
        // $newRequest->from_language_id = $request->input('from_language');
        // $newRequest->to_language_id = $request->input('to_language');
        // $newRequest->save();

        // if ($request->has('tags')) {
        //     foreach ($request->input('tags') as $value) {
        //         $newRequest->tags()->sync(Tag::find($value));
        //     }
        // }

        // return $newRequest->id;

        // dd($request_id);

        if ($request_id) {
            $requestedRequest = Request::findOrFail($request_id);
        } else {
            $requestedRequest = new Request();
        }

        $requestedRequest->user_id = $request->user()->id;
        $requestedRequest->title = $request->input('title');
        $requestedRequest->description = $request->input('description');
        $requestedRequest->date = $request->input('date');
        $requestedRequest->from_time = $request->input('time');
        $requestedRequest->till_time = (Carbon::createFromFormat('H:i', $request->input('time'))->addHours($request->input('duration')));
        $requestedRequest->from_language_id = $request->input('from_language');
        $requestedRequest->to_language_id = $request->input('to_language');
        $requestedRequest->save();

        if ($request->has('tags')) {
            foreach ($request->input('tags') as $value) {
                $requestedRequest->tags()->sync(Tag::find($value));
            }
        }

        return $requestedRequest->id;
    }

}
