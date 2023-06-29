<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Request;
use App\Models\Timeslot;
use App\Models\Translator;
use App\Models\User;
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
            TimeslotSeeder::class]); 

        Translator::factory(10)->create();
        Request::factory(10)->create();
    }
}
