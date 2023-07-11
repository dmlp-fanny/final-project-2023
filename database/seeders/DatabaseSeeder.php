<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Language;
use App\Models\Request;
use App\Models\Tag;
use App\Models\Timeslot;
use App\Models\Translator;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            LanguageSeeder::class,
            StatusSeeder::class,
            TagSeeder::class
        ]);

        User::factory(10)->create();

        Request::factory(10)
            ->state(new Sequence(fn () => ['user_id' => User::all()->random()]))
            ->create()
            ->each(function ($request) {
                $request->tags()->sync(Tag::all()->random(mt_rand(1, 2)));
            });

        Translator::factory(100)
            ->create()
            ->each(function ($translator) {
                $translator->tags()->sync(Tag::all()->random(mt_rand(5, 10)));
                $translator->languages()->syncWithPivotValues(Language::all()->random(), ['to_language_id' => mt_rand(1,2)]);
                Timeslot::factory(5)->create(['translator_id' => $translator->id]);
            });
    }
}
