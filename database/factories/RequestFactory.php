<?php

namespace Database\Factories;

use App\Models\User;
use Carbon\CarbonImmutable;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Request>
 */
class RequestFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // $time = fake()->numberBetween(7, 19);
        $time = CarbonImmutable::createFromFormat('H:i:s', (fake()->numberBetween(7, 19)) . ':00:00');

        return [
            'user_id' => null,
            'title' => fake()->words(3, true),
            'description' => fake()->paragraph(),
            'date' => fake()->dateTimeBetween('+1 week', '+1 month'),
            'from_time' => $time,
            'till_time' => $time->addHours(fake()->numberBetween(1, 2)),
            'from_language_id' => 4,
            'to_language_id' => 5,
        ];
    }
}
