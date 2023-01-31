<?php

namespace Database\Seeders;

use App\Models\Position;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class PositionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Position::create([
            'name' => 'Operator',
        ]);
        Position::create([
            'name' => 'Ketua kelas',
        ]);
        Position::create([
            'name' => 'Guru',
        ]);
        Position::create([
            'name' => 'Siswa',
        ]);
    }
}