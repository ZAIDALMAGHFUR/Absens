<?php

namespace App\Http\Controllers;

use App\Models\Attendance;
use App\Models\Holiday;
use App\Models\Permission;
use App\Models\Presence;
use Carbon\CarbonPeriod;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $attendances = Attendance::query()
            // ->with('positions')
            ->forCurrentUser(auth()->user()->position_id)
            ->get()
            ->sortByDesc('data.is_end')
            ->sortByDesc('data.is_start');

        return inertia('Home/Index', [
        "title" => "Beranda",
        "attendances" => $attendances
        ]);
    }

    public function show(Attendance $attendance)
    {
        $presences = Presence::query()
            ->where('attendance_id', $attendance->id)
            ->where('user_id', auth()->user()->id)
            ->get();

        $isHasEnterToday = $presences
            ->where('presence_date', now()->toDateString())
            ->isNotEmpty();

        $isTherePermission = Permission::query()
            ->where('permission_date', now()->toDateString())
            ->where('attendance_id', $attendance->id)
            ->where('user_id', auth()->user()->id)
            ->first();

        $data = [
            'is_has_enter_today' => $isHasEnterToday, // sudah absen masuk
            'is_not_out_yet' => $presences->where('presence_out_time', null)->isNotEmpty(), // belum absen pulang
            'is_there_permission' => (bool) $isTherePermission,
            'is_permission_accepted' => $isTherePermission?->is_accepted ?? false
        ];

        $holiday = $attendance->data->is_holiday_today ? Holiday::query()
            ->where('holiday_date', now()->toDateString())
            ->first() : false;

        $history = Presence::query()
            ->where('user_id', auth()->user()->id)
            ->where('attendance_id', $attendance->id)
            ->get();

        // untuku melihat karyawan yang tidak hadir
        $priodDate = CarbonPeriod::create($attendance->created_at->toDateString(), now()->toDateString())
            ->toArray();

        foreach ($priodDate as $i => $date) { // get only stringdate
            $priodDate[$i] = $date->toDateString();
        }

        $priodDate = array_slice(array_reverse($priodDate), 0, 30);

        $tableHistory = '';

        $no = 1;
        foreach ($priodDate as $date) {
            $histo =
                $history->where(
                    'presence_date',
                    $date
                )->first();

            if (!$histo) {
                $tableHistory .= '<tr>';
                $tableHistory .= '<td>' . $no++ . '</td>';
                $tableHistory .= '<td>' . $date . '</td>';
                $tableHistory .= '<td colspan="3">' . ($date == now()->toDateString() ? '<div className="badge text-bg-info">Belum Hadir</div>' : '<div className="badge text-bg-danger">Tidak Hadir</div>') . '</td></tr>';
            } else {
                $tableHistory .= '<tr>';
                $tableHistory .= '<td>' . $no++ . '</td>';
                $tableHistory .= '<td>' . $histo->presence_date . '</td>';
                $tableHistory .= '<td>' . $histo->presence_enter_time . '</td>';
                $tableHistory .= '<td>' . ($histo->presence_out_time ? $histo->presence_out_time : '<span className="badge text-bg-danger">Belum Absensi Pulang</span>') . '</td>';
                $tableHistory .= '<td>' . ($histo->is_permission ?
                    '<div className="badge text-bg-warning">Izin</div>' :
                    '<div className="badge text-bg-success">Hadir</div>') . '</td>';
                $tableHistory .= '</tr>';
            }
        }

        return inertia('Home/Show', [
            "title" => "Informasi Absensi Kehadiran",
            "attendance" => $attendance,
            "data" => $data,
            "holiday" => $holiday,
            'history' => $history,
            'priodDate' => $priodDate,
            'tableHistory' => $tableHistory
        ]);
    }

    public function permission(Attendance $attendance)
    {
        return view('home.permission', [
            "title" => "Form Permintaan Izin",
            "attendance" => $attendance
        ]);
    }

    public function requestPermission(Request $request, Attendance $attendance)
    {
        $validated = $this->validate($request, [
            'title' => 'required',
            'description' => 'required'
        ]);
        Permission::create([
            "user_id" => auth()->user()->id,
            "attendance_id" => $attendance->id,
            "title" => $validated['title'],
            "description" => $validated['description'],
            "permission_date" => now()->toDateString()
        ]);

        return redirect()->route('home.show', $attendance->id)->with('success', 'Permintaan izin sedang diproses. Silahkan tunggu...');
    }


    public function sendEnterPresence(Attendance $attendance)
    {
        if ($attendance->data->is_start && !$attendance->data->is_using_qrcode) { // sama (harus) dengan view
            Presence::create([
                "user_id" => auth()->user()->id,
                "attendance_id" => $attendance->id,
                "presence_date" => now()->toDateString(),
                "presence_enter_time" => now()->toTimeString(),
                "presence_out_time" => null
            ]);

            return back()->with('message', ['success' => true, 'message' => "Kehadiran atas nama '" . auth()->user()->name . "' berhasil dikirim."]);
        }
    }

    public function sendOutPresence(Attendance $attendance)
    {
        // jika absensi sudah jam pulang (is_end) dan tidak menggunakan qrcode (kebalikan)
        if (!$attendance->data->is_end && $attendance->data->is_using_qrcode) { // sama (harus) dengan view
            return false;
        }

        $presence = Presence::query()
            ->where('user_id', auth()->user()->id)
            ->where('attendance_id', $attendance->id)
            ->where('presence_date', now()->toDateString())
            ->where('presence_out_time', null)
            ->first();

        if (!$presence) { // hanya untuk sekedar keamanan (kemungkinan)
            return back()->with('message', ['success' => false, 'message' => "Terjadi masalah pada saat melakukan absensi."]);
        }

        $presence->update(['presence_out_time' => now()->toTimeString()]);

        return back()->with('message', ['success' => true, 'message' => "Atas nama '" . auth()->user()->name . "' berhasil melakukan absensi pulang."]);
    }
}
