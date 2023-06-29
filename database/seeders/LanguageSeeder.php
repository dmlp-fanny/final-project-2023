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
            'Arabic', 
            'Bengali', 
            'Bulgarian',
            'Czech',
            'English',
            'Farsi',
            'French',
            'German',
            'Hindi',
            'Indonesian',
            'Mandarin Chinese',
            'Polish',
            'Portuguese',
            'Romanian',
            'Russian',
            'Sign Language',
            'Slovenian',
            'Spanish',
            'Turkish',
            'Ukrainian',
            'Uzbek',
            'Vietnamese'
        ];

        foreach ($languages as $language) {
            $newLanguage = new Language();
            $newLanguage->language_name = $language;
            $newLanguage->save();
        }
    }
}
