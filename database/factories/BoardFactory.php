<?php

namespace Database\Factories;

use App\Models\Board;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use JetBrains\PhpStorm\ArrayShape;

class BoardFactory extends Factory
{
    protected $model = Board::class;

    /**
     * @return array<string, mixed>
     */
    #[ArrayShape(['name' => "string", 'user_id' => "int"])]
    public function definition(): array
    {
        return [
            'name' => $this->faker->word(),
            'user_id' => User::factory(),
        ];
    }
}
