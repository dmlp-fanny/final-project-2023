<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Request;
use App\Models\Translator;
use Carbon\Carbon;

class TranslatorController extends Controller
{
    public function index()
    {
        $translators = Translator::with('user')
            ->with([
                'languageTranslators',
                'languageTranslators.fromLanguage',
                'languageTranslators.toLanguage',
                'timeslots',
                'tags'
            ])
            ->get();

        return $translators;
    }

    public function show($translator_id)
    {
        $translator = Translator::with(['user', 'requests', 'potential_requests.request', 'potential_requests.status'])->findOrFail($translator_id);

        return $translator;
    }

    public function matching($request_id)
    {
        $request = Request::with('tags')->findOrFail($request_id);

        $translators = Translator::whereHas('timeslots', function ($query) use ($request) {
            $query->where('timeslots.weekday', Carbon::createFromFormat('Y-m-d', $request->date)->format('l'))
                ->where('timeslots.from_time', '<=', $request->from_time)
                ->where('timeslots.till_time', '>=', $request->till_time);
        })->with('timeslots')
            ->whereHas('tags', function ($query) use ($request) {
                $query->whereIn('tags.id', $request->tags->pluck('id'));
            })->with('tags')
            ->whereHas('languageTranslators', function ($query) use ($request) {
            // $query->where('from_language_id', $request->from_language_id)
            //     ->where('to_language_id', $request->to_language_id);
                $query->where(function ($query) use ($request) {
                    $query->where('from_language_id', $request->from_language_id)
                    ->where('to_language_id', $request->to_language_id);
                })->orWhere(function ($query) use ($request) {
                    $query->where('to_language_id', $request->from_language_id)
                    ->where('from_language_id', $request->to_language_id);
                });
            })
            ->with([
                'languageTranslators',
                'languageTranslators.fromLanguage',
                'languageTranslators.toLanguage'
            ])
            ->with('user')
            ->get();

        return $translators;
    }
}
