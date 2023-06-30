<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Language;
use App\Models\Request;
use App\Models\Tag;
use App\Models\Timeslot;
use App\Models\Translator;
use App\Models\User;
use Database\Factories\TagFactory;
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
            TimeslotSeeder::class
        ]);

        User::factory(10)->create();

        $tags = Tag::factory(10)->create();

        Request::factory(10)
            ->state(new Sequence(fn () => ['user_id' => User::all()->random()]))
            ->create()
            ->each(function ($request) use ($tags) {
                $request->tags()->sync($tags->random(mt_rand(1, 2)));
            });

        Translator::factory(10)
            ->create()
            ->each(function ($translator) use ($tags) {
                $translator->tags()->sync($tags->random(mt_rand(1, 4)));
                $translator->timeslots()->sync(Timeslot::all()->random(mt_rand(5, 10)));
                $translator->fromLanguages()->syncWithPivotValues(Language::all()->random(), ['to_language_id' => Language::all()->random()->id]);
            });
    }
}
