<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BoardList extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function board()
    {
        return $this->belongsTo(Board::class);
    }

    public function user()
    {
        return $this->hasOneThrough(
            User::class,
            Board::class,
            'id', // key of joining(through) table on it's table
            'id', // key of related table
            'board_id', // f-key of joining(through) table on this table
            'user_id' // f-key of related table on joining(through) table
        );
    }

    public function cards()
    {
        return $this->hasMany(Card::class);
    }
}
