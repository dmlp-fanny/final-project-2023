<?php

namespace App\Actions\Fortify;

use App\Models\Language;
use App\Models\LanguageTranslator;
use App\Models\Tag;
use App\Models\Timeslot;
use App\Models\Translator;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array<string, string>  $input
     */
    public function create(array $input): User
    {
        // dd($input);

        Validator::make($input, [
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique(User::class),
            ],
            'password' => $this->passwordRules(),
            'phone_number' => ['required'],
        ])->validate();

        if ($input['isTranslator'] === true) {
            Validator::make($input, [
                'scheduleData' => 'array: from_time, till_time',
                'selectedTags' => 'array: value, label',
                'languageData' => 'array: from_language, to_language'
            ])->validate();
        }
        
        $user = User::create([
            'first_name' => $input['first_name'],
            'last_name' => $input['last_name'],
            'username' => $input['first_name'][0] . $input['last_name'],
            'email' => $input['email'],
            'phone_number' => $input['phone_number'],
            'password' => Hash::make($input['password']),
            'location' => $input['location'],
        ]);

        if ($input['isTranslator'] === true) {
            $translator = Translator::create([
                'user_id' => $user->id,
                'experience' => $input['experience']
            ]);

            foreach ($input['scheduleData'] as $key => $timeslot) {
                if ($timeslot['day'] !== null and $timeslot['from_time'] !== null and $timeslot['till_time'] !== null) {
                    Timeslot::create([ 
                        'translator_id' => $translator->id,
                        'weekday' => $timeslot['day'],
                        'from_time' => $timeslot['from_time'],
                        'till_time' => $timeslot['till_time']
                    ]);
                }
            }

            $tags = [];
            foreach ($input['selectedTags'] as $key => $tag) {
                $tags[] = $tag['value'];
            }
            $translator->tags()->sync($tags);

            foreach ($input['languageData'] as $language) {
                LanguageTranslator::create([
                    'translator_id' => $translator->id,
                    'from_language_id' => $language['from_language'],
                    'to_language_id' => $language['to_language'],
                ]);
            }

        }

        return $user;
    }
}
