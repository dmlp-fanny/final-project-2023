<?php

namespace Database\Seeders;

use App\Models\Tag;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $tags = [
            'Law', 
            'Education', 
            'Medical',
            'Paperwork',
            'Procedure',
            'Technology', 
            'Finance', 
            'Business',
            'Art',
            'Science',
            'Sport',
            'Heath', 
            'Environment', 
            'Food',
            'Travel',
            'Music',
            'History', 
            'Language class', 
            'Politics',
            'Citizenship',
            'Nature',
            'Fashion',
            'Employment',
            'Others',
            
        ];
       
        foreach ($tags as $tagName) {
            Tag::create(['tag_name' => $tagName]);
        }
    }
}
