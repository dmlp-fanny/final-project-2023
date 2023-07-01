<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Translator;
use Illuminate\Http\Request;

class TranslatorController extends Controller
{
    public function show ($translator_id) {
        $translator = Translator::findOrFail($translator_id)->with('user')->first();

        return $translator;
    }
}
