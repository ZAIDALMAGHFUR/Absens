<?php

namespace App\Http\Controllers;

use App\Models\Position;
use App\Models\Attendance;
use Illuminate\Http\Request;

class AbsensiController extends Controller
{
    public function index()
    {
        $position = Position::all();
        $Attendance = Attendance::all();
        // dd($position);
        return inertia('Admin/Absensi/absensi', [
            'Attendance' => $Attendance,
            'Position' => $position,
        ]);
    }

    public function AddAbsensi()
    {
        $position = Position::where('id', '!=', '1')->get();
        return inertia('Admin/Absensi/AddAbsensi', [
            'Position' => $position,
        ]);
    }


    public function store(Request $request)
    {
        $Attendance = new Attendance();
        $Attendance->title = $request->title;
        $Attendance->description = $request->description;
        $Attendance->start_time = $request->start_time;
        $Attendance->batas_start_time = $request->batas_start_time;
        $Attendance->end_time = $request->end_time;
        $Attendance->batas_end_time = $request->batas_end_time;
        $Attendance->save();
        $array = [];
        foreach ((array)$request->position_id as $key => $value) {
            $array[] = [
                'attendance_id' => $Attendance->id,
                'position_id' => $value
            ];
        }
        $Attendance->izinposisi()->insert($array);
        return redirect()->back();
    }

    public function edit($id)
    {
        $Attendance = Attendance::find($id);
        $position = Position::where('id', '!=', '1')->get();
        return inertia('Admin/Absensi/editabsensi', [
            'allabsensi' => $Attendance,
            'Position' => $position,
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'start_time' => 'required',
            'batas_start_time' => 'required',
            'end_time' => 'required',
            'batas_end_time' => 'required',
            'position_id' => 'required',

        ]);

        $Attendance = Attendance::find($id);
        $Attendance->title = $request->title;
        $Attendance->description = $request->description;
        $Attendance->start_time = $request->start_time;
        $Attendance->batas_start_time = $request->batas_start_time;
        $Attendance->end_time = $request->end_time;
        $Attendance->batas_end_time = $request->batas_end_time;
        $Attendance->save();
        $array = [];
        foreach ((array)$request->position_id as $key => $value) {
            $array[] = [
                'attendance_id' => $Attendance->id,
                'position_id' => $value
            ];
        }
        $Attendance->izinposisi()->insert($array);
        return redirect()->route('absensi');
    }

    public function destroy($id)
    {
        $Attendance = Attendance::find($id);
        $Attendance->delete();
        return redirect()->route('absensi');
    }
}