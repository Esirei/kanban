<?php

namespace App\Http\Controllers;

use App\Models\Board;
use Illuminate\Http\Request;

class BoardController extends Controller
{
    public function index()
    {
        return inertia('Boards', [
            'boards' => auth()->user()->boards,
        ]);
    }

    public function create()
    {
    }

    public function store(Request $request)
    {
    }

    public function show(Board $board)
    {
        return inertia('Board');
    }

    public function edit(Board $board)
    {
    }

    public function update(Request $request, Board $board)
    {
    }

    public function destroy(Board $board)
    {
    }
}
