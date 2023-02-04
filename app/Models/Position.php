<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Position extends Model
{
    use HasFactory;

    protected $guarded = ['id'];


    public static function boot()
    {
        parent::boot();

        static::creating(function ($position) {
            if (static::where('name', $position->name)->count() > 0) {
                throw new \Exception('Position name already exists');
            }
        });
    }
}