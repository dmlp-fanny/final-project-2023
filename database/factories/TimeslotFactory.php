<?php

namespace Database\Factories;

use Carbon\Carbon;
use Carbon\CarbonImmutable;
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
        $time = CarbonImmutable::createFromFormat('H:i:s', (fake()->numberBetween(7, 15)) . ':00:00');

        return [
            'translator_id' => null,
            'weekday' => fake()->dayOfWeek(),
            'from_time' =>  $time,
            'till_time' => $time->addHours(fake()->numberBetween(4, 8)),
        ];
    }
}
