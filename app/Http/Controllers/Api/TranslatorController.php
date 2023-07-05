<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Translator;
use Illuminate\Database\Query\JoinClause;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
        $translator = Translator::findOrFail($translator_id)->with('user')->first();

        return $translator;
    }
}
