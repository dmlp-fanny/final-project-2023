<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function show($user_id)
    {
        $user = User::where('id', $user_id)->with(['translator.tags', 'translator.languageTranslators',
        'translator.languageTranslators.fromLanguage',
        'translator.languageTranslators.toLanguage'])->first();

        return $user;
    }
}
