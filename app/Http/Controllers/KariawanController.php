<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use App\Models\Position;
use Illuminate\Http\Request;
use App\Http\Resources\UserCollection;

class KariawanController extends Controller
{
    public function index(Request $request)
    {
        if ($request->search) {
            $search = $request->get('search');
            $user = new UserCollection(User::where('name', 'like', '%' . $search . '%')->paginate(5));
        } else {
            $user = new UserCollection(User::paginate(5));
        }
        $positions = Position::all();
        $role  = Role::all();
        return inertia('Admin/Karyawan/kariawan', [
            'user' => $user,
            'positions' => $positions,
            'role' => $role,
        ]);
    }

    public function addkariawan(Position $position, Role $role)
    {
        $role  = Role::where('id', '!=', '1')->get();
        $position = Position::all();
        // $role  = Role::all();
        return inertia('Admin/Karyawan/addkariawan', [
            'positions' => $position,
            'role' => $role,
        ]);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|unique:users',
            'password' => 'required',
            'phone' => 'required',
            'position_id' => 'required',
            'role_id' => 'required',
        ]);

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'phone' => $request->phone,
            'position_id' => $request->position_id,
            'role_id' => $request->role_id,
        ]);

        return redirect()->route('kariawan');
    }

    public function edit(User $user, $id)
    {
        $user = User::find($id);
        $position = Position::all();
        $role  = Role::where('id', '!=', '1')->get();
        return inertia('Admin/Karyawan/editkariawan', [
            'allkariawan' => $user,
            'positions' => $position,
            'role' => $role,
        ]);
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required ',
            'password' => 'required',
            'phone' => 'required',
            'position_id' => 'required',
            'role_id' => 'required',
        ]);

        $user = User::findOrFail($id);
        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'phone' => $request->phone,
            'position_id' => $request->position_id,
            'role_id' => $request->role_id,
        ]);
        return redirect()->route('kariawan');
    }

    public function destroy(User $user, $id)
    {
        $user = User::find($id);
        $user->delete();
        return redirect()->route('kariawan');
    }
}