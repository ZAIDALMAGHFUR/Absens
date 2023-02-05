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
        $Attendance = Attendance::all();
        $user = User::all()->count();
        $positions = Position::all()->count();
        $Holiday = Holiday::all()->count();

        $Presence = Presence::all()->count();
        $PresenceAlfa = $user - $Presence -1;
        $PresenceIzin = Presence::where('is_permission', 1)->count();
        // dd(Attendance::withCount('presences')->get()->toArray());
        return inertia('Admin/Dashboard/Dashboard', [
                'user' => $user,
                'positions' => $positions,
                'Holiday' => $Holiday,
                'Presence' => $Presence,
                'PresenceIzin' => $PresenceIzin,
                'Attendance' => $Attendance,
                'PresenceAlfa' => $PresenceAlfa,
        ]);
    }
}


// dd(Attendance::find(7)->presences->count());
// dd(Attendance::all()->each(function ($item) {
        //     $item->presences;
// })->toArray());