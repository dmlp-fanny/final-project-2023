<?php

namespace App\Actions\Fortify;

use App\Models\Language;
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

        $user = User::create([
            'first_name' => $input['first_name'],
            'last_name' => $input['last_name'],
            'username' => $input['first_name'][0].$input['last_name'],
            'email' => $input['email'],
            'phone_number' => $input['phone_number'],
            'password' => Hash::make($input['password']),
            'location' => $input['location'],
        ]);

        if ($input['isTranslator'] === true)
        {
            $translator = Translator::create([
                'user_id' => $user->id,
                'experience' => $input['experience']
            ]);

            $timeslots = $input['scheduleData'];

            dd($timeslots);

            $translator->tags()->sync(Tag::find($input['tag']));
            $translator->languages()->syncWithPivotValues($input['from_language'], ['to_language_id' => $input['to_language']]);
            
        }

        return $user;
    }
}
