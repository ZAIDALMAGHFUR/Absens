<?php

namespace App\Http\Controllers;

use App\Models\Position;
use App\Models\positions;
use App\Models\User;
use Illuminate\Http\Request;

class JabatanController extends Controller
{
    public function index()
    {
        $users = json_decode(User::all());
        $position = Position::all();
        return inertia('Admin/Jabatan/jabatan', [
            'Position' => $position,
            'users' => $users,
        ]);
    }

    public function addjabatan()
    {
        return inertia('Admin/Jabatan/addjabatan');
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|unique:positions',
            ]);
        Position::create([
            'name' => $request->name,
        ]);
        return redirect()->back();
    }


    public function edit(Position $position, $id)
    {
        $position = Position::find($id);
        return inertia('Admin/Jabatan/editjabatan', [
            'alljabatan' => $position,
        ]);
    }

    public function update(Request $request, $position)
    {
        $this->validate($request, [
            'name' => 'required|unique:positions',
            ]);

        $position->update([
            'name' => $request->name,
        ]);
        return redirect()->route('jabatan');
    }

    public function destroy($id)
    {
        $position = Position::findOrFail($id);
        $checker= User::where('position_id', $id)->count();
        // jika data jabatan digunakan dalam tabel lain
        if ($checker != 0) {
            return redirect()->back()->with('error', 'Data jabatan tidak dapat dihapus karena digunakan dalam tabel lain.');
        }
        $position->delete();
        return redirect()->route('jabatan');
    }
}