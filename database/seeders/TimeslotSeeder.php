<?php

namespace Database\Seeders;

use App\Models\Timeslot;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TimeslotSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $weekday = [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
        ];

        $times = [
            'option 1' => [7, 9],
            'option 2' => [9, 12],
            'option 3' => [12, 15],
            'option 4' => [15, 18],
        ];

        foreach ($weekday as $day) {
            foreach ($times as $option => $times) {
                $timeslot = new Timeslot();
                $timeslot->weekday = $day;
                $timeslot->from_time = $times[0];
                $timeslot->till_time = $times[1];
                $timeslot->save();
            }
        }
    }
}
