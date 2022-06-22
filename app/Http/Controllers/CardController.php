<?php

namespace App\Http\Controllers;

use App\Models\BoardList;
use App\Models\Card;
use Illuminate\Http\Request;

class CardController extends Controller
{

    public function store(Request $request, BoardList $list)
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string'
        ]);

        $list->cards()->create($data);

        return back();
    }

    public function update(Request $request, Card $card)
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string'
        ]);

        $card->update($data);
        return back();
    }

    public function destroy(Card $card)
    {
    }
}
