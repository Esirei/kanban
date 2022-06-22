<?php

namespace Database\Factories;

use App\Models\BoardList;
use Illuminate\Database\Eloquent\Factories\Factory;
use JetBrains\PhpStorm\ArrayShape;

class CardFactory extends Factory
{

    #[ArrayShape(['title' => "string", 'description' => "string", 'board_list_id' => "int"])]
    public function definition(): array
    {
        return [
            'title' => $this->faker->word(),
            'description' => $this->faker->sentence(),
            'board_list_id' => BoardList::factory(),
        ];
    }
}
