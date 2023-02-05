<?php

namespace App\Http\Controllers;

use inertia;
use App\Models\User;
use App\Models\Holiday;
use App\Models\Position;
use App\Models\Presence;
use App\Models\Attendance;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $user = User::all()->count() - 1;
        $Attendancer = Attendance::withCount('presencesIzin', 'presences');
        $Attendance = $Attendancer->get();
        $positions = Position::all()->count();
        $Holiday = Holiday::all()->count();

        $cobacoba = $Attendance->map(function ($item) {
            $user = User::all()->count();
            return [
                'nama' => $item->title,
                'data' => [
                    'izin' => $item->presences_izin_count,
                    'masuk' => $item->presences_count,
                    'alfa' =>  $user - $item->presences_count - 1,
                ]
            ];
        });
        $Presence = Presence::all()->count();
        $PresenceIzin = Presence::where('is_permission', 1)->count();
        return inertia('Admin/Dashboard/Dashboard', [
                'user' => $user,
                'positions' => $positions,
                'Holiday' => $Holiday,
                'Attendance' => $Attendance,
                'graph' => $cobacoba,
        ]);
    }
}
