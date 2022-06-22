<?php

namespace Database\Factories;

use App\Models\Board;
use Illuminate\Database\Eloquent\Factories\Factory;
use JetBrains\PhpStorm\ArrayShape;

class BoardListFactory extends Factory
{
    #[ArrayShape(['name' => "array|string", 'board_id' => "int"])]
    public function definition(): array
    {
        return [
            'name' => $this->faker->words(3, true),
            'board_id' => Board::factory(),
        ];
    }
}
