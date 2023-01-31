<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AttendancesPosition extends Model
{
    use HasFactory;

    protected $table = 'attendance_position';

    protected $fillable = [
        'attendance_id',
        'position_id'
    ];
}
