<?php

namespace Database\Factories;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Timeslot>
 */
class TimeslotFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $time = fake()->time('H:i:s', '19:00:00');
        // $time = mt_rand(strtotime('07:00:00'), strtotime('19:00:00'));

        return [
            'translator_id' => null,
            'weekday' => fake()->dayOfWeek(),
            'from_time' => Carbon::createFromFormat('H:i:s', $time)->roundHours(1),
            'till_time' => Carbon::createFromFormat('H:i:s', $time)->roundHours(1)->addHours(fake()->numberBetween(1,5)),
        ];
    }
}
