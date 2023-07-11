<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function show()
    {

        $user = User::with(
            [
                'translator.tags', 'translator.languageTranslators',
                'translator.languageTranslators.fromLanguage',
                'translator.languageTranslators.toLanguage'
            ]
        )->find(Auth::id());

        return $user;
    }
}
