<?php

namespace Database\Seeders;

use App\Models\Language;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LanguageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $languages = [
            'Czech',
            'English',
            'French',
            'German',
            'Sign Language',
            'Italian',
            'Hungarian',
            'Spanish',
            'Ukrainian',
            'Vietnamese'
        ];

        foreach ($languages as $language) {
            Language::create(['language_name' => $language]);
        }
    }
}
