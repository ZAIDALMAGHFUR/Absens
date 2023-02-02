<?php

namespace App\Http\Controllers;

use inertia;
use App\Models\User;
use App\Models\Holiday;
use App\Models\Position;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $user = User::all()->count();
        $positions = Position::all()->count();
        $Holiday = Holiday::all()->count();
        return inertia('Admin/Dashboard/Dashboard', [
            'user' => $user,
            'positions' => $positions,
            'Holiday' => $Holiday,
    ]);
    }
}