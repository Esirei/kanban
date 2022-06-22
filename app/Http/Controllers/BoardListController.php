<?php

namespace App\Http\Controllers;

use App\Models\Board;
use App\Models\BoardList;
use Illuminate\Http\Request;

class BoardListController extends Controller
{
    public function store(Request $request, Board $board)
    {
        $data = $request->validate(['name' => 'required|string|max:255']);
        $board->lists()->create($data);
        return back();
    }

    public function update(Request $request, BoardList $boardList)
    {
    }

    public function destroy(BoardList $boardList)
    {
    }
}
