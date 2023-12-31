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
            'Technology', 
            'Entertainment',
            'Finance', 
            'Health', 
            'Travel', 
            'Citizenship',
            'Employment',
            'Others',
            
        ];
       
        foreach ($tags as $tagName) {
            Tag::create(['tag_name' => $tagName]);
        }
    }
}
